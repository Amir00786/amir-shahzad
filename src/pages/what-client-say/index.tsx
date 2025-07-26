import testimonial1 from "../../assets/testimonial-1.jpg"
import testimonial2 from "../../assets/testimonial-2.jpg"
import testimonial3 from "../../assets/testimonial-3.jpg"
import testimonial4 from "../../assets/testimonial-4.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

export const WhatClientSay = () => {
    return (
        <div className="lg:pt-20 md:pt-12 sm:pt-8 pt-4 md:pb-40 pb-20">
            <h1 className="text-2xl md:text-5xl mb-8 md:mb-10 lg:mb-16 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                What Client Say
            </h1>

            {/* Desktop View */}
            <div className="hidden lg:flex flex-col sm:flex-row sm:gap-4 gap-40">
                {/* Testimonial 1 */}
                <div className="w-full sm:w-1/4" data-aos="fade-up" data-aos-delay="300">
                    <div className="border border-orange-500 relative rounded-md p-4 h-full before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[16px] before:border-r-[16px] before:border-t-[16px] before:border-l-transparent before:border-r-transparent before:border-t-orange-500">
                        <blockquote className="relative bg-orange-500 text-white p-6 py-12 rounded-lg h-full">
                            <span className="absolute top-3 left-4 text-7xl leading-none text-white">“</span>
                            <p className="text-sm italic mb-10">Working with Amir was an absolute pleasure from start to finish. Not only did he deliver clean, efficient code, but he also contributed valuable insights during the design-to-development handoff process. His responsiveness and attention to detail ensured that our product launched on time and looked exactly as we envisioned—if not better. I’d definitely work with him again.</p>
                            <span className="absolute -bottom-6 right-4 text-7xl leading-none text-white">”</span>
                            <footer className="absolute bottom-7 min-h-10 right-5 text-right text-sm not-italic author-name">— Sarah J., Product Manager</footer>
                        </blockquote>
                        <div className="absolute w-24 p-2 h-24 left-1/2 -translate-x-1/2 -bottom-32 rounded-full border border-orange-500">
                            <img src={testimonial1} alt="testimonial" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full sm:w-1/4" data-aos="fade-up" data-aos-delay="400">
                    <div className="border border-orange-500 relative rounded-md p-4 h-full before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[16px] before:border-r-[16px] before:border-t-[16px] before:border-l-transparent before:border-r-transparent before:border-t-orange-500">
                        <blockquote className="relative bg-orange-500 text-white p-6 py-12 rounded-lg h-full">
                            <span className="absolute top-3 left-4 text-7xl leading-none text-white">“</span>
                            <p className="text-sm italic mb-10">Amir is one of the few frontend developers I’ve worked with who truly gets both design and performance. He translated complex UI mockups into pixel-perfect, fully responsive components. His ability to spot usability issues before they go live saved us a ton of time and revisions. Highly professional, deadline-oriented, and a great communicator throughout the project.</p>
                            <span className="absolute -bottom-6 right-4 text-7xl leading-none text-white">”</span>
                            <footer className="absolute bottom-7 min-h-10 right-5 text-right text-sm not-italic">— Alex M., Design Lead</footer>
                        </blockquote>
                        <div className="absolute w-24 p-2 h-24 left-1/2 -translate-x-1/2 -bottom-32 rounded-full border border-orange-500">
                            <img src={testimonial2} alt="testimonial" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full sm:w-1/4" data-aos="fade-up" data-aos-delay="500">
                    <div className="border border-orange-500 relative rounded-md p-4 h-full before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[16px] before:border-r-[16px] before:border-t-[16px] before:border-l-transparent before:border-r-transparent before:border-t-orange-500">
                        <blockquote className="relative bg-orange-500 text-white p-6 py-12 rounded-lg h-full">
                            <span className="absolute top-3 left-4 text-7xl leading-none text-white">“</span>
                            <p className="text-sm italic mb-10">We hired Amir for a critical website redesign and he exceeded our expectations. The site not only looks amazing on every screen size, but it's also blazing fast. He implemented animations, accessibility best practices, and even improved our SEO with better structure. His dedication to quality and clean code really stood out to our team.</p>
                            <span className="absolute -bottom-6 right-4 text-7xl leading-none text-white">”</span>
                            <footer className="absolute bottom-7 min-h-10 right-5 text-right text-sm not-italic">— Priya R., Project Coordinator</footer>
                        </blockquote>
                        <div className="absolute w-24 p-2 h-24 left-1/2 -translate-x-1/2 -bottom-32 rounded-full border border-orange-500">
                            <img src={testimonial3} alt="testimonial" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Testimonial 4 */}
                <div className="w-full sm:w-1/4" data-aos="fade-up" data-aos-delay="600">
                    <div className="border border-orange-500 relative rounded-md p-4 h-full before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[16px] before:border-r-[16px] before:border-t-[16px] before:border-l-transparent before:border-r-transparent before:border-t-orange-500">
                        <blockquote className="relative bg-orange-500 text-white p-6 py-12 rounded-lg h-full">
                            <span className="absolute top-3 left-4 text-7xl leading-none text-white">“</span>
                            <p className="text-sm italic mb-10">Every project Amir has worked on for us has been a major success. From complex React dashboards to marketing sites built from Figma files, he handled everything with speed and accuracy. What impressed me most was his ownership—he treats your project like it’s his own. If you want results without micromanaging, he's the developer you need.</p>
                            <span className="absolute -bottom-6 right-4 text-7xl leading-none text-white">”</span>
                            <footer className="absolute bottom-7 min-h-10 right-5 text-right text-sm not-italic">— Jason T., Creative Director</footer>
                        </blockquote>
                        <div className="absolute w-24 p-2 h-24 left-1/2 -translate-x-1/2 -bottom-32 rounded-full border border-orange-500">
                            <img src={testimonial4} alt="testimonial" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="sm:basis-1/2 basis-full md:basis-1/3 lg:basis-1/5 pb-32">
                            <TestimonialCard
                                image={testimonial1}
                                quote="Working with Amir was an absolute pleasure from start to finish. Not only did he deliver clean, efficient code, but he also contributed valuable insights during the design-to-development handoff process. His responsiveness and attention to detail ensured that our product launched on time and looked exactly as we envisioned—if not better. I’d definitely work with him again."
                                author="— Sarah J., Product Manager"
                            />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 basis-full md:basis-1/3 lg:basis-1/5 pb-32">
                            <TestimonialCard
                                image={testimonial2}
                                quote="Amir is one of the few frontend developers I’ve worked with who truly gets both design and performance. He translated complex UI mockups into pixel-perfect, fully responsive components. His ability to spot usability issues before they go live saved us a ton of time and revisions. Highly professional, deadline-oriented, and a great communicator throughout the project."
                                author="— Alex M., Design Lead"
                            />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 basis-full md:basis-1/3 lg:basis-1/5 pb-32">
                            <TestimonialCard
                                image={testimonial3}
                                quote="We hired Amir for a critical website redesign and he exceeded our expectations. The site not only looks amazing on every screen size, but it's also blazing fast. He implemented animations, accessibility best practices, and even improved our SEO with better structure. His dedication to quality and clean code really stood out to our team."
                                author="— Priya R., Project Coordinator"
                            />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 basis-full md:basis-1/3 lg:basis-1/5 pb-32">
                            <TestimonialCard
                                image={testimonial4}
                                quote="Every project Amir has worked on for us has been a major success. From complex React dashboards to marketing sites built from Figma files, he handled everything with speed and accuracy. What impressed me most was his ownership—he treats your project like it’s his own. If you want results without micromanaging, he's the developer you need."
                                author="— Jason T., Creative Director"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <div className="absolute -bottom-14 right-16 flex row-reverse gap-x-4">
                        <CarouselNext className="bg-transparent w-10 h-10 border-orange-500 border-2 cursor-pointer [&>svg]:text-orange-500 hover:[&>svg]:text-white hover:bg-orange-500/70" />
                        <CarouselPrevious className="bg-transparent w-10 h-10 border-orange-500 border-2 [&>svg]:text-orange-500 hover:[&>svg]:text-white hover:bg-orange-500/70 cursor-pointer" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
const TestimonialCard = ({ image, quote, author }: { image: string, quote: string, author: string }) => (
    <div className="border border-orange-500 relative rounded-md p-4 h-full before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-16 before:border-r-16 before:border-t-16 before:border-l-transparent before:border-r-transparent before:border-t-orange-500">
        <blockquote className="relative bg-orange-500 text-white p-6 py-12 rounded-lg h-full">
            <span className="absolute top-3 left-4 text-7xl leading-none text-white">“</span>
            <p className="text-sm italic mb-10">{quote}</p>
            <span className="absolute -bottom-6 right-4 text-7xl leading-none text-white">”</span>
            <footer className="absolute bottom-7 min-h-10 right-5 text-right text-sm not-italic">{author}</footer>
        </blockquote>
        <div className="absolute w-24 p-2 h-24 left-1/2 -translate-x-1/2 -bottom-32 rounded-full border border-orange-500">
            <img src={image} alt="testimonial" className="w-full h-full object-cover rounded-full" />
        </div>
    </div>
)
