import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import profile from "../../assets/profile.png";


const roles = ["Frontend Developer", "Freelancer"];

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    const handleDownload = () => {
        const fileUrl = '/Amir_Shahzad_CV.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Amir_Shahzad_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        let currentText = roles[index];
        let chars = currentText.split("");
        let tempText = "";
        let i = chars.length - 1;

        // Typing animation (right to left)
        const typeInterval = setInterval(() => {
            tempText = chars[i] + tempText;
            setDisplayText(tempText);
            i--;

            if (i < 0) {
                clearInterval(typeInterval);

                // Wait before deleting
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
                    }, 100); // Character deletion speed
                }, 2000); // Hold full text before deleting
            }
        }, 100); // Character typing speed

        return () => clearInterval(typeInterval);
    }, [index]);

    return (
        <div className="py-10 sm:py-20 md:py-60">
            <div className="md:flex items-center -mx-4 justify-between">
                <div className="md:w-1/2 w-full px-4">
                    <h1 className="text-3xl lg:text-5xl flex flex-col gap-y-3 lg:gap-y-5 font-bold mb-3 lg:mb-5">
                        <span className="block">Hello,</span>
                        <span className="block">
                            <i className="text-orange-500">I'm</i> Amir Shahzad
                        </span>
                        <span className="block text-orange-500 min-h-[60px] transition-all duration-300 ease-in-out">
                            {displayText}
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg mb-8">
                        I am a passionate and dedicated frontend developer with over <strong>4<sup className="text-orange-500">+</sup></strong> {" "}
                        years of experience, specializing in crafting user-friendly and high-performance web applications.
                        With a strong foundation in HTML, CSS, JavaScript, Reactjs, Nextjs, Tailwindcss, and Boortstrap,
                        I focus on building seamless, responsive interfaces
                        that deliver exceptional user experiences.
                    </p>
                    <Button
                        onClick={handleDownload}
                        variant="outline"
                        className="bg-orange-500 px-6 py-3 h-auto cursor-pointer text-white transition-all duration-300 ease-in-out border border-orange-500 text-xl hover:border-orange-500/80 hover:bg-orange-500/80 hover:text-white"
                    >
                        Download CV
                    </Button>
                </div>
                <div className="md:w-1/2 w-full flex items-center justify-end px-4 pt-48 md:pt-0">
                    <div className="relative w-full md:w-[450px] h-60 sm:h-80 lg:w-[590px] lg:h-96 rounded-4xl bg-orange-400/10">
                        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[450px] xl:h-[450px] bg-orange-500">
                            <img src={profile} alt="profile" className="w-full shrink-0 bg-bottom rounded-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
