import { useState } from "react";
import profile from "../../assets/profile.png";

export const About = () => {
    // Technical skills with professional weights
    const skills = [
        { label: "HTML5", value: 100 },
        { label: "CSS3 / SCSS", value: 100 },
        { label: "JavaScript", value: 80 },
        { label: "JQuery", value: 70 },
        { label: "TypeScript", value: 95 },
        { label: "React.js", value: 90 },
        { label: "Next.js", value: 85 },
        { label: "Tailwind CSS", value: 95 },
        { label: "Bootstrap", value: 90 },
        { label: "API Integration", value: 80 },
        { label: "Figma to React", value: 95 },
        { label: "Figma to HTML", value: 95 },
        { label: "UI/UX Design", value: 100 },
        { label: "Design Responsiveness", value: 100 },
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="about">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full">

                {/* Section Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <span className="text-orange-500 font-mono tracking-[0.4em] uppercase text-xs mb-3 block">Expertise</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        About <span className="text-orange-500">Me.</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-28">

                    {/* Left: Creative Image Frame */}
                    <div className="relative group" data-aos="fade-right">
                        {/* The "Professional Frame" Effect */}
                        <div className="absolute -inset-4 border border-orange-500/20 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-500 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-orange-500 rounded-br-3xl"></div>

                        <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 aspect-[4/5] lg:aspect-auto">
                            <img
                                src={profile}
                                alt="Amir Shahzad"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                            />
                            {/* Glass Badge */}
                            <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <p className="text-white font-bold text-lg mb-1">Amir Shahzad</p>
                                <p className="text-orange-500 text-sm font-medium">Senior Software Engineer</p>
                            </div>
                        </div>

                        {/* Experience Floating Badge */}
                        <div className="absolute -top-8 -right-8 bg-orange-500 text-white w-28 h-28 flex flex-col items-center justify-center rounded-2xl shadow-2xl shadow-orange-500/40 transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                            <span className="text-4xl font-black">4+</span>
                            <span className="text-[10px] uppercase font-black tracking-tighter">Years Exp.</span>
                        </div>
                    </div>

                    {/* Right: Biography & Narrative */}
                    <div className="space-y-10" data-aos="fade-left">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white leading-tight">
                                Delivering <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">High-End</span> Frontend <br />
                                Solutions with Precision.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I am a passionate software engineer specializing in architectural excellence for the modern web.
                                With a foundation built on <span className="text-white border-b border-orange-500/50">React.js and Next.js</span>,
                                I transform complex business requirements into fluid, high-performance user experiences.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                My approach combines a keen eye for UI/UX design with robust technical implementation.
                                Whether it's managing complex state, optimizing performance, or ensuring 100% responsiveness,
                                I strive for pixel-perfect results in every commit.
                            </p>
                        </div>

                        {/* Quick CTA */}
                        <div className="flex flex-wrap gap-5 pt-4">
                            <a
                                href="#contact"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-sm font-bold shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-1"
                            >
                                Hire Me
                            </a>
                            <a
                                href="#projects"
                                className="border border-neutral-800 hover:border-orange-500 text-gray-300 hover:text-orange-500 px-10 py-4 rounded-xl text-sm font-bold transition-all"
                            >
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom: Modern Technical Proficiency Section */}
                <div className="bg-neutral-900/40 border border-white/5 p-10 lg:p-16 rounded-[40px] backdrop-blur-sm" data-aos="fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        <div className="md:col-span-2 mb-4 border-l-4 border-orange-500 pl-6">
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Core Technical <span className="text-orange-500">Skills</span></h3>
                            <p className="text-gray-500 text-sm mt-2">Advanced proficiency across the modern web stack.</p>
                        </div>

                        {skills.map((skill, index) => (
                            <div key={index} className="group space-y-3">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-200 font-bold group-hover:text-orange-500 transition-colors">
                                            {skill.label}
                                        </span>
                                    </div>
                                    <span className="text-orange-500 font-mono font-bold">{skill.value}%</span>
                                </div>
                                <div className="h-2.5 bg-neutral-800 rounded-full overflow-hidden p-[2px]">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 rounded-full transition-all duration-[1500ms] ease-in-out relative"
                                        style={{ width: `${skill.value}%` }}
                                    >
                                        {/* Subtle Shine Effect */}
                                        <div className="absolute inset-0 bg-white/20 w-1/2 blur-sm skew-x-[-20deg] animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};