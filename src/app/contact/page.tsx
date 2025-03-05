import Contact from "@/app/contact/(section)/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#fff]">
        <Navbar position="absolute" />
        <div className="h-[15vh] w-full bg-[#fff]" id="hero"></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
