import Navbar from "@/components/Navbar"
import Hero from "./(section)/Hero"
import Special from "./(section)/Special"
import Footer from "@/components/Footer"

const page = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col bg-white">
            <Navbar />
            <Hero />
            <Special />
            <Footer />
        </section>
    )
}

export default page