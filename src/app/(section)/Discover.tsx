import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Discover: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#0C1213] px-4 pb-40 pt-8 lg:px-[80px] lg:pt-40 2xl:px-[120px]">
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative">
          <div className="absolute -bottom-14 left-0 h-[50%] border-l-[1px] border-[#AF8032]"></div>
          <Image
            src={"/images/discover/turkish.png"}
            width={649}
            height={896}
            alt="turkish"
            className="h-full w-full rounded-tl-[200px] lg:h-[700px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-[90%] border-b-[1px] border-[#AF8032]"></div>

      <div className="relative z-20 flex flex-col gap-4 lg:gap-8">
        <Image
          src={"/images/discover/Nostimo.png"}
          width={1396}
          height={245}
          alt="nostimo"
          className="h-full w-full lg:pb-6"
        />
        <h2 className="font-marcellus text-3xl font-[400] uppercase text-[#A59982] lg:text-5xl lg:leading-[1.50px]">
          DISCOVER THE TASTE
        </h2>
        <p className="w-full max-w-[470px] font-inter text-base font-[300] leading-[24px] tracking-[0.36px] text-[#A59982]">
          Made by Mediterranean kitchen lovers, for Mediterranean kitchen
          lovers. From our mouth-watering moussaka to our sumptuous souvlaki,
          we’re committed to tasty Greek fare. After all, Nostimo literally
          translates to ‘yummy’…
        </p>
        <div>
          <Button className="font-poppins mt-2 rounded-none bg-[#A37426] px-7 py-6 text-base uppercase text-[#fff] lg:mt-0">
            Book a table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
