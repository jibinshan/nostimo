import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 py-12 lg:px-0 lg:py-24">
      <div className="absolute bottom-0 left-[40%] hidden h-full border-r-[1px] border-[#000] lg:block"></div>
      <div className="absolute right-0 top-24 hidden w-[80%] border-t-[1px] border-[#000] lg:block"></div>
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-0">
        <div className="flex w-full justify-center lg:w-[40%] lg:justify-start">
          <div className="relative">
            <Image
              src={"/images/menu/food.png"}
              width={762}
              height={1086}
              alt="frame"
              className="h-[250px] w-[250px] rounded-tr-[50px] object-cover lg:h-[800px] lg:w-[600px] lg:rounded-tr-[200px]"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 pt-10 lg:w-[60%] lg:gap-10 lg:pl-20 lg:pt-24">
          <div className="flex flex-col gap-4">
            <h2 className="font-marcellus text-3xl font-[400] uppercase tracking-[1.50px] text-[#4197D4] lg:text-5xl">
              Our Menu
            </h2>
            <p className="w-full font-inter font-[300] leading-[20px] tracking-[0.36px] text-[#000] lg:w-[400px]">
              Your senses will be transported back to that beachside brasserie
              in Santorini, or that café in the heart of Athens.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:gap-8">
            <div className="flex flex-row items-center gap-8">
              <p className="flex flex-col font-marcellus text-base font-[400] text-[#000] lg:text-lg">
                Cake Sweet{" "}
                <span className="text-sm lg:text-base">
                  Bite Lorem ipsum dolor, feugiat decilata
                </span>
              </p>
              <Image
                src={"/images/menu/line.png"}
                width={275}
                height={8}
                alt="frame"
                className="hidden lg:block"
              />
              <span className="font-inter text-base font-[600] text-[#000] lg:text-lg">
                25.00$
              </span>
            </div>
            <div className="flex flex-row items-center gap-8">
              <p className="flex flex-col font-marcellus text-base font-[400] text-[#000] lg:text-lg">
                Cake Sweet{" "}
                <span className="text-sm lg:text-base">
                  Bite Lorem ipsum dolor, feugiat decilata
                </span>
              </p>
              <Image
                src={"/images/menu/line.png"}
                width={275}
                height={8}
                alt="frame"
                className="hidden lg:block"
              />
              <span className="font-inter text-base font-[600] text-[#000] lg:text-lg">
                25.00$
              </span>
            </div>
            <div className="flex flex-row items-center gap-8">
              <p className="flex flex-col font-marcellus text-base font-[400] text-[#000] lg:text-lg">
                Cake Sweet{" "}
                <span className="text-sm lg:text-base">
                  Bite Lorem ipsum dolor, feugiat decilata
                </span>
              </p>
              <Image
                src={"/images/menu/line.png"}
                width={275}
                height={8}
                alt="frame"
                className="hidden lg:block"
              />
              <span className="font-inter text-base font-[600] text-[#000] lg:text-lg">
                25.00$
              </span>
            </div>
            <div className="flex flex-row items-center gap-8">
              <p className="flex flex-col font-marcellus text-base font-[400] text-[#000] lg:text-lg">
                Cake Sweet{" "}
                <span className="text-sm lg:text-base">
                  Bite Lorem ipsum dolor, feugiat decilata
                </span>
              </p>
              <Image
                src={"/images/menu/line.png"}
                width={275}
                height={8}
                alt="frame"
                className="hidden lg:block"
              />
              <span className="font-inter text-base font-[600] text-[#000] lg:text-lg">
                25.00$
              </span>
            </div>
            <div className="flex flex-row items-center gap-8">
              <p className="flex flex-col font-marcellus text-base font-[400] text-[#000] lg:text-lg">
                Cake Sweet{" "}
                <span className="text-sm lg:text-base">
                  Bite Lorem ipsum dolor, feugiat decilata
                </span>
              </p>
              <Image
                src={"/images/menu/line.png"}
                width={275}
                height={8}
                alt="frame"
                className="hidden lg:block"
              />
              <span className="font-inter text-base font-[600] text-[#000] lg:text-lg">
                25.00$
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-center lg:ml-40 lg:mt-10 lg:justify-start 2xl:ml-56">
            <Button className="rounded-none bg-[#4197D4] px-7 py-6 font-poppins font-[500] tracking-[0.60px] text-[#fff] lg:px-12">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
