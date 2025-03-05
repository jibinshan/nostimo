import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#FFF]">
        <h2 className="font-oswald text-center text-8xl text-[#4197D4] md:left-[15%] md:text-8xl">
          The Istanbul
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
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#000] sm:text-7xl md:text-start">
              From Dream
              <br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#000] md:text-start">
              What began as a dream between two food-loving friends quickly
              turned into a landmark for steak enthusiasts. In 2010, founders
              Alex and James combined their love of gourmet dining with a single
              mission: to create a place where steak isn`t just a meal but a
              celebration. From humble beginnings in a small kitchen to becoming
              a renowned steakhouse, Bavette has never lost its roots in
              quality, craftsmanship, and a love for the community.
              <br />
              <br />
              Each cut, carefully selected and perfectly prepared, tells the
              story of years spent honing our craft. And while we`ve grown over
              the years, our mission remains the same—to deliver the finest
              steak experience in every bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
