import { Button } from "../../components/ui/button"
import { Eye, ExternalLink, Plus } from "lucide-react"

// Asset Imports
import yelling1 from "../../assets/yelling-1.png"
import MPDark from "../../assets/MPDark.svg"
import hero from "../../assets/hero.jpg"
import blog5 from "../../assets/blog-5.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

const ProjectCard = ({ title, description, image, link, tags }: any) => (
    <div className='group relative bg-neutral-900/40 border border-white/5 rounded-2xl p-5 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col overflow-hidden'>
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
                    className='bg-orange-500 hover:bg-orange-600 text-white rounded-full p-0 h-12 w-12 border-none'
                >
                    <ExternalLink className='w-5 h-5' />
                </Button>
            </div>
        </div>

        {/* Content */}
        <div className='flex flex-col flex-grow space-y-4 relative z-10'>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[9px] uppercase font-black tracking-widest text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/10">
                        {tag}
                    </span>
                ))}
            </div>

            <div className='flex flex-col gap-2'>
                <h3 className='text-xl md:text-2xl font-black text-white group-hover:text-orange-500 transition-colors uppercase italic tracking-tighter'>
                    {title}
                </h3>
                <p className='text-xs text-gray-500 leading-relaxed line-clamp-3 font-medium uppercase tracking-wide'>
                    {description}
                </p>
            </div>

            <div className="mt-auto pt-4">
                <Button
                    onClick={() => window.open(link, '_blank')}
                    className='w-full bg-white/5 hover:bg-orange-500 text-white border border-white/10 rounded-xl py-6 transition-all font-black uppercase italic tracking-widest group text-xs'
                >
                    <Eye className='w-4 h-4 mr-2 group-hover:animate-pulse' />
                    Live Preview
                </Button>
            </div>
        </div>

        {/* Animated Bottom Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-700"></div>
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
        <section className='md:py-24 sm:py-16 py-10 bg-[#0a0a0a] relative overflow-hidden' id="projects">
            <div className="max-w-[1440px] mx-auto px-6 w-full">

                {/* Header Section */}
                <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="text-center">
                        <span className="text-orange-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">Portfolio</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                            Selected <br />
                            <span className="text-orange-500">Works.</span>
                        </h2>
                    </div>
                    <div className="h-1 w-24 bg-orange-500 mb-2 hidden md:block"></div>
                </div>

                <Carousel
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {projectList.map((project, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <ProjectCard {...project} />
                            </CarouselItem>
                        ))}

                        {/* Coming Soon Slide */}
                        {/* <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center h-full min-h-[450px] group hover:border-orange-500/30 transition-all duration-500 bg-neutral-900/20">
                                <div className="w-20 h-20 rounded-2xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500 border border-white/5 group-hover:border-orange-500">
                                    <Plus className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic">Next Project</h3>
                                <p className="text-gray-500 text-[10px] mt-3 uppercase tracking-[0.3em] font-bold opacity-50">Innovation in progress</p>
                            </div>
                        </CarouselItem> */}
                    </CarouselContent>

                    {/* Navigation buttons - Styled to match your theme */}
                    <div className="flex justify-center gap-4 mt-8 sm:mt-12 lg:mt-16">
                        <CarouselPrevious className="static translate-y-0 w-12 h-12 border-orange-500/30 bg-neutral-900 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" />
                        <CarouselNext className="static translate-y-0 w-12 h-12 border-orange-500/30 bg-neutral-900 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}