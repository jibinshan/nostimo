import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-3xl font-normal text-[#AF8032]"
            >
              Menu
            </Link>
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-3xl font-normal text-[#AF8032]"
            >
              About
            </Link>

            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-3xl font-normal text-[#AF8032]"
            >
              GALLERY
            </Link>
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-3xl font-normal text-[#AF8032]"
            >
              CONTACT US
            </Link>
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-3xl font-normal text-[#AF8032]"
            >
              Contact
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
