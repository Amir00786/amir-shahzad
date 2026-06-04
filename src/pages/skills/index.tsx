import html5 from "../../assets/html.png"
import css3 from "../../assets/css3.png"
import js from "../../assets/js.png"
import react from "../../assets/react-logo.svg"
import tailwind from "../../assets/tailwind.png"
import figma from "../../assets/figma.png"
import figma2html from "../../assets/figma2html.png"
import api from "../../assets/api.png"
import figma2react from "../../assets/figma2react.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

export const Skills = () => {
    return (
        <div className='md:py-20 sm:py-8 py-4' id="skills">
            <h1 className="text-2xl sm:mt-3 mt-20 md:text-5xl mb-8 md:mb-10 lg:mb-16 uppercase font-extrabold text-transparent" style={{ WebkitTextStroke: '2px #6366f1' }} data-aos="fade-up" data-aos-duration="2000">
                Expertise
            </h1>
            <Carousel className="w-full relative" data-aos="fade-up" data-aos-duration="2000">
                <CarouselContent>
                    {[
                        { src: html5, alt: "html5" },
                        { src: css3, alt: "css3" },
                        { src: js, alt: "js" },
                        { src: figma2html, alt: "figma2html" },
                        { src: figma2react, alt: "figma2react" },
                        { src: tailwind, alt: "tailwind" },
                        { src: react, alt: "react" },
                        { src: api, alt: "api" },
                        { src: figma, alt: "figma" },
                    ].map((item, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 basis-full md:basis-1/3 lg:basis-1/5">
                            <div className="border border-indigo-500/50 rounded-md p-4 h-full flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-500/5 transition-all duration-300">
                                <img src={item.src} alt={item.alt} className="" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8 sm:mt-12 lg:mt-16">
                    <CarouselPrevious className="static translate-y-0 w-12 h-12 border-indigo-500/30 bg-neutral-900 text-indigo-500 hover:bg-indigo-600 hover:text-white transition-all duration-300" />
                    <CarouselNext className="static translate-y-0 w-12 h-12 border-indigo-500/30 bg-neutral-900 text-indigo-500 hover:bg-indigo-600 hover:text-white transition-all duration-300" />
                </div>
            </Carousel>
        </div>
    )
}