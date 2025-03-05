"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#4197D4]">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-center font-marcellus text-3xl font-[400] leading-[110%] text-[#fff] lg:text-start lg:text-5xl">
              Nostimo <br />
              Signature <br />
              Steaks
            </h1>
          </div>
          <p className="w-full max-w-[250px] text-center font-inter text-sm font-[300] leading-[160%] tracking-[0.54px] text-[#000] lg:mt-40 lg:text-start">
            Inhale the intoxicating aroma of Greek grill and spice, and, pretty
            soon, you won’t feel like you’re in London anymore
          </p>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
