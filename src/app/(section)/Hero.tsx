import { Button } from "@/components/ui/button";
import React from "react";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center bg-black px-4 md:px-[50px] lg:px-[80px] 2xl:px-[120px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/bg.mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-10 left-4 lg:bottom-16 lg:left-[120px]">
        <div className="flex flex-row gap-4">
          <Twitter className="h-8 w-8 text-[#fff]" />
          <Instagram className="h-8 w-8 text-[#fff]" />
          <Youtube className="h-8 w-8 text-[#fff]" />
        </div>
      </div>
      <div className="lg: relative flex flex-col items-center justify-center gap-6">
        <h1 className="text-center font-marcellus text-5xl font-[400] uppercase tracking-[2.5px] text-[#fff] lg:text-9xl lg:leading-[110px]">
          Nostimo <br />
          London
        </h1>
        <p className="w-full max-w-[500px] text-center font-marcellus text-lg font-[400] uppercase tracking-[1px] text-[#fff] lg:text-xl lg:leading-[30px]">
          A Haven of Greek-Mediterranean Gastronomy in the Heart of London
        </p>
        <div>
          <Button className="rounded-none bg-[#4197D4] px-7 py-6 font-poppins text-base font-[500] uppercase text-[#fff]">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
