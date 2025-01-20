"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${position} top-5 z-50 flex h-[10vh] w-full items-center bg-transparent p-4 px-4 transition-all duration-300 ease-in-out md:px-[50px] lg:px-[80px]`}
    >
      <div className="flex h-full w-full flex-row items-center justify-between">
        <Link href="/" className="flex md:hidden">
          <Image
            src="/images/hero/logo.png"
            width={140}
            height={120}
            alt="logo"
            className="w-24"
          />
        </Link>
        {!isScrolled && (
          <div className="hidden w-full flex-row items-center gap-[3.48rem] md:flex">
            <div className="flex flex-row items-center justify-between gap-40 pt-6">
              <Link href="/">
                <Image
                  src="/images/hero/logo.png"
                  width={140}
                  height={120}
                  alt="logo"
                  className="w-28"
                />
              </Link>
              <div className="flex flex-row">
                <div
                  className={cn(
                    "flex w-fit items-center justify-center gap-6 border border-[#AF8032] bg-transparent pl-6",
                    pathname !== "/" && "bg-primary",
                  )}
                >
                  <Button
                    asChild
                    variant="link"
                    className="font-poppins rounded-none border-r-2 border-r-[#AF8032] py-10 text-center text-base font-[500] uppercase tracking-[3px] text-[#F5B956]"
                  >
                    <Link href="/">Menu</Link>
                  </Button>
                  <Button
                    asChild
                    variant="link"
                    className="font-poppins rounded-none border-r-2 border-r-[#AF8032] py-10 text-center text-base font-[500] uppercase tracking-[3px] text-[#F5B956]"
                  >
                    <Link href="/">ABOUT</Link>
                  </Button>

                  <Button
                    asChild
                    variant="link"
                    className="font-poppins rounded-none border-r-2 border-r-[#AF8032] py-10 text-center text-base font-[500] uppercase tracking-[3px] text-[#F5B956]"
                  >
                    <Link href="/">CULINARY GALLERY</Link>
                  </Button>
                  <Button
                    asChild
                    variant="link"
                    className="font-poppins rounded-none border-r-2 border-r-[#AF8032] py-10 text-center text-base font-[500] uppercase tracking-[3px] text-[#F5B956]"
                  >
                    <Link href="/">CONTACT US</Link>
                  </Button>
                  <Button
                    asChild
                    variant="link"
                    className="font-poppins rounded-none border-r-2 border-r-[#AF8032] py-10 text-center text-base font-[500] uppercase tracking-[3px] text-[#F5B956]"
                  >
                    <Link href="/">Contact</Link>
                  </Button>
                </div>
                <div>
                  <Button
                    asChild
                    variant="link"
                    className="font-poppins rounded-none bg-[#AF8032] py-10 text-center text-base font-[500] uppercase tracking-[3px] text-[#fff]"
                  >
                    <Link href="/">book table</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
