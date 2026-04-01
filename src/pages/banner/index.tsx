import { useState, useEffect } from "react";
import profile from "../../assets/profile.png";

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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

                            <h1 className="text-5xl md:text-8xl font-black text-white min-h-[240px] leading-[0.9] uppercase italic tracking-tighter">
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
                            <div className="flex items-center gap-4">
                                {[
                                    {
                                        name: 'LinkedIn',
                                        path: "M20.447 20.452H16.89v-5.569c0-1.328-.025-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.939v5.666H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.603 0 4.268 2.371 4.268 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.143 0 2.069.925 2.069 2.069 0 1.143-.926 2.069-2.069 2.069zM6.78 20.452H3.894V9H6.78v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z",
                                        color: 'hover:bg-[#0077B5]'
                                    },
                                    {
                                        name: 'GitHub',
                                        path: "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.807 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.04.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.221 0 4.609-2.805 5.625-5.475 5.921.42.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.21.694.825.576C20.565 21.795 24 17.297 24 12 24 5.373 18.627 0 12 0z",
                                        color: 'hover:bg-white hover:text-black'
                                    },
                                    {
                                        name: 'Fiverr',
                                        path: "M22.2 5.6h-4.2c-.6 0-1 .4-1 1v1.6h4.4v3.2h-4.4V22h-4.2V11.4H9.4V8.2h3.4V6.6c0-3.2 2.4-5.6 5.8-5.6h3.6v4.6z",
                                        color: 'hover:bg-[#1dbf73]'
                                    },
                                    {
                                        name: 'Upwork',
                                        path: "M18.561 3.312c-2.316 0-4.388 1.545-5.341 3.856-.47-1.185-.817-2.434-1.031-3.713H9.006v8.435c0 1.954-1.59 3.544-3.544 3.544S1.918 13.844 1.918 11.89V3.455H0v8.435c0 3.612 2.932 6.544 6.544 6.544s6.544-2.932 6.544-6.544V10.15c.214 1.185.584 2.333 1.096 3.415l-1.942 9.005h3.25l1.458-6.745c.484.341.996.634 1.536.866.015.015.03.015.03.015h.015c1.03.435 2.13.659 3.254.659 3.551 0 6.44-2.889 6.44-6.44s-2.889-6.44-6.44-6.44zm0 10.969c-1.84 0-3.336-1.496-3.336-3.336s1.496-3.336 3.336-3.336 3.336 1.496 3.336 3.336-1.496 3.336-3.336 3.336z",
                                        color: 'hover:bg-[#14a800]'
                                    }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className={`w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-500 group ${social.color}`}
                                        title={social.name}
                                    >
                                        <svg
                                            className="w-5 h-5 fill-current text-gray-500 group-hover:text-inherit"
                                            viewBox="0 0 24 24"
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

                        <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-[3.5rem] border border-white/5 bg-neutral-900/50 shadow-2xl group">
                            <img
                                src={profile}
                                alt="Amir Shahzad"
                                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />

                            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-[2rem] flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
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