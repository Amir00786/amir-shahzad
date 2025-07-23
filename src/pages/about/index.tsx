
import profile from "../../assets/profile.png";

export const About = () => {
    return (
        <div className='md:py-12 sm:py-8 py-4'>
            <div className="md:flex -mx-5 gap-x-5">
                <div className="w-full mb-32 md:w-[50%] lg:w-[40%] px-4" data-aos="flip-down" data-aos-duration="1000">
                    <div className="relative w-full h-40 md::h-52 lg:h-72 rounded-4xl bg-orange-400/10 overflow-visible">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-orange-500 overflow-hidden shadow-lg">
                            <img
                                src={profile}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[60%] px-4" data-aos="fade-left" data-aos-duration="1000">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl mb-5 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                        WHO I AM
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg">
                        With over four years of dedicated experience in frontend development, I specialize in building engaging and high-performance web applications. Skilled in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and Bootstrap, I am passionate about crafting seamless, mobile-friendly interfaces that deliver a polished and consistent user experience on any device. </p>
                </div>
            </div>
        </div>
    )
}