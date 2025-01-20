"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center">
      <div className="absolute left-[40%] hidden h-full border-l-[1px] border-l-[#AF8032] lg:block"></div>
      <div className="absolute top-0 w-full border-t-[1px] border-t-[#AF8032]"></div>
      <div className="flex flex-col lg:flex-row">
        <div className="hidden h-full w-full items-center justify-center bg-[#111B20] lg:flex lg:w-[40%]">
          <h1 className="font-marcellus flex flex-col text-3xl font-[400] uppercase tracking-[1.40px] text-[#A59982] lg:text-5xl">
            What our <span>clients say</span>
          </h1>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 bg-[#0C1213] py-6 md:py-14 md:pb-28 lg:w-[60%]">
          <div className="flex w-full items-center justify-center p-4">
            {reviews && (
              <Carousel className="w-full px-4">
                <CarouselContent className="ml-4 flex w-full items-center justify-center gap-4">
                  {reviews.map((review, index) => (
                    <CarouselItem
                      key={index}
                      className="flex w-full basis-full flex-col items-center justify-center gap-6 bg-transparent px-6 py-8"
                    >
                      <h1 className="font-marcellus flex flex-col text-3xl font-[400] uppercase tracking-[1.40px] text-[#A59982] lg:text-5xl">
                        What our <span>clients say</span>
                      </h1>
                      <div className="flex w-full items-center justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#c9ab81]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        <p className="line-clamp-5 w-[350px] px-4 text-center font-inter text-sm font-[400] lowercase leading-6 text-[#9B9B9B] sm:px-2 sm:text-xs md:px-6 md:text-sm lg:w-full lg:text-base">
                          {review.text}
                        </p>
                      </div>

                      <div className="flex w-full flex-col items-center justify-center gap-2">
                        <Image
                          src={
                            review.profile_photo_url ||
                            "/images/home/reviews/pictures/anna-mathew.svg"
                          }
                          width={64}
                          height={64}
                          alt={review.author_name}
                        />
                        <div className="flex flex-col items-center justify-center gap-2">
                          <p className="text-center font-inter text-base font-[400] tracking-[0.80px] text-[#fff]">
                            {review.author_name}
                          </p>
                          <span className="text-center font-inter text-sm font-[300] tracking-[0.60px] text-[#fff]">
                            {review.relative_time_description}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="group absolute bottom-0 left-1/2 ml-5 flex w-fit -translate-x-1/2 transform items-center justify-center gap-2 transition-transform duration-300 ease-in-out">
                  <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                  <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </div>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
