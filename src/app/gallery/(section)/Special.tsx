import Image from "next/image"

const Special = ({ }) => {

    const gallaries = [
        {
            img: "/images/gallaries/1.webp"
        },
        {
            img: "/images/gallaries/2.webp"
        },
        {
            img: "/images/gallaries/3.webp"
        },
        {
            img: "/images/gallaries/4.webp"
        },
        {
            img: "/images/gallaries/5.webp"
        },
        {
            img: "/images/gallaries/6.webp"
        },
        {
            img: "/images/gallaries/7.webp"
        },
        {
            img: "/images/gallaries/8.webp"
        },
        {
            img: "/images/gallaries/9.webp"
        },
        {
            img: "/images/gallaries/10.webp"
        },
        {
            img: "/images/gallaries/11.webp"
        },
        {
            img: "/images/gallaries/12.webp"
        },
        {
            img: "/images/gallaries/13.webp"
        },
        {
            img: "/images/gallaries/14.webp"
        },
        {
            img: "/images/gallaries/15.webp"
        },
        {
            img: "/images/gallaries/16.webp"
        },
        {
            img: "/images/gallaries/17.webp"
        },
        {
            img: "/images/gallaries/18.webp"
        },
        {
            img: "/images/gallaries/19.webp"
        },
        {
            img: "/images/gallaries/20.webp"
        },
        {
            img: "/images/gallaries/21.webp"
        },
    ]
    return (
        <section className="w-full flex flex-col py-12 md:py-24 px-4 md:px-[130px] gap-12">
            <div className="w-full flex flex-col items-center justify-center gap-5">
                <p className="text-[#4197d4] text-4xl font-[400] font-manrope">A Visual Journey Through the Heart of Nostimo</p>
                <p className="text-center text-black">
                    Step into the world of Nostimo, where every image tells a story of authentic Greek flavors and vibrant Mediterranean hospitality. Our gallery showcases the beautifully crafted dishes we’re known for, from sizzling souvlaki to rich, layered moussaka, alongside the warm and inviting atmosphere of our London restaurant. Immerse yourself in a feast for the eyes and experience the essence of Greek dining at Nostimo.</p>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
                {gallaries.map((i, index) => (
                    <div key={index} className="w-full h-full">
                        <Image
                            src={i.img}
                            width={1536}
                            height={864}
                            alt="1"
                            className="h-[400px] object-cover"
                        />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Special