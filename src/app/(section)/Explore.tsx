import Image from "next/image";
import React from "react";

const Explore: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff] px-4 py-12 lg:px-[80px] lg:py-20 2xl:px-[120px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-20">
          <h1 className="font-marcellus text-3xl font-[400] uppercase tracking-[1.50px] text-[#4197D4] lg:text-5xl lg:leading-[60px]">
            Explore <br /> with us
          </h1>
          <p className="w-full max-w-[650px] font-inter text-sm font-[300] leading-[20px] tracking-[0.30px] text-[#000] lg:text-base">
            From grill to plate, Nostimo serves high-quality, made-to-order
            dishes crafted just for you. Step through our doors and be
            transported to Greece, where every bite, authentic music, and the
            vibrant, holiday-like atmosphere make your dining experience
            unforgettable.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 pt-4 lg:flex-row lg:gap-16 lg:pt-10">
          <div className="relative">
            <div className="absolute -right-3 top-3">
              <Image
                src={"/images/explore/left.png"}
                width={524}
                height={517}
                alt="frame"
                className="h-[230px] w-[230px] lg:h-[330px] lg:w-[330px]"
              />
            </div>
            <Image
              src={"/images/explore/frame.png"}
              width={524}
              height={517}
              alt="frame"
              className="h-[230px] w-[230px] lg:h-[330px] lg:w-[330px]"
            />
          </div>
          <div className="relative">
            <div className="absolute -left-3 top-3">
              <Image
                src={"/images/explore/right.png"}
                width={524}
                height={517}
                alt="frame"
                className="h-[230px] w-[230px] lg:h-[330px] lg:w-[330px]"
              />
            </div>
            <Image
              src={"/images/explore/frame.png"}
              width={524}
              height={517}
              alt="frame"
              className="h-[230px] w-[230px] lg:h-[330px] lg:w-[330px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
