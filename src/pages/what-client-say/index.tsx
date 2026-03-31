import testimonial1 from "../../assets/testimonial-1.jpg"
import testimonial2 from "../../assets/testimonial-2.jpg"
import testimonial3 from "../../assets/testimonial-3.jpg"
import testimonial4 from "../../assets/testimonial-4.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import { Quote } from "lucide-react"

export const WhatClientSay = () => {
    const testimonials = [
        {
            image: testimonial1,
            quote: "Working with Amir was an absolute pleasure from start to finish. Not only did he deliver clean, efficient code, but he also contributed valuable insights during the design-to-development handoff process. His responsiveness and attention to detail ensured that our product launched on time.",
            author: "Sarah J.",
            role: "Product Manager"
        },
        {
            image: testimonial2,
            quote: "Amir is one of the few frontend developers I’ve worked with who truly gets both design and performance. He translated complex UI mockups into pixel-perfect, fully responsive components. His ability to spot usability issues before they go live saved us a ton of time.",
            author: "Alex M.",
            role: "Design Lead"
        },
        {
            image: testimonial3,
            quote: "We hired Amir for a critical website redesign and he exceeded our expectations. The site not only looks amazing on every screen size, but it's also blazing fast. He implemented animations, accessibility best practices, and even improved our SEO with better structure.",
            author: "Priya R.",
            role: "Project Coordinator"
        },
        {
            image: testimonial4,
            quote: "Every project Amir has worked on for us has been a major success. From complex React dashboards to marketing sites built from Figma files, he handled everything with speed and accuracy. What impressed me most was his ownership—he treats your project like it’s his own.",
            author: "Jason T.",
            role: "Creative Director"
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="testimonials">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                
                {/* Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <span className="text-orange-500 font-mono tracking-[0.4em] uppercase text-xs mb-3 block">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Client <span className="text-orange-500">Feedback.</span>
                    </h2>
                </div>

                <div className="relative">
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                            {testimonials.map((t, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <TestimonialCard 
                                            image={t.image} 
                                            quote={t.quote} 
                                            author={t.author} 
                                            role={t.role} 
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Custom Positioned Controls */}
                        <div className="flex justify-center gap-4 mt-12 lg:mt-16">
                            <CarouselPrevious className="static translate-y-0 w-12 h-12 border-orange-500/30 bg-neutral-900 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" />
                            <CarouselNext className="static translate-y-0 w-12 h-12 border-orange-500/30 bg-neutral-900 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({ image, quote, author, role }: { image: string, quote: string, author: string, role: string }) => (
    <div className="group relative bg-neutral-900/50 border border-white/5 rounded-[2.5rem] p-4 md:p-8 lg:p-10 h-full hover:bg-neutral-900 transition-all duration-500 hover:border-orange-500/20">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex flex-col h-full relative z-10">
            {/* Top Section: Avatar & Quote Icon */}
            <div className="flex items-center justify-between mb-8">
                <div className="relative">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors duration-500">
                        <img src={image} alt={author} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-1.5 rounded-lg">
                        <Quote className="w-3 h-3 fill-white" />
                    </div>
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange-500 text-lg">★</span>
                    ))}
                </div>
            </div>

            {/* Quote Body */}
            <p className="text-gray-400 text-base leading-relaxed italic mb-8 flex-grow">
                "{quote}"
            </p>

            {/* Footer */}
            <div className="pt-6 border-t border-white/5">
                <h4 className="text-white font-bold text-lg">{author}</h4>
                <p className="text-orange-500 text-xs uppercase tracking-widest font-mono mt-1">{role}</p>
            </div>
        </div>
    </div>
)