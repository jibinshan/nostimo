import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({ }) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row z-30">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-oswald text-5xl leading-[60px] text-white">
            Join Us for an<br /> Unforgettable Greek Feast
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-[#C1B6A6]">
            Ready to experience the true flavors of Greece? Whether it`s a cozy dinner for two or a lively gathering with friends and family, Nostimo welcomes you to savor the authentic dishes we`ve perfected over the years. From flavorful souvlaki to rich, homemade moussaka, every bite is crafted with passion and tradition. Let us take you on a culinary journey that brings the heart of Greece to London.
          </p>
          <Link href="/table-booking">
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent font-semibold uppercase text-white hover:bg-primary"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default JoinUs;