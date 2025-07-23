import html5 from "../../assets/html.png"
import css3 from "../../assets/css3.png"
import js from "../../assets/js.png"
import react from "../../assets/reactjs.png"
import tailwind from "../../assets/tailwindcss.png"
import figma from "../../assets/figma.png"
import uiux from "../../assets/ui.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

export const Skills = () => {
    return (
        <div className='md:py-12 sm:py-8 py-4'>
            <h1 className="text-2xl md:text-5xl mb-8 md:mb-10 lg:mb-16 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                Expertise
            </h1>
            <Carousel
                className="w-full relative">
                <CarouselContent>
                    {[
                        { src: html5, alt: "html5" },
                        { src: css3, alt: "css3" },
                        { src: js, alt: "js" },
                        { src: react, alt: "react" },
                        { src: tailwind, alt: "tailwind" },
                        { src: figma, alt: "figma" },
                        { src: uiux, alt: "uiux" },
                    ].map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="sm:basis-1/2 basis-full md:basis-1/3 lg:basis-1/5"
                        >
                            <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                                <img src={item.src} alt={item.alt} className="" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute -top-12 right-16 flex row-reverse gap-x-4">
                    <CarouselNext className="bg-transparent w-10 h-10 border-orange-500 border-2 cursor-pointer [&>svg]:text-orange-500 hover:[&>svg]:text-white hover:bg-orange-500/70" />
                    <CarouselPrevious className="bg-transparent w-10 h-10 border-orange-500 border-2 [&>svg]:text-orange-500 hover:[&>svg]:text-white hover:bg-orange-500/70 cursor-pointer" />
                </div>
            </Carousel>
        </div>
    )
}