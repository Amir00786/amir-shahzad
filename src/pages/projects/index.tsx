import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// Baki imports same rahain gay...
import yelling1 from "../../assets/yelling-1.png"
import MPDark from "../../assets/MPDark.svg"
import hero from "../../assets/hero.jpg"
import blog5 from "../../assets/blog-5.jpg"
import { Button } from "../../components/ui/button"
import { Eye, ExternalLink } from "lucide-react"

const ProjectCard = ({ title, description, image, link, tags, duration }: any) => (
    <div 
        className='group relative bg-neutral-900/40 border border-white/5 rounded-[2rem] p-5 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col'
    >
        {/* Project Image Container */}
        <div className='relative w-full h-48 md:h-56 bg-neutral-800 rounded-2xl overflow-hidden mb-6'>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover transition-all duration-700 group-hover:scale-110'
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Button
                    onClick={() => window.open(link, '_blank')}
                    className='bg-orange-500 hover:bg-orange-600 text-white rounded-full p-0 h-12 w-12'
                >
                    <ExternalLink className='w-5 h-5' />
                </Button>
            </div>
        </div>

        {/* Content */}
        <div className='flex flex-col flex-grow space-y-4'>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[9px] uppercase font-bold tracking-widest text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/10">
                        {tag}
                    </span>
                ))}
            </div>
            
            <div className='flex flex-col gap-2'>
                <h3 className='text-xl md:text-2xl font-black text-white group-hover:text-orange-500 transition-colors uppercase italic tracking-tighter'>
                    {title}
                </h3>
                <p className='text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3'>
                    {description}
                </p>
            </div>

            <div className="mt-auto pt-4">
                <Button
                    onClick={() => window.open(link, '_blank')}
                    className='w-full bg-white/5 hover:bg-orange-500 text-white border border-white/10 rounded-xl py-6 transition-all font-bold group'
                >
                    <Eye className='w-4 h-4 mr-2 group-hover:animate-pulse' />
                    Live Preview
                </Button>
            </div>
        </div>
    </div>
);

export const Projects = () => {
    const projectList = [
        {
            title: "Yelling Ant",
            description: "Culture-centered social media network featuring real-time community engagement and seamless content sharing.",
            image: yelling1,
            link: "https://yellingant.com/",
            tags: ["React", "Social", "Node.js"],
        },
        {
            title: "Chronly.AI",
            description: "AI-powered productivity tool designed for automated time tracking and deep performance analytics.",
            image: MPDark,
            link: "https://chronly.ai/",
            tags: ["Next.js", "AI", "Dashboard"],
        },
        {
            title: "Ambakeo AI",
            description: "Premium bakery platform with real-time inventory and a luxury UI for shop management.",
            image: hero,
            link: "https://ambakeoai.vercel.app/",
            tags: ["Tailwind", "E-commerce", "React"],
        },
        {
            title: "Velvet Spa Salon",
            description: "High-end barber platform featuring online booking systems and premium user experiences.",
            image: blog5,
            link: "https://spa-salon-velvetcom.vercel.app/",
            tags: ["UI/UX", "Booking", "Vercel"],
        }
    ];

    return (
        <section className='py-24 bg-[#0a0a0a] relative overflow-hidden' id="projects">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="text-orange-500 font-mono tracking-[0.3em] uppercase text-xs mb-4">Portfolio</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                        Selected <span className="text-orange-500">Works.</span>
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mt-8 rounded-full"></div>
                </div>

                {/* Mobile Carousel / Desktop Grid */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 2, spaceBetween: 30 },
                            1280: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="project-swiper !pb-14 overflow-visible"
                    >
                        {projectList.map((project, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <ProjectCard {...project} duration={1000 + (index * 200)} />
                            </SwiperSlide>
                        ))}
                        
                        {/* Coming Soon Slide as last slide */}
                        <SwiperSlide className="h-auto">
                            <div className="border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px] group hover:border-orange-500/30 transition-all duration-500">
                                <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/5">
                                    <span className="text-2xl text-orange-500 font-bold">+</span>
                                </div>
                                <h3 className="text-white font-bold text-xl uppercase tracking-tighter italic">Next Project</h3>
                                <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest font-bold opacity-50">Innovation in progress</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Swiper Pagination Styling Customization */}
            <style>{`
                .project-swiper .swiper-pagination-bullet {
                    background: rgba(255,255,255,0.2) !important;
                    width: 10px;
                    height: 10px;
                    opacity: 1;
                }
                .project-swiper .swiper-pagination-bullet-active {
                    background: #f97316 !important; /* Orange-500 */
                    width: 25px;
                    border-radius: 5px;
                }
            `}</style>
        </section>
    );
}