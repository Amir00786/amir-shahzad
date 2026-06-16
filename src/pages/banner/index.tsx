import { useState, useEffect } from "react";
import { Download, ArrowRight } from "lucide-react";
import profile from "../../assets/profile.jpg";

const roles = ["Frontend Developer", "UI/UX Designer", "React Developer", "Freelancer"];

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/amir-shahzad-cv.pdf';
        link.download = 'Amir Shahzad CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Typing Logic
    useEffect(() => {
        let currentText = roles[index];
        let chars = currentText.split("");
        let tempText = "";
        let i = 0;

        const typeInterval = setInterval(() => {
            if (i < chars.length) {
                tempText += chars[i];
                setDisplayText(tempText);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    const deleteInterval = setInterval(() => {
                        if (tempText.length > 0) {
                            tempText = tempText.slice(0, -1);
                            setDisplayText(tempText);
                        } else {
                            clearInterval(deleteInterval);
                            setIndex((prev) => (prev + 1) % roles.length);
                        }
                    }, 30);
                }, 2000);
            }
        }, 80);

        return () => clearInterval(typeInterval);
    }, [index]);

    return (
        <section className="min-h-screen bg-slate-50/40 dark:bg-[#050812]/40 backdrop-blur-md flex items-center pt-24 pb-12 overflow-hidden relative" id="home">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-10 relative z-10 text-center lg:text-left" data-aos="fade-right">
                        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-[120px] -z-10 animate-pulse"></div>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/10">

                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>

                                <span className="text-indigo-500 font-mono tracking-widest uppercase text-[10px] font-bold">Available for New Projects</span>

                            </div>

                            <h2 className="text-gray-400 text-xl md:text-3xl font-bold tracking-tight">
                                Hello, I'm <span className="text-neutral-900 dark:text-white">Amir Shahzad</span>
                            </h2>

                            <h1 className="text-4xl mb-5 md:text-8xl font-black text-neutral-900 dark:text-white min-h-20 md:min-h-[240px] leading-[0.9] uppercase italic tracking-tighter">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-500/50 dark:from-white dark:via-white dark:to-indigo-500/50">
                                    {displayText}
                                </span>
                                <span className="text-indigo-500 animate-pulse">_</span>
                            </h1>

                            <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm md:text-base font-medium uppercase tracking-wider opacity-80">
                                High-end digital experiences crafted with precision. Specializing in{" "}
                                <span className="text-neutral-900 dark:text-white">React &amp; Next.js</span>,{" "}
                                <span className="text-neutral-900 dark:text-white">TypeScript</span>, and{" "}
                                <span className="text-neutral-900 dark:text-white">Tailwind CSS</span> — turning complex
                                ideas into clean, scalable, and pixel-perfect interfaces. With{" "}
                                <span className="text-indigo-500">2+ years</span> of hands-on experience building
                                production-grade web apps, I bridge the gap between great design and rock-solid code.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-2">
                                <button
                                    onClick={handleDownload}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-white/10 bg-white/60 dark:bg-white/5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Download className="w-4 h-4" />
                                    Download CV
                                </button>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Hire Me
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative flex justify-end items-end" data-aos="zoom-out">
                        <div className="absolute w-[80%] h-[80%] bg-indigo-500/10 blur-[150px] rounded-full"></div>

                        <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900/50 shadow-2xl group">
                            <img
                                src={profile}
                                alt="Amir Shahzad"
                                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />

                            <div className="absolute overflow-hidden bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div>
                                    <p className="text-indigo-400 font-black text-xs italic tracking-widest uppercase leading-none mb-1">Senior Frontend Dev</p>
                                    <p className="text-white text-[11px] font-bold uppercase tracking-tighter opacity-80">Based in Pakistan</p>
                                </div>
                                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-600/40 rotate-3 group-hover:rotate-0 transition-transform">
                                    <span className="text-white font-bold text-2xl">⚛</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};