"use client";
import type { CartItem, CartItemModifier } from "@/types/cart-item.type";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cartSheetOpen: boolean;
  setCartSheetOpen: (open: boolean) => void;
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, modifiers?: CartItemModifier[]) => void;
  updateItem: (item: CartItem, index: number) => void;
  clearCart: () => void;
  cartValue: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const generateCartItemKey = (item: Pick<CartItem, "_idMenuItem" | "modifiers">): string => {
  const modifiersKey = item.modifiers ? JSON.stringify(item.modifiers.sort((a, b) => a._idModifiers.localeCompare(b._idModifiers))) : "";
  return `${item._idMenuItem}-${modifiersKey}`;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [cartSheetOpen, setCartSheetOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart) as CartItem[]);
    }
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (initialLoad) return;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, initialLoad]);

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemKey = generateCartItemKey(item);
      const existingItem = prevItems.find((i) => generateCartItemKey(i) === itemKey);
      if (existingItem) {
        return prevItems.map((i) => (generateCartItemKey(i) === itemKey ? item : i));
      }
      return [...prevItems, item];
    });
  };

  const cartValue = () => {
    return parseFloat(
      cartItems
        .reduce((acc, item) => {
          return acc + item.price.value * (item.quantity ?? 1);
        }, 0)
        .toFixed(2)
    );
  };

  const removeItem = (id: string, modifiers?: CartItemModifier[]) => {
    setCartItems((prevItems) => {
      const itemToRemove = { _idMenuItem: id, modifiers: modifiers ?? [] };
      const itemKey = generateCartItemKey(itemToRemove);
      return prevItems.filter((item) => generateCartItemKey(item) !== itemKey);
    });
  };

  const updateItem = (updatedItem: CartItem, index: number) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const actualIndex = prevItems.length - 1 - index;
      if (actualIndex >= 0 && actualIndex < newItems.length) {
        newItems[actualIndex] = updatedItem;
      }
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        cartSheetOpen,
        setCartSheetOpen,
        cartValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
