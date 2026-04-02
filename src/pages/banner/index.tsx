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
                            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center">
                                {[
                                    {
                                        name: 'LinkedIn',
                                        path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                                        color: 'hover:bg-[#0077B5] hover:text-white'
                                    },
                                    {
                                        name: 'GitHub',
                                        path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                                        color: 'hover:bg-white hover:text-black'
                                    },
                                    {
                                        name: 'Fiverr',
                                        // Sirf "fi" ka path data niche diya gaya hai
                                        path: "M28.8336 30.6H23.5816V18.976H18.5552V30.6H13.272V18.976H10.276V14.676H13.272V13.3704C13.272 9.96321 15.8496 7.63843 19.684 7.63843H23.5824V11.9376H20.5544C19.3296 11.9376 18.556 12.6064 18.556 13.6896V14.676H28.8344V30.6H28.8336Z",
                                        color: 'hover:bg-[#1dbf73] hover:text-white'
                                    },
                                    {
                                        name: 'Upwork',
                                        path: "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z",
                                        color: 'hover:bg-[#14a800] hover:text-white'
                                    }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        title={social.name}
                                        className={`aspect-square w-full h-20 sm:h-12 sm:w-12 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-500 group ${social.color}`}
                                    >
                                        <svg
                                            className="w-6 h-6 fill-current text-gray-400 group-hover:text-inherit"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d={social.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                            <div className="h-px w-8 bg-white/10 hidden sm:block"></div>

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
                                    className="text-white text-xs font-black uppercase tracking-[0.2em] italic hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Hire Me
                                    <span className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative flex justify-center items-center" data-aos="zoom-out">
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