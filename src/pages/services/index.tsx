import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Monitor, Layout, Smartphone, Palette, Code, Cpu, ArrowRight } from "lucide-react";

export const Services = () => {
    const services = [
        {
            title: "Web Design",
            description: "Creating visually stunning and modern website layouts that capture your brand's essence and engage users.",
            icon: <Monitor className="w-10 h-10" />,
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive user interfaces and seamless experiences focusing on user psychology and behavior.",
            icon: <Layout className="w-10 h-10" />,
        },
        {
            title: "App Design",
            description: "Crafting beautiful mobile application interfaces with a focus on usability and modern mobile trends.",
            icon: <Smartphone className="w-10 h-10" />,
        },
        {
            title: "Graphic Design",
            description: "Creative visual content including branding, logos, and digital assets that make your business stand out.",
            icon: <Palette className="w-10 h-10" />,
        },
        {
            title: "Web Development",
            description: "Building high-performance, scalable web applications using React.js, Next.js, and modern tech stacks.",
            icon: <Code className="w-10 h-10" />,
        },
        {
            title: "App Development",
            description: "Turning complex ideas into functional mobile and web apps with clean code and robust architecture.",
            icon: <Cpu className="w-10 h-10" />,
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="services">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-orange-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">My Offerings</span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none italic">
                            Specialized <br /> 
                            <span className="text-orange-500">Services.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed uppercase tracking-wider opacity-80">
                        Turning your vision into reality with high-end design and development solutions.
                    </p>
                </div>

                {/* Services Carousel / Grid Wrapper */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="services-swiper !pb-16"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="group relative bg-neutral-900/40 border border-white/5 p-4 sm:p-8 rounded-[2.5rem] hover:bg-neutral-900/80 transition-all duration-500 h-full flex flex-col overflow-hidden">
                                    
                                    {/* Decorative Corner Glow */}
                                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/10 blur-2xl rounded-full group-hover:bg-orange-500/20 transition-all"></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg] shadow-2xl shadow-orange-500/5">
                                            {service.icon}
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-500 transition-colors uppercase italic tracking-tight">
                                            {service.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-grow font-medium">
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="absolute -bottom-0 flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 cursor-pointer">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Bottom Border Animation */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-orange-500 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Swiper Styles */}
            <style>{`
                .services-swiper .swiper-pagination-bullet {
                    background: rgba(255,255,255,0.1) !important;
                    width: 8px;
                    height: 8px;
                    opacity: 1;
                }
                .services-swiper .swiper-pagination-bullet-active {
                    background: #f97316 !important;
                    width: 30px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
};