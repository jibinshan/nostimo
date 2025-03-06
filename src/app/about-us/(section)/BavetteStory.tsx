import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#FFF]">
        <h2 className="font-oswald text-center text-8xl text-[#4197D4] md:left-[15%] md:text-8xl">
          The Nostimo
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#FFF] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
          <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#000] sm:text-7xl md:text-start">
            From Passion<br/>
            to Plate
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#000] md:text-start">
            What started as a vision to bring the true essence of Greek cuisine to London has flourished into a beloved dining destination in the heart of the Brunswick Centre. At Nostimo, our passion for authentic flavors and time-honored recipes drives everything we do.
              <br />
              <br />
              From our succulent souvlaki to the rich layers of moussaka and the freshest Greek salads, every dish is crafted with ingredients sourced from Greece and local artisans. Our team of skilled Greek chefs ensures that every bite transports you to the sun-drenched streets of the Mediterranean.
<br/>
<br/>
While we`ve grown over the years, our mission remains the same—to offer an unforgettable Greek dining experience where tradition, flavor, and hospitality come together in every meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
