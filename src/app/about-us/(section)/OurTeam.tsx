import Image from "next/image";

const OurTeam = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:p-0 lg:pt-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#fff]">
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <h2 className="font-oswald flex w-full justify-center text-8xl text-[#4197D4] md:left-[15%] md:w-1/2 md:text-8xl">
            Meet
            <br />
            the Team
          </h2>
          <h1 className="font-oswald flex w-full items-end justify-center text-4xl text-[#000] md:left-[15%] md:w-1/2 md:text-4xl">
            The Faces
            <br />
            Behind the Flavor
          </h1>
        </div>
        <Image
          src="/images/about-us/team.png"
          width={1920}
          height={750}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default OurTeam;
