import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-0 gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col gap-6 items-start lg:w-8/12 mt-20 lg:mt-0">
              <h1 className="font-oswald text-[#4197d4] leading-[66px] font-semibold text-5xl lg:text-6xl">Welcome to Nostimo – Where Every Bite is a Taste of Greece</h1>
              <p className="text-black font-manrope font-normal">Indulge in the authentic flavors of Greece, masterfully prepared with passion and tradition. At Nostimo, we don’t just serve food—we offer an experience. From perfectly grilled souvlaki to rich, hearty moussaka, every dish is a celebration of Mediterranean heritage. Savor the freshness, embrace the flavors, and discover the true essence of Greek cuisine.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
            <Image src='/images/about-us/hero.png' width={951} height={975} alt="hero" className="max-h-[700px] object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;