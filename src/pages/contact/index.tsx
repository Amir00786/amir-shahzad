import { Mail, MapPin, Phone } from "lucide-react"

export const Contact = () => {
    return (
        <div className="md:py-20 sm:py-8 py-4" id="contact">
            <h1 className="text-3xl sm:mt-3 mt-20 md:text-5xl lg:mb-16 mb-8 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                Get In Touch
            </h1>
            <div className="flex flex-col md:flex-row gap-x-4">
                <div className='2xl:w-1/3 md:w-1/2 w-full' data-aos="zoom-in-right" data-aos-duration="2000">
                    <div className="border-b md:border-b-0 mb-5 gap-y-5 md:gap-0 md:border-r border-orange-500 h-full flex flex-col justify-between pb-8 md:pr-8">
                        <div className='bg-white rounded-2xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='w-10 sm:w-12 h-10 sm:h-12 shrink-0 bg-orange-500 rounded-full flex items-center justify-center'>
                                    <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="flex flex-col"> 
                                    <strong className="text-sm sm:text-base lg:text-xl text-gray-500">+92 3076258337</strong>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='w-10 sm:w-12 h-10 sm:h-12 shrink-0 bg-orange-500 rounded-full flex items-center justify-center'>
                                    <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="flex flex-col"> 
                                    <strong className="text-sm sm:text-base lg:text-xl text-gray-500">amirshahzadvu91@gmail.com</strong>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='w-10 sm:w-12 h-10 sm:h-12 shrink-0 bg-orange-500 rounded-full flex items-center justify-center'>
                                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="flex flex-col"> 
                                    <strong className="text-sm sm:text-base lg:text-xl text-gray-500">Gujranwala, Pakistan</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow basis-0 min-w-0 mx-auto" data-aos="zoom-in-left" data-aos-duration="2000">
                    <form className="border border-orange-500 rounded-md p-4 2xl:max-w-3xl mx-auto">
                        <div className="flex flex-wrap -mx-4 gap-y-4">
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="name" className="text-sm font-medium">First Name</label>
                                <input type="text" placeholder="Enter your name" id="name" className="border px-8 h-12 bg-transparent border-orange-500 rounded-full p-2 focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="name" className="text-sm font-medium">Last Name</label>
                                <input type="text" placeholder="Enter your email" id="name" className="border px-8 h-12 bg-transparent border-orange-500 rounded-full p-2 focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="name" className="text-sm font-medium">Email</label>
                                <input type="email" placeholder="Enter your email" id="email" className="border px-8 h-12 bg-transparent border-orange-500 rounded-full p-2 focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="name" className="text-sm font-medium">Phone</label>
                                <input type="number" placeholder="Enter your phone" id="phone" className="border px-8 h-12 bg-transparent border-orange-500 rounded-full p-2 focus:outline-none" />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea placeholder="Enter your message" id="message" className="border w-full resize-none px-8 h-32 bg-transparent border-orange-500 rounded-md p-2 focus:outline-none" />
                            <div className="w-full flex items-end justify-end mt-5">
                                <button type="submit" className="bg-orange-500 text-white cursor-pointer sm:w-24 w-full h-12 rounded-full">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}