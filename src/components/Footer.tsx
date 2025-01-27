"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { Button } from "./ui/button";
import { Instagram, Facebook, Chrome } from "lucide-react";

const Footer = ({}) => {
  return (
    <footer className="py- h-full w-full bg-[#111B20] pt-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-between px-8 lg:flex-row">
          <div className="w-full border-t-[1px] border-t-[#A59982] lg:w-[45%]"></div>
          <div>
            <Image
              src="/images/hero/f-logo.png"
              width={140}
              height={120}
              alt="logo"
              className="w-36"
            />
          </div>
          <div className="w-full border-t-[1px] border-t-[#A59982] lg:w-[45%]"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-10">
          <div className="flex flex-row">
            <Button
              asChild
              variant="link"
              className="text-center font-playfair text-base font-[400] capitalize tracking-[1px] text-[#A59982] lg:text-lg"
            >
              <Link href="/">Menu</Link>
            </Button>
          </div>
          <Button
            asChild
            variant="link"
            className="text-center font-playfair text-base font-[400] capitalize tracking-[1px] text-[#A59982] lg:text-lg"
          >
            <Link href="/">ABOUT</Link>
          </Button>

          <Button
            asChild
            variant="link"
            className="text-center font-playfair text-base font-[400] capitalize tracking-[1px] text-[#A59982] lg:text-lg"
          >
            <Link href="/">Gallery</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-center font-playfair text-base font-[400] capitalize tracking-[1px] text-[#A59982] lg:text-lg"
          >
            <Link href="/">FOOD & DRINK</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-center font-playfair text-base font-[400] capitalize tracking-[1px] text-[#A59982] lg:text-lg"
          >
            <Link href="/">CONTACT US</Link>
          </Button>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href={"#"}>
            <Image
              src="/images/footer/insta.svg"
              width={42}
              height={42}
              alt="logo"
              className="w-14"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/images/footer/view.svg"
              width={42}
              height={42}
              alt="logo"
              className="w-14"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/images/footer/google.svg"
              width={42}
              height={42}
              alt="logo"
              className="w-14"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/images/footer/fb.svg"
              width={42}
              height={42}
              alt="logo"
              className="w-14"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h5 className="font-marcellus text-center text-base font-[400] tracking-[0.96px] text-[#A59982]">
            Call Us For Your Orders
          </h5>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="font-marcellus text-center text-lg font-[400] tracking-[0.96px] text-[#A59982]">
              020 8802 5585
            </p>
            <p className="font-marcellus text-center text-base font-[400] tracking-[0.96px] text-[#A59982]">
              OR
            </p>
            <p className="font-marcellus text-center text-base font-[400] tracking-[0.96px] text-[#A59982]">
              order via Delivaroo & Uber eats
            </p>
          </div>
        </div>
        <div className="flex flex-col px-8">
          <div>
            <div className="w-full border-t-[1px] border-t-[#A59982]"></div>
          </div>
          <div className="flex flex-col items-center justify-center py-6 lg:flex-row lg:items-start lg:justify-between">
            <h4 className="font-sans text-xs font-[400] uppercase tracking-[1.6px] text-[#A59982] lg:text-sm">
              © 2025 Nostimo , All Rights Reserved
            </h4>
            <h4 className="font-sans text-xs font-[400] uppercase tracking-[1.6px] text-[#A59982] lg:text-sm">
              Powerd by foodo
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
