import { Monitor, Layout, Smartphone, Code, Cpu, ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

export const Services = () => {
  const services = [
    { title: "Web Design", icon: <Monitor className="w-10 h-10" />, description: "Creating visually stunning and modern website layouts." },
    { title: "UI/UX Design", icon: <Layout className="w-10 h-10" />, description: "Designing intuitive user interfaces and seamless experiences." },
    { title: "App Design", icon: <Smartphone className="w-10 h-10" />, description: "Crafting beautiful mobile application interfaces." },
    { title: "Web Development", icon: <Code className="w-10 h-10" />, description: "Building high-performance apps with React & Next.js." },
    { title: "App Development", icon: <Cpu className="w-10 h-10" />, description: "Turning complex ideas into functional mobile and web apps." },
  ]

  return (
    <section className="md:py-24 sm:py-16 py-10 bg-slate-50/40 dark:bg-[#050812]/40 backdrop-blur-md relative overflow-hidden" id="services">
      <div className="max-w-[1440px] mx-auto px-4 w-full">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="text-teal-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">My Offerings</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter">
            Specialized <span className="text-teal-500">Services.</span>
          </h2>
        </div>
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-white/80 dark:bg-[#080f18]/70 border border-indigo-100 dark:border-indigo-900/20 p-4 sm:p-8 rounded-2xl hover:bg-white dark:hover:bg-[#080f18] transition-all duration-500 h-full flex flex-col overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full group-hover:bg-teal-500/20 transition-all"></div>
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-4 uppercase italic tracking-tight group-hover:text-indigo-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium uppercase tracking-wide">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-8 flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 cursor-pointer">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 group-hover:w-full transition-all duration-700"></div>
                </div>
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
  )
}