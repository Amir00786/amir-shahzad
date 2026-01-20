import html5 from "../../assets/html.png";
import css3 from "../../assets/css3.png";
import js from "../../assets/js.png";
import react from "../../assets/react-logo.svg";
import tailwind from "../../assets/tailwind.png";
import figma from "../../assets/figma.png";

export const Services = () => {
    return (
        <div className="md:py-20 sm:py-8 py-4" id="services">
            <h1 className="text-3xl sm:mt-3 mt-20 md:text-5xl lg:mb-16 mb-8 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                What I Offer
            </h1>
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className='flex gap-y-6 flex-wrap -mx-3 mb-8 px-4'>
                    <p className='text-white text-sm sm:text-base lg:text-lg'>
                        We specialize in creating modern, responsive websites that are both visually appealing and user-friendly. Our designs are tailored to reflect your brand’s identity while ensuring optimal functionality across all devices. Whether you're launching a new business or revamping an existing site, our web design services can give you the competitive edge you need. From layout planning and UX/UI optimization to mobile responsiveness and SEO integration, we handle it all. We use the latest tools such as Figma and Adobe XD to bring your vision to life. Let us design a digital space that not only looks great but also drives results. Contact us today to get started!
                    </p>
                </div>
            </div>

            <div className='flex gap-y-6 flex-wrap -mx-3'>
                {/* HTML */}
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="fade-up" data-aos-duration="1000">
                    <div className="p-4 md:p-6 bg-orange-500/70 rounded-2xl h-full hover:bg-orange-600 transition-all duration-300 hover:text-black tracking-wide text-white">
                        <div className="md:mb-8 mb-5 flex items-center gap-x-4 md:gap-x-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <img src={html5} alt="HTML" className="w-8 h-8 object-cover" />
                            </div>
                            <strong className="text-lg sm:text-xl md:text-2xl font-semibold">HTML</strong>
                        </div>
                        <p>
                            HTML5 is the latest standard for structuring web content. It introduces semantic elements, multimedia support, and enhanced forms. HTML5 improves performance, accessibility, and compatibility across devices without relying on outdated plugins like Flash, ensuring a better user experience.
                        </p>
                    </div>
                </div>

                {/* CSS */}
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="fade-right" data-aos-duration="1000">
                    <div className="p-4 md:p-6 bg-orange-500/70 rounded-2xl h-full hover:bg-orange-600 transition-all duration-300 hover:text-black tracking-wide text-white">
                        <div className="md:mb-8 mb-5 flex items-center gap-x-4 md:gap-x-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <img src={css3} alt="CSS" className="w-8 h-8 object-cover" />
                            </div>
                            <strong className="text-lg sm:text-xl md:text-2xl font-semibold">CSS</strong>
                        </div>
                        <p>
                            CSS3 brings powerful styling capabilities to the web. With features like animations, transitions, flexbox, and grid, it helps developers create responsive, modern designs. CSS3 allows for consistent visuals across devices while reducing the need for additional layout frameworks or libraries.
                        </p>
                    </div>
                </div>

                {/* JavaScript */}
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="fade-left" data-aos-duration="1000">
                    <div className="p-4 md:p-6 bg-orange-500/70 rounded-2xl h-full hover:bg-orange-600 transition-all duration-300 hover:text-black tracking-wide text-white">
                        <div className="md:mb-8 mb-5 flex items-center gap-x-4 md:gap-x-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <img src={js} alt="JavaScript" className="w-8 h-8 object-cover" />
                            </div>
                            <strong className="text-lg sm:text-xl md:text-2xl font-semibold">JavaScript</strong>
                        </div>
                        <p>
                            JavaScript is a scripting language for building interactive web experiences. It powers features like form validation, animations, and real-time updates. JavaScript runs in the browser and is essential for building responsive, dynamic websites and full-featured applications using various frameworks.
                        </p>
                    </div>
                </div>

                {/* React */}
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="zoom-in" data-aos-duration="1000">
                    <div className="p-4 md:p-6 bg-orange-500/70 rounded-2xl h-full hover:bg-orange-600 transition-all duration-300 hover:text-black tracking-wide text-white">
                        <div className="md:mb-8 mb-5 flex items-center gap-x-4 md:gap-x-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <img src={react} alt="React" className="w-8 h-8 object-cover" />
                            </div>
                            <strong className="text-lg sm:text-xl md:text-2xl font-semibold">React</strong>
                        </div>
                        <p>
                            React is a JavaScript library used to build user interfaces. It features a component-based structure and uses a virtual DOM for efficient updates. React is ideal for creating fast, scalable front-end applications, including web and mobile platforms like React Native.
                        </p>
                    </div>
                </div>

                {/* Tailwind CSS */}
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="flip-left" data-aos-duration="1000">
                    <div className="p-4 md:p-6 bg-orange-500/70 rounded-2xl h-full hover:bg-orange-600 transition-all duration-300 hover:text-black tracking-wide text-white">
                        <div className="md:mb-8 mb-5 flex items-center gap-x-4 md:gap-x-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <img src={tailwind} alt="Tailwind CSS" className="w-8 h-8 object-cover" />
                            </div>
                            <strong className="text-lg sm:text-xl md:text-2xl font-semibold">Tailwind CSS</strong>
                        </div>
                        <p>
                            Tailwind CSS is a utility-first framework for rapidly building modern, responsive designs. It provides low-level utility classes directly in HTML. This allows developers to create clean layouts quickly without writing custom CSS, promoting consistency and maintainability across entire projects.
                        </p>
                    </div>
                </div>

                {/* Figma */}
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="flip-right" data-aos-duration="1000">
                    <div className="p-4 md:p-6 bg-orange-500/70 rounded-2xl h-full hover:bg-orange-600 transition-all duration-300 hover:text-black tracking-wide text-white">
                        <div className="md:mb-8 mb-5 flex items-center gap-x-4 md:gap-x-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <img src={figma} alt="Figma" className="w-8 h-8 object-cover" />
                            </div>
                            <strong className="text-lg sm:text-xl md:text-2xl font-semibold">Figma</strong>
                        </div>
                        <p>
                            Figma is a collaborative UI design tool used by teams to create wireframes, prototypes, and design systems. It supports real-time editing, feedback, and versioning in the browser. Figma simplifies collaboration between designers and developers, especially for remote or agile teams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
