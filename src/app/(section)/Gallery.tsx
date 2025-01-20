import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Instagram } from "lucide-react";

const Gallery: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#0C1213] px-4 py-12 md:px-[40px] lg:px-[80px] 2xl:px-[150px]">
      <div className="relative grid grid-cols-2 gap-2 md:grid-cols-3 lg:pt-9 xl:grid-cols-4">
        <div className="absolute inset-0 z-10 flex items-center justify-center lg:pt-8">
          <div>
            <Button className="flex flex-row items-center justify-center gap-2 rounded-none bg-[#AF8032] px-7 py-6 font-playfair text-base font-[600] capitalize tracking-[0.40px] text-[#000]">
              <Instagram /> nostimoGreek
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={"/images/gallery/1.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/2.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/3.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/4.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/5.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/6.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/7.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
        <div>
          <Image
            src={"/images/gallery/8.png"}
            width={356}
            height={356}
            alt="frame"
            className="h-[250px] w-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
