import yelling1 from "../../assets/yelling-1.png"
import MPDark from "../../assets/MPDark.svg"
import hero from "../../assets/hero.jpg"
import blog5 from "../../assets/blog-5.jpg"
import { Button } from "../../components/ui/button"
import { Eye } from "lucide-react"

export const Projects = () => {
    return (
        <div className='md:py-12 sm:py-8 py-4'>
            <h1 className="text-4xl md:text-5xl mb-16 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]" data-aos="fade-up" data-aos-duration="2000">
                My Work
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='' data-aos="fade-up" data-aos-duration="1000">
                    <div
                        className='bg-white rounded-2xl p-4 hover:shadow-xl'
                    >
                        <div className='flex flex-col gap-4'>
                            <div className='w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center'>
                                <img
                                    src={yelling1}
                                    alt="Yelling Ant"
                                    className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-bold text-gray-800'>Yelling Ant</h3>
                                <p className='text-sm text-gray-600 line-clamp-2'>
                                    Culture-centered social media network featuring a user-friendly interface, content sharing, community engagement, and real-time notifications with customizable profile and post options.
                                </p>
                            </div>
                            <Button
                                onClick={() => window.open('https://yellingant.com/', '_blank')}
                                className='w-full bg-orange-500 text-white hover:bg-orange-500/80 hover:text-white'>
                                <Eye className='w-4 h-4' />
                                Live Preview
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='' data-aos="fade-right" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-4 hover:shadow-xl'>
                        <div className='flex flex-col gap-4'>
                            <div className='w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center'>
                                <img
                                    src={MPDark}
                                    alt="Project"
                                    className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-bold text-gray-800'>Chronly.AI</h3>
                                <p className='text-sm text-gray-600 line-clamp-2'>
                                    AI-powered time tracking and productivity tool featuring a user-friendly interface, task management, time tracking, and productivity analytics with real-time reporting and insights.

                                </p>
                            </div>
                            <Button
                                onClick={() => window.open('https://chronly.ai/', '_blank')}
                                className='w-full bg-orange-500 text-white hover:bg-orange-500/80 hover:text-white'>
                                <Eye className='w-4 h-4' />
                                Live Preview
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='' data-aos="fade-left" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-4 hover:shadow-xl'>
                        <div className='flex flex-col gap-4'>
                            <div className='w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center'>
                                <img
                                    src={hero}
                                    alt="Ambakeo AI"
                                    className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-bold text-gray-800'>Ambakeo AI</h3>
                                <p className='text-sm text-gray-600 line-clamp-2'>
                                    Premium bakery and cake shop platform featuring a user-friendly interface, product catalog, online ordering, and secure payment processing with real-time inventory management and order tracking.
                                </p>
                            </div>
                            <Button
                                onClick={() => window.open('https://ambakeoai.vercel.app/', '_blank')}
                                className='w-full bg-orange-500 text-white hover:bg-orange-500/80 hover:text-white'>
                                <Eye className='w-4 h-4' />
                                Live Preview
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='' data-aos="zoom-in" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-4 hover:shadow-xl'>
                        <div className='flex flex-col gap-4'>
                            <div className='w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center'>
                                <img
                                    src={blog5}
                                    alt="Spa Salon"
                                    className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-bold text-gray-800'>Velvet Spa Salon</h3>
                                <p className='text-sm text-gray-600 line-clamp-2'>Professional hair styling and barber services platform featuring expert stylists, beard treatments, color services, and premium salon experiences with online booking and pricing management.</p>
                            </div>
                            <Button
                                onClick={() => window.open('https://spa-salon-velvetcom.vercel.app/', '_blank')}
                                className='w-full bg-orange-500 text-white hover:bg-orange-500/80 hover:text-white'>
                                <Eye className='w-4 h-4' />
                                Live Preview
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='' data-aos="flip-left" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='' data-aos="flip-right" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}