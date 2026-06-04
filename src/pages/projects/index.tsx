import { Button } from "../../components/ui/button"
import { Eye, ExternalLink } from "lucide-react"
import yelling1 from "../../assets/yelling-1.png"
import MPDark from "../../assets/MPDark.svg"
import hero from "../../assets/hero.jpg"
import blog5 from "../../assets/blog-5.jpg"
import healthEraHero from "../../assets/health-era-hero.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

const ProjectCard = ({ title, description, image, link, tags }: any) => (
    <div className='group relative bg-white dark:bg-[#0a0f1a]/80 border border-indigo-100 dark:border-indigo-900/20 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-500 h-full flex flex-col overflow-hidden shadow-sm dark:shadow-none'>
        <div className='relative w-full h-48 md:h-56 bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden mb-6'>
            <img src={image} alt={title} className='w-full h-full object-cover transition-all duration-700 group-hover:scale-110' />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Button onClick={() => window.open(link, '_blank')} className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-0 h-12 w-12 border-none'>
                    <ExternalLink className='w-5 h-5' />
                </Button>
            </div>
        </div>
        <div className='flex flex-col flex-grow space-y-4 relative z-10'>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[9px] uppercase font-black tracking-widest text-indigo-500 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/10">{tag}</span>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xl md:text-2xl font-black text-foreground group-hover:text-indigo-500 transition-colors uppercase italic tracking-tighter'>{title}</h3>
                <p className='text-xs text-gray-500 leading-relaxed line-clamp-3 font-medium uppercase tracking-wide'>{description}</p>
            </div>
            <div className="mt-auto pt-4">
                <Button onClick={() => window.open(link, '_blank')} className='w-full bg-black/5 dark:bg-white/5 hover:bg-indigo-600 text-foreground hover:text-white border border-black/10 dark:border-white/10 rounded-xl py-6 transition-all font-black uppercase italic tracking-widest group text-xs'>
                    <Eye className='w-4 h-4 mr-2 group-hover:animate-pulse' />
                    Live Preview
                </Button>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-600 to-teal-500 group-hover:w-full transition-all duration-700"></div>
    </div>
);

export const Projects = () => {
    const projectList = [
        { title: "Health Era", description: "Professional-grade patient portal providing secure medical record vaults, specialist scheduling, health analytics, and telehealth cabins.", image: healthEraHero, link: "https://health-era-portal.vercel.app/", tags: ["React", "TypeScript", "Tailwind"] },
        { title: "Yelling Ant", description: "Culture-centered social media network featuring real-time community engagement and seamless content sharing.", image: yelling1, link: "https://yellingant.com/", tags: ["React", "Social", "Node.js"] },
        { title: "Chronly.AI", description: "AI-powered productivity tool designed for automated time tracking and deep performance analytics.", image: MPDark, link: "https://chronly.ai/", tags: ["Next.js", "AI", "Dashboard"] },
        { title: "Ambakeo AI", description: "Premium bakery platform with real-time inventory and a luxury UI for shop management.", image: hero, link: "https://ambakeoai.vercel.app/", tags: ["Tailwind", "E-commerce", "React"] },
        { title: "Velvet Spa Salon", description: "High-end barber platform featuring online booking systems and premium user experiences.", image: blog5, link: "https://spa-salon-velvetcom.vercel.app/", tags: ["UI/UX", "Booking", "Vercel"] }
    ];

    return (
        <section className='md:py-24 sm:py-16 py-10 bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden' id="projects">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <span className="text-indigo-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">Portfolio</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter">
                        Selected <span className="text-indigo-500"> Works.</span>
                    </h2>
                </div>
                <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                    <CarouselContent className="-ml-4">
                        {projectList.map((project, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <ProjectCard {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-4 mt-8 sm:mt-12 lg:mt-16">
                        <CarouselPrevious className="static translate-y-0 w-12 h-12 border-indigo-500/30 bg-white dark:bg-neutral-900 text-indigo-500 hover:bg-indigo-600 hover:text-white transition-all duration-300" />
                        <CarouselNext className="static translate-y-0 w-12 h-12 border-indigo-500/30 bg-white dark:bg-neutral-900 text-indigo-500 hover:bg-indigo-600 hover:text-white transition-all duration-300" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}