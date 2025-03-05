import Image from "next/image";
import React from "react";

const Gratitude: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-12 lg:pb-24">
      <div className="absolute left-[40%] hidden h-full border-r-[1px] border-[#000] lg:block"></div>
      <div className="absolute top-0 w-full border-t-[1px] border-[#000]"></div>
      <div className="absolute bottom-0 w-full border-t-[1px] border-[#000]"></div>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col gap-6 py-12 pl-4 lg:w-[40%] lg:py-24 lg:pl-[80px] 2xl:pl-[120px]">
          <h2 className="font-marcellus text-3xl font-[400] uppercase tracking-[1.50px] text-[#4197D4] lg:text-5xl">
            GRATITUDE
          </h2>
          <p className="w-full max-w-[300px] font-inter text-base font-[400] capitalize leading-[25px] text-[#000]">
            Exciting news! Nostimo has earned the prestigious Recommendation
            badge from Restaurant Guru, a platform visited by 30 million food
            lovers monthly. This milestone wouldn’t have been possible without
            our amazing customers, whose support helps us craft unforgettable
            Mediterranean dining experiences. We’re committed to bringing you
            the best flavors that celebrate Greek gastronomy.
          </p>
          <span className="w-full max-w-[400px] font-marcellus text-base font-[400] uppercase tracking-[0.40px] text-[#000] lg:text-lg">
            Thank you for being part of our journey!
          </span>
        </div>
        <div className="flex h-full w-full items-center justify-center bg-[#4197D4] py-6 pr-4 lg:h-[70vh] lg:w-[60%] lg:py-14 lg:pr-[80px] 2xl:pl-[120px] 2xl:pr-[120px]">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center"></div>
            <Image
              src={"/images/gratitude/image1.png"}
              width={524}
              height={517}
              alt="frame"
              className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gratitude;
