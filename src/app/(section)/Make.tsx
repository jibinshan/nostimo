import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Make: React.FC = () => {
  return (
    <section
      className="relative h-[70vh] w-full lg:h-[90vh]"
      style={{
        backgroundImage: "url('images/make/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hidden h-[15vh] bg-[#fff] lg:block" />
      <div
        className="absolute bottom-0 h-[55%] w-full bg-gradient-to-t from-white to-[#3F92CC] lg:right-0 lg:top-[110px] lg:h-full lg:w-[50%]"
        style={{ opacity: 0.87 }}
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center lg:bottom-28">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-3 lg:gap-6">
                  <h3 className="lg:leading-30px] text-center font-marcellus text-xl font-[400] text-[#000] lg:text-3xl">
                    Make Every Gathering <br /> Memorable
                  </h3>
                  <p className="w-full max-w-[480px] text-center font-inter text-sm font-[300] leading-[26px] tracking-[0.35px] text-[#000] lg:text-base">
                    So, bring your appetite and visit our Brunswick Centre
                    restaurant you’ll quickly discover why we’ve named ourselves
                    Nostimo: Greek for delicious.
                  </p>
                  <div>
                    <Button className="rounded-none bg-[#4197D4] px-6 py-5 font-poppins text-sm font-[500] uppercase text-[#fff] lg:mt-4 lg:px-7 lg:py-6 lg:text-base">
                      Book a table
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/explore/frame1.png"}
                width={524}
                height={517}
                alt="frame"
                className="h-[250px] w-[300px] lg:h-[430px] lg:w-[530px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Make;
