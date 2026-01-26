import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import profile from "../../assets/profile.png";
import bgImage from "../../assets/management.jpg";

const roles = ["Frontend Developer", "UI/UX Designer", "Freelancer"];

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    const handleDownload = () => {
        const fileUrl = '/amirshahzad.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'amirshahzad.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        let currentText = roles[index];
        let chars = currentText.split("");
        let tempText = "";
        let i = chars.length - 1;

        const typeInterval = setInterval(() => {
            tempText = chars[i] + tempText;
            setDisplayText(tempText);
            i--;

            if (i < 0) {
                clearInterval(typeInterval);

                setTimeout(() => {
                    let j = chars.length - 1;

                    const deleteInterval = setInterval(() => {
                        tempText = tempText.slice(0, j);
                        setDisplayText(tempText);
                        j--;

                        if (j < 0) {
                            clearInterval(deleteInterval);
                            setIndex((prev) => (prev + 1) % roles.length);
                        }
                    }, 100);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [index]);

    return (
        <div className="py-10 pt-48 md:pt-80">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between -mx-4">
                <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-3xl lg:text-5xl flex flex-col gap-y-3 lg:gap-y-5 font-bold mb-3 lg:mb-5 text-gray-900 dark:text-white transition-colors duration-300">
                        <span className="block">Hello,</span>
                        <span className="block">
                            <i className="text-orange-500 dark:text-orange-400">I'm</i> Amir Shahzad
                        </span>
                        <span className="block text-orange-500 dark:text-orange-400 min-h-[60px] transition-all duration-300 ease-in-out">
                            {displayText}
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg mb-8 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        I am a passionate and dedicated frontend developer with over 4<sup className="text-orange-500 dark:text-orange-400">+</sup> years of experience, specializing in
                        crafting user-friendly and high-performance web applications. With a strong foundation in HTML, CSS, JavaScript,
                        React.js, Next.js, Tailwind CSS, and Bootstrap, I focus on building seamless, responsive interfaces. I also have
                        hands-on experience in API integration, including consuming RESTful APIs, handling asynchronous data flows, managing
                        state, and integrating backend services to deliver dynamic and scalable web applications with exceptional user experiences.
                    </p>
                    <Button
                        onClick={handleDownload}
                        variant="outline"
                        className="bg-orange-500 dark:bg-orange-600 px-6 py-3 h-auto cursor-pointer text-white transition-all duration-300 ease-in-out border border-orange-500 dark:border-orange-600 text-xl hover:border-orange-500/80 dark:hover:border-orange-500 hover:bg-orange-500/80 dark:hover:bg-orange-500 hover:text-white"
                    >
                        Download CV
                    </Button>
                </div>

                <div className="w-full lg:w-1/2 flex items-end justify-end px-4 pt-20 lg:pt-0" data-aos="flip-up" data-aos-duration="2000">
                    <div 
                    className="relative w-full md:w-[450px] h-60 sm:h-80 lg:w-[590px] lg:h-96 rounded-4xl bg-orange-400/10 dark:bg-orange-500/20 overflow-visible transition-colors duration-300"
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}>
                        <div
                            className="absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[450px] xl:h-[450px] overflow-visible transition-all duration-300 before:absolute before:-inset-[2px] before:rounded-full before:bg-[conic-gradient(from_0deg,#f97316_0%,#f97316_22.5%,transparent_22.5%,transparent_50%,#f97316_50%,#f97316_72.5%,transparent_72.5%,transparent_100%)] before:-z-10 before:[animation:fadeIn_1s_ease-in_forwards,spin_5s_linear_infinite]"
                        >
                            <img
                                src={profile}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
