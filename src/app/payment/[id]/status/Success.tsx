import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { formattedItemPrice } from "@/lib/formatted-item-price";
<<<<<<< HEAD
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { cn } from "@/lib/utils";
import type { RefreshPayment } from "@/types/refresh-payment.type";
import { ChevronDown, MoveLeft, Search } from "lucide-react";
=======
import { cn } from "@/lib/utils";
import type { RefreshPayment } from "@/types/refresh-payment.type";
import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { ChevronDown, Search } from "lucide-react";
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";

interface SuccessProps {
<<<<<<< HEAD
    data: RefreshPayment;
    id: string;
}

const Success: FC<SuccessProps> = ({ data, id }) => {
    const { restaurant } = useRestaurant();
    const { clearCart } = useCart();
    const [close, setClose] = useState(false);

    useEffect(() => {
        if (data?._id) {
            clearCart();
            localStorage.removeItem("pickup");
            localStorage.removeItem("delivery");
            localStorage.removeItem("scrollCategory");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if (!data) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-menubackground">
                <p className="text-4xl font-[600] tracking-[2px] text-menuprimary">Placing your order...</p>
                <Image src="/images/payment/loading.png" width={147} height={147} alt="loading" />
            </div>
        );
    }

=======
    id: string;
}

const Success: FC<SuccessProps> = ({ id }) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const { restaurant } = useRestaurant()
    const { clearCart } = useCart();
    const [close, setClose] = useState(true);
    const { data } = useQuery({
        queryKey: ["stripe", id, "refresh-payment"],
        queryFn: async () => {
            return await axios.get(`${apiUrl}/stripe/${id}/refresh-payment`).then(
                (
                    res: AxiosResponse<{
                        data: RefreshPayment;
                    }>
                ) => res.data.data
            )
        },
        enabled: !!id,
    });

    useEffect(() => {
        if (data?._id) {
            clearCart()
        }
    }, [data])

    if (!data) {
        return <div>Loading...</div>;
    }


>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
    return (
        // <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
        //   <div className="flex aspect-square h-32 w-32 items-center justify-center rounded-full bg-primary p-4">
        //     <Check size={64} />
        //   </div>
        //   <h1 className="mt-4 text-3xl font-bold">Payment Successful</h1>
        //   <p className="mt-2 text-center text-lg">
        //     Your payment has been successfully processed. Thank you for your order.
        //   </p>

        //   <Button className="mt-4" asChild>
        //     <Link href="/">Go Home</Link>
        //   </Button>
        // </main>
<<<<<<< HEAD
        <section className="relative flex h-full w-full flex-col bg-menubackground md:px-[130px]">
            <div className="flex w-full flex-col items-center justify-center">
                {/*head section */}
                <div className="flex w-full flex-row items-center justify-between bg-menubackground px-4 py-4 md:flex-col md:items-start md:gap-12 md:px-24 md:py-8">
                    <Link href="/menu" replace className="md:hidden">
                        <Image src={"/images/home/checkout/arrow.png"} width={30} height={26} alt="heart" />
                    </Link>
                    <Link href="/" replace className="pt-4">
                        <Image src={"/images/logo.png"} width={129} height={48} alt="heart" />
                    </Link>
                    <Link href="/menu" replace className="font-manrope hidden items-center justify-center gap-2 px-[120px] text-lg text-menusecondary md:flex">
                        <MoveLeft />
                        <p className="font-manrope text-lg text-menusecondary">Back To Menu</p>
                    </Link>
                    <Search className="h-0 w-0" />
                </div>

                {/*first section */}
                <div className="relative h-full w-full bg-menubackground pb-6 md:w-2/4">
                    <div className="absolute bottom-1 left-0 top-1">
                        <Image src={"/images/home/checkout/left.png"} width={124} height={240} alt="heart" />
                    </div>
                    <div className="absolute bottom-1 right-0 top-1">
                        <Image src={"/images/home/checkout/right.png"} width={124} height={240} alt="heart" />
=======
        <section className="relative flex h-full w-full flex-col">
            <div>
                {/*head section */}
                <div className="flex flex-row items-center justify-between bg-[#000] px-4 py-4 md:px-24 md:py-8">
                    <Link href="/menu">
                        <Image
                            src={"/images/home/checkout/arrow.png"}
                            width={30}
                            height={26}
                            alt="heart"
                        />
                    </Link>
                    <Link href={"#"} className="pt-4">
                        <Image
                            src={"/images/logo.png"}
                            width={129}
                            height={48}
                            alt="heart"
                        />
                    </Link>

                    <Search className="h-0  w-0" />
                </div>

                {/*first section */}
                <div className="relative h-full w-full bg-[#000] pb-6">
                    <div className="absolute bottom-1 left-0 top-1">
                        <Image
                            src={"/images/home/checkout/left.png"}
                            width={124}
                            height={240}
                            alt="heart"
                        />
                    </div>
                    <div className="absolute bottom-1 right-0 top-1">
                        <Image
                            src={"/images/home/checkout/right.png"}
                            width={124}
                            height={240}
                            alt="heart"
                        />
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
                    </div>
                    <div
                        className="flex h-full w-full flex-col items-center justify-center gap-3 pb-12 pt-6 md:pt-12"
                        style={{
                            backgroundImage: "url('/images/home/checkout/bg.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        <div>
<<<<<<< HEAD
                            <button className="font-manrope bg-menubackground px-5 py-3 text-sm font-[800] leading-[150%] text-menuprimary md:text-base">
                                ORDER #{id.slice(-5)}
                            </button>
                        </div>
                        <h4 className="font-manrope text-center text-2xl font-[500] leading-[150%] text-menubackground md:text-4xl">We’ve got your order</h4>
                        <div className="flex flex-col">
                            <h5 className="font-manrope border-b-[1px] border-b-black text-center text-base font-[800] leading-[150%] text-menubackground md:text-lg">
                                Scheduled {data?.orderType === 2 ? "Delivery" : "Pickup"} Time
                            </h5>
                            <span className="font-manrope text-center text-lg font-[800] leading-[150%] text-menubackground md:text-xl">
=======
                            <button className="font-manrope bg-[#000] px-5 py-3 text-sm font-[800] leading-[150%] text-[#D5A859] md:text-base">
                                ORDER #{id.slice(-5)}
                            </button>
                        </div>
                        <h4 className="font-manrope text-center text-2xl font-[500] leading-[150%] text-[#000] md:text-4xl">
                            We’ve got your order
                        </h4>
                        <div className="flex flex-col">
                            <h5 className="font-manrope text-center text-base font-[800] leading-[150%] text-[#000] md:text-lg">
                                Scheduled{' '}{data?.orderType === 2 ? "Delivery" : "Pickup"}{' '} Time
                            </h5>
                            <span className="font-manrope text-center text-lg font-[800] leading-[150%] text-[#000] md:text-xl">
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
                                {new Date(data?.deliveryTime ?? new Date()).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

                {/*second section */}
<<<<<<< HEAD
                <div className="flex w-full flex-col gap-6 bg-menubackground px-4 py-4 md:w-2/4 md:px-0 md:py-8">
                    <div className="flex flex-col gap-2 bg-itembackground p-4 md:p-6">
                        <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-lg">Restaurant Details</h5>
                        <h4 className="font-manrope pb-2 text-sm font-[400] capitalize leading-[80%] tracking-[0.86px] text-menusecondary md:text-lg">{restaurant?.name}</h4>
                        <p className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-menusecondary md:text-base">
                            {restaurant?.address.firstLine} {restaurant?.address.secondLine}
                            <br />
                            {restaurant?.address.city}
                            {restaurant?.address.countryCode}
                            {restaurant?.address.postCode}
                        </p>
                        <span className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-menusecondary underline decoration-menusecondary decoration-1 underline-offset-4 md:text-base">
                            {restaurant?.contactNumber}
                        </span>
                        <div className="flex flex-row gap-3 pt-6">
                            <Link
                                href={`https://www.google.com/maps/place/${restaurant?.address?.coords[0]},${restaurant?.address?.coords[1]}`}
                                target="_blank"
                                className="font-inter border border-menuprimary bg-menubackground px-4 py-3 text-center text-sm font-[700] uppercase leading-[22px] text-menuprimary hover:bg-menuprimary hover:text-menusecondary md:text-base"
                            >
                                Get Directions
                            </Link>
                            <Link
                                href={`tel:${restaurant?.contactNumber}`}
                                target="_blank"
                                className="font-inter border border-menuprimary bg-menubackground px-4 py-3 text-center text-sm font-[700] uppercase leading-[22px] text-menuprimary hover:bg-menuprimary hover:text-menusecondary md:text-base"
                            >
                                Call restaurant
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-4 md:pb-6">
                        <div className="flex flex-row justify-between border-b-[0.5px] border-menuprimary pb-2" onClick={() => setClose(!close)}>
                            <h5 className="font-manrope text-lg font-[700] leading-[150%] text-menusecondary md:text-xl">View order details</h5>
                            <ChevronDown className={cn("h-6 w-6 rotate-180 transition-all duration-500 ease-in", !close && "rotate-0")} />
                        </div>
                        <div className={cn("flex w-full flex-col gap-3 overflow-hidden")}>
                            {close &&
                                data.cart.map((item, index) => {
                                    return (
                                        <div className={cn("flex max-h-[1000px] flex-col justify-between gap-2 pb-2 transition-all duration-500 ease-in")} key={index}>
                                            <div className="flex w-full justify-between">
                                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">
                                                    {item.quantity} x {item?.menuItemName}
                                                    <br />
                                                    {item?.notes && <span className="border-b-[1px] border-b-menusecondary">Instructions</span>}
                                                    {item?.notes && <br />}
                                                    {item.notes}
                                                </h5>
                                                <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                                    £{formattedItemPrice(item?.price.value * item.quantity)}
                                                </span>
                                            </div>
                                            {Object.entries(
                                                item?.modifiers?.reduce((acc: Record<string, { count: number; price: number }>, mod) => {
                                                    const name = mod?.menuItem?.name;
                                                    if (name) {
                                                        if (!acc[name]) {
                                                            acc[name] = { count: 0, price: mod?.price?.value };
                                                        }
                                                        acc[name].count += 1;
                                                    }
                                                    return acc;
                                                }, {})
                                            ).map(([name, { count, price }], i) => (
                                                <div className="flex w-full justify-between pl-4" key={i}>
                                                    <h5 className="font-manrope text-sm font-[400] leading-[150%] text-menusecondary md:text-base">
                                                        {count} x {name}
                                                    </h5>
                                                    <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                                        £{formattedItemPrice(price * count)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            {close && (
                                <div className="flex flex-row justify-between pb-2">
                                    <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">Sub-Total</h5>
                                    <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                        £{formattedItemPrice(data?.totalCartAmount)}
                                    </span>
                                </div>
                            )}
                            {/* {close && (
                                <div className="flex flex-row justify-between border-b border-menuprimary pb-2">
                                    <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">Service Charge</h5>
                                    <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                        £{calculateServiceCharge(data?.totalCartAmount, restaurant?.serviceCharge ?? 0).toFixed(2)}
                                    </span>
                                </div>
                            )} */}
                            {close &&
                                data?.charges.map((charge) => {
                                    if (charge?.isActive) {
                                        if (charge.isPercentage) {
                                            return (
                                                <div className="flex flex-row justify-between pb-2" key={charge._id}>
                                                    <p className="font-manrope text-sm font-[400] leading-[150%] text-menusecondary md:text-base">{charge.name}</p>
                                                    <p className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                                        {getCurrencySymbol("GBP")} {((data?.totalCartAmount * charge?.value) / 100).toFixed(2)}
                                                    </p>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="flex flex-row justify-between pb-2" key={charge._id}>
                                                    <p className="font-manrope text-sm font-[400] leading-[150%] text-menusecondary md:text-base">{charge.name}</p>
                                                    <p className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                                        {getCurrencySymbol("GBP")} {(charge?.value).toFixed(2)}
                                                    </p>
                                                </div>
                                            );
                                        }
                                    }
                                })}
                            {close && <div className="h-[0.2px] w-full bg-menuprimary" />}
                            <div className="flex flex-row justify-between pb-2">
                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">Order Total</h5>
                                <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">£{formattedItemPrice(data?.totalAmount)}</span>
=======
                <div className="flex flex-col gap-6 bg-[#0F0F0F] px-4 py-4 md:px-24 md:py-8">
                    <div className="flex flex-col gap-2">
                        <h5 className="font-manrope text-sm font-[700] leading-[150%] text-[#FBEAD2] md:text-lg">
                            Restaurant Details
                        </h5>
                        <h4 className="font-manrope pb-2 text-sm font-[400] capitalize leading-[80%] tracking-[0.86px] text-[#FBEAD2] md:text-lg">
                            {restaurant?.name}
                        </h4>
                        <p className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-[#FBEAD2] md:text-base">
                            {restaurant?.address.firstLine}{' '}{restaurant?.address.secondLine}<br />{restaurant?.address.city}{restaurant?.address.countryCode}{restaurant?.address.postCode}
                        </p>
                        <span className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-[#FBEAD2] underline decoration-[#FBEAD2] decoration-1 underline-offset-4 md:text-base">
                            {restaurant?.contactNumber}
                        </span>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Link href={`https://www.google.com/maps/place/${restaurant?.address?.coords[0]},${restaurant?.address?.coords[1]}`} className="border border-[#BC995D] px-4 py-3 text-center font-inter text-sm font-[700] uppercase leading-[22px] text-[#BC995D] hover:bg-[#BC995D] hover:text-white md:text-base">
                            Get Directions
                        </Link>
                        <Link href={`tel:${restaurant?.contactNumber}`} className="border border-[#BC995D] px-4 py-3 text-center font-inter text-sm font-[700] uppercase leading-[22px] text-[#BC995D] hover:bg-[#BC995D] hover:text-white md:text-base">
                            Call restaurant
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 pb-4 md:pb-6">
                        <div className="flex flex-row justify-between border-b border-[#BC995D] pb-2"
                            onClick={() =>
                                setClose(!close)
                            }
                        >
                            <h5 className="font-manrope text-lg font-[700] leading-[150%] text-[#FBEAD2] md:text-xl">
                                View order details
                            </h5>
                            <ChevronDown className={cn("h-6 w-6 transition-all duration-500 ease-in", !close && 'rotate-180')} />
                        </div>
                        <div className={cn("w-full flex flex-col gap-3 transition-all duration-500 ease-in",
                            !close && "hidden"
                        )}>
                            <div className="flex flex-row justify-between border-b border-[#BC995D] pb-2">
                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-[#FBEAD2] md:text-base">
                                    Sub-Total
                                </h5>
                                <span className="font-manrope text-sm font-[700] leading-[150%] text-[#BC995D] md:text-base">
                                    £{formattedItemPrice(data?.totalCartAmount)}
                                </span>
                            </div>
                            <div className="flex flex-row justify-between border-b border-[#BC995D] pb-2">
                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-[#FBEAD2] md:text-base">
                                    Order Total
                                </h5>
                                <span className="font-manrope text-sm font-[700] leading-[150%] text-[#BC995D] md:text-base">
                                    £{formattedItemPrice(data?.totalAmount)}
                                </span>
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
                            </div>
                        </div>
                    </div>
                </div>

                {/*last section */}
<<<<<<< HEAD
                <div className="flex w-full flex-col gap-4 bg-menubackground md:w-2/4">
                    {data?.notes && (
                        <div className="flex w-full flex-col items-center justify-center gap-2 bg-menubackground px-2 py-4">
                            <p className="font-manrope w-full text-start text-xs font-[500] capitalize leading-[20px] tracking-[0.74px] text-menusecondary md:text-lg">
                                Packaging Instructions Given
                            </p>
                            {/* <Image src={"/images/home/checkout/heart.png"} width={55} height={42} alt="heart" /> */}
                            <p className="font-manrope w-full text-start text-xs font-[400] capitalize text-menusecondary md:text-base">{data?.notes}</p>
                        </div>
                    )}
                    <div className="flex w-full flex-row items-center justify-center gap-2 bg-menuprimary px-2 py-4">
                        {/* <Image src={"/images/home/checkout/heart.png"} width={55} height={42} alt="heart" /> */}
                        <p className="font-manrope text-xs font-[500] capitalize leading-[20px] tracking-[0.74px] text-menubackground md:text-lg">
                            Thanks for choosing us! Your food will be freshly prepared and ready soon.
=======
                <div className="flex flex-col bg-[#0F0F0F]">
                    <div className="flex w-full flex-row items-center justify-center gap-2 bg-[#E4B35E] px-2 py-4">
                        <Image
                            src={"/images/home/checkout/heart.png"}
                            width={55}
                            height={42}
                            alt="heart"
                        />
                        <p className="font-manrope text-xs font-[500] capitalize leading-[20px] tracking-[0.74px] text-[#000] md:text-lg">
                            You are now 2 cillies away from a Reward{" "}
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
                        </p>
                    </div>
                    {data.orderType !== 2 && (
                        <div className="flex flex-col items-center justify-center gap-4 py-6 md:py-8">
<<<<<<< HEAD
                            <h3 className="font-manrope pt-4 text-center text-lg font-[800] leading-[150%] text-menuprimary md:pt-6 md:text-2xl">How to collect your food </h3>
                            <div>
                                <span className="font-manrope flex h-12 w-12 items-center justify-center rounded-full bg-menuprimary text-center text-base font-[800] leading-[150%] text-menusecondary md:text-xl">
                                    1
                                </span>
                            </div>
                            <p className="font-manrope w-[280px] text-center text-base font-[400] capitalize leading-[25px] tracking-[0.86px] text-menusecondary md:w-full md:text-lg">
=======
                            <h3 className="font-manrope pt-4 text-center text-lg font-[800] leading-[150%] text-[#BC995D] md:pt-6 md:text-2xl">
                                How to collect your food{" "}
                            </h3>
                            <div>
                                <span className="font-manrope flex h-12 w-12 items-center justify-center rounded-full bg-[#BC995D] text-center text-base font-[800] leading-[150%] text-[#FFF] md:text-xl">
                                    1
                                </span>
                            </div>
                            <p className="font-manrope w-[280px] text-center text-base font-[400] capitalize leading-[25px] tracking-[0.86px] text-[#FBEAD2] md:w-full md:text-lg">
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
                                Head to the restaurant to pick up order
                            </p>
                        </div>
                    )}
                </div>
            </div>
<<<<<<< HEAD
            <div className="flex w-full justify-end bg-menubackground px-7 py-6">
                <Link href="https://foodo.ai" className="text-primary hover:underline" target="_blank">
                    Powered By Foodo
                </Link>
            </div>
        </section>
=======
            <div className="w-full flex justify-end px-7 py-6 bg-[#0F0F0F]">
                <Link
                    href="https://foodo.ai"
                    className="text-primary hover:underline"
                    target="_blank"
                >
                    Powered By Foodo
                </Link>
            </div>
        </section >
>>>>>>> fd5b8389a304bb5bb0d97e89eb3c22d09615f994
    );
};

export default Success;
