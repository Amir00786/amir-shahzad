import { Monitor, Layout, Smartphone, Code, Cpu, ArrowRight } from "lucide-react"
// import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

export const Services = () => {
//   const plugin = React.useRef(
//     Autoplay({ delay: 4000, stopOnInteraction: false })
//   )

  const services = [
    { title: "Web Design", icon: <Monitor className="w-10 h-10" />, description: "Creating visually stunning and modern website layouts." },
    { title: "UI/UX Design", icon: <Layout className="w-10 h-10" />, description: "Designing intuitive user interfaces and seamless experiences." },
    { title: "App Design", icon: <Smartphone className="w-10 h-10" />, description: "Crafting beautiful mobile application interfaces." },
    { title: "Web Development", icon: <Code className="w-10 h-10" />, description: "Building high-performance apps with React & Next.js." },
    { title: "App Development", icon: <Cpu className="w-10 h-10" />, description: "Turning complex ideas into functional mobile and web apps." },
  ]

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="services">
      <div className="max-w-[1440px] mx-auto px-12 w-full">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-orange-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">My Offerings</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
            Specialized <span className="text-orange-500">Services.</span>
          </h2>
        </div>

        <Carousel
        //   plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-neutral-900/40 border border-white/5 p-4 sm:p-8 rounded-[2.5rem] hover:bg-neutral-900/80 transition-all duration-500 h-full flex flex-col overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/10 blur-2xl rounded-full group-hover:bg-orange-500/20 transition-all"></div>
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium uppercase tracking-wide">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute bottom-8 flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 cursor-pointer">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-orange-500 group-hover:w-full transition-all duration-700"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons (Styled for your theme) */}
          <div className="flex justify-end gap-12 mt-8 relative">
            <CarouselPrevious className="static translate-y-0 bg-transparent border-white/10 text-white hover:bg-orange-500 hover:border-orange-500" />
            <CarouselNext className="static translate-y-0 bg-transparent border-white/10 text-white hover:bg-orange-500 hover:border-orange-500" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}