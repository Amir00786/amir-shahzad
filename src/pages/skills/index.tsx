import html5 from "../../assets/html.png"
import css3 from "../../assets/css3.png"
import js from "../../assets/js.png"
import react from "../../assets/reactjs.png"
import tailwind from "../../assets/tailwindcss.png"
import figma from "../../assets/figma.png"
import uiux from "../../assets/ui.png"
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel"

export const Skills = () => {
    return (
        <div className='md:py-16 sm:py-12 py-8'>
            <div className='flex md:mb-16 sm:mb-12 mb-8 flex-col gap-2 md:gap-4'>
                <h1 className="text-4xl md:text-5xl lg:text-7xl mb-5 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                    Expertise
                </h1>
            </div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={html5} alt="html5" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={css3} alt="css3" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={js} alt="js" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={react} alt="react" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={tailwind} alt="tailwind" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={figma} alt="figma" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                        <div className="border border-orange-500 rounded-md p-4 h-full flex items-center justify-center">
                            <img src={uiux} alt="uiux" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}