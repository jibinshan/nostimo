"use client";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Discover from "./(section)/Discover";
import Hero from "./(section)/Hero";
import Explore from "./(section)/Explore";
import Menu from "./(section)/Menu";
import Gratitude from "./(section)/Gratitude";
import Hello from "./(section)/Hello";
import Gallery from "./(section)/Gallery";
import Make from "./(section)/Make";
import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Discover />
        <Explore />
        <Special />
        <Make />
        <Menu />
        <Reviews />
        <Gratitude />
        <Hello />
        <Gallery />
        <Footer />
        {/*
        <Experience />
        <PrivateAndGroupDining />
         */}
      </div>
      {isScrolled && (
        <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
          <ViewMenu />
        </div>
      )}
    </main>
  );
}
