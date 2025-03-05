import Image from "next/image";
import React from "react";

const Hello: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#4197D4] pt-12 lg:pt-20">
      <div className="absolute left-[450PX] top-0 z-10 hidden h-[110%] border-r-[1px] border-[#000] lg:block"></div>
      <div className="absolute right-[450PX] top-0 z-10 hidden h-[110%] border-l-[1px] border-[#000] lg:block"></div>
      <div className="flex flex-col gap-8 lg:gap-14">
        <div>
          <h2 className="text-center font-italiana text-3xl font-[400] capitalize leading-[110%] text-[#fff] lg:text-5xl">
            Say hello
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:gap-0">
          <div>
            <Image
              src={"/images/hello/left.png"}
              width={524}
              height={517}
              alt="frame"
              className="h-[250px] w-[250px] rounded-none object-cover lg:h-[600px] lg:w-[450px] lg:rounded-tr-[200px]"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 lg:gap-14">
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-inter text-sm font-[500] capitalize tracking-[0.70px] text-[#979695] lg:text-base lg:leading-[80%]">
                  Booking request
                </h6>
                <p className="text-center font-inter text-base font-[400] text-[#000] lg:text-lg">
                  0207 052 4471 <br />
                  info@nurcafe.co.uk
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-inter text-sm font-[500] capitalize tracking-[0.70px] text-[#979695] lg:text-base lg:leading-[80%]">
                  Location{" "}
                </h6>
                <p className="text-center font-inter text-sm font-[400] text-[#000] lg:text-base">
                  45 Deansgate, Manchester, United <br /> Kingdom, M3 2AY.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-inter text-sm font-[500] capitalize tracking-[0.70px] text-[#979695] lg:text-base lg:leading-[80%]">
                  Opening Hours{" "}
                </h6>
                <p className="text-center font-inter text-sm font-[400] text-[#000] lg:text-base">
                  Monday–Friday: 8:00 AM – 10:00 PM <br />
                  Saturday–Sunday: 9:00 AM – 11:00 PM
                </p>
              </div>
            </div>
            <Image
              src={"/images/hello/middle.png"}
              width={524}
              height={517}
              alt="frame"
              className="h-[350px] w-[300px] rounded-tr-[50px] lg:h-[600px] lg:w-[450px] lg:rounded-tr-[200px]"
            />
          </div>
          <div>
            <Image
              src={"/images/hello/right.png"}
              width={524}
              height={517}
              alt="frame"
              className="h-[250px] w-[250px] rounded-none object-cover lg:h-[600px] lg:w-[450px] lg:rounded-tl-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
