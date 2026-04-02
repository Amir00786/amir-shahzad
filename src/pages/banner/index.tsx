import { useState, useEffect } from "react";
import profile from "../../assets/profile.jpg";

const roles = ["Frontend Developer", "UI/UX Designer", "React Developer", "Freelancer"];

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
        <section className="min-h-screen bg-[#0a0a0a] flex items-center pt-24 pb-12 overflow-hidden" id="home">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-10 relative z-10 text-center lg:text-left" data-aos="fade-right">
                        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/10 blur-[120px] -z-10 animate-pulse"></div>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/10">

                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>

                                <span className="text-orange-500 font-mono tracking-widest uppercase text-[10px] font-bold">Available for New Projects</span>

                            </div>

                            <h2 className="text-gray-400 text-xl md:text-3xl font-bold tracking-tight">
                                Hello, I'm <span className="text-white">Amir Shahzad</span>
                            </h2>

                            <h1 className="text-4xl mb-5 md:text-8xl font-black text-white min-h-20 md:min-h-[240px] leading-[0.9] uppercase italic tracking-tighter">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-orange-500/50">
                                    {displayText}
                                </span>
                                <span className="text-orange-500 animate-pulse">_</span>
                            </h1>

                            <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm md:text-base font-medium uppercase tracking-wider opacity-80">
                                High-end digital experiences crafted with precision. Specializing in <span className="text-white">React & Next.js</span>.
                            </p>
                        </div>

                        {/* Social Icons & CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start">
                            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">

                                {/* LinkedIn */}
                                <a href="#" className="relative flex items-center justify-center h-20 w-20 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                    <div className="absolute inset-0 bg-[#0077B5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-10 h-10 fill-[#0077B5] group-hover:fill-white transition-colors relative z-50 duration-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>

                                {/* GitHub */}
                                <a href="#" className="relative flex items-center justify-center h-20 w-20 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                    {/* Animated Background Layer */}
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-10 h-10 fill-none stroke-[#8a00c2] relative z-50 group-hover:stroke-[#8a00c2] transition-colors duration-500"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>

                                {/* Fiverr */}
                                <a href="#" className="relative flex items-center justify-center h-20 w-20 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                    {/* Animated Background Layer */}
                                    <div className="absolute inset-0 bg-[#1dbf73] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                                    {/* SVG Icon */}
                                    <svg
                                        viewBox="0 0 192 192"
                                        className="relative z-10 w-10 h-10 stroke-white fill-none transition-colors duration-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z"
                                            strokeLinejoin="round"
                                            strokeWidth="12"
                                        />
                                    </svg>
                                </a>

                                {/* Upwork */}
                                <a href="#" className="relative flex items-center justify-center h-20 w-20 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                    <div className="absolute inset-0 bg-[#3b8132] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                    <svg
                                        viewBox="0 0 32 32"
                                        className="w-10 h-10 fill-[#14a800] relative z-50 group-hover:fill-white transition-colors duration-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                                    </svg>
                                </a>

                            </div>
                            <div className="flex gap-10">
                                {/* Resume Button */}
                                <button
                                    onClick={handleDownload}
                                    className="text-white text-xs font-black uppercase tracking-[0.2em] italic hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Resume
                                    <span className="text-orange-500 group-hover:translate-y-1 transition-transform duration-300">↓</span>
                                </button>

                                {/* Contact/Hire Button */}
                                <a
                                    href="#contact"
                                    className="text-white whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] italic hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Hire Me
                                    <span className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative flex justify-end items-end" data-aos="zoom-out">
                        <div className="absolute w-[80%] h-[80%] bg-orange-500/10 blur-[150px] rounded-full"></div>

                        <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 shadow-2xl group">
                            <img
                                src={profile}
                                alt="Amir Shahzad"
                                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />

                            <div className="absolute overflow-hidden bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div>
                                    <p className="text-orange-500 font-black text-xs italic tracking-widest uppercase leading-none mb-1">Senior Frontend Dev</p>
                                    <p className="text-white text-[11px] font-bold uppercase tracking-tighter opacity-80">Based in Pakistan</p>
                                </div>
                                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/40 rotate-3 group-hover:rotate-0 transition-transform">
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