import Image from "next/image";
import Link from "next/link";
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
                <div className="flex flex-col">
                <Link href='tel:+44 20 8378 2077' className="text-center font-inter text-base font-[400] text-[#000] lg:text-lg">
                  +44 20 8378 2077
                </Link>
                <Link href='mailto:info@nostimo.london' className="text-center font-inter text-base font-[400] text-[#000] lg:text-lg">
                info@nostimo.london
                </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-inter text-sm font-[500] capitalize tracking-[0.70px] text-[#979695] lg:text-base lg:leading-[80%]">
                  Location{" "}
                </h6>
                <Link href='https://maps.app.goo.gl/jiPd8jyuXNAkNFQn6' className="text-center font-inter text-sm font-[400] text-[#000] lg:text-base">
                  71 Golders Green Rd, <br />London NW11 8EL, United Kingdom
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-inter text-sm font-[500] capitalize tracking-[0.70px] text-[#979695] lg:text-base lg:leading-[80%]">
                  Opening Hours{" "}
                </h6>
                <p className="text-center font-inter text-sm font-[400] text-[#000] lg:text-base">
                  Monday to Friday : 07:00 AM to 10:00 PM<br />
                  Saturday & Sunday : 08:00 AM to 10:00 PM
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
