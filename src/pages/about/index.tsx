import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../../assets/profile.jpg";

import html5 from "../../assets/html.png";
import css3 from "../../assets/css3.png";
import js from "../../assets/js.png";
import reactLogo from "../../assets/react-logo.svg";
import tailwind from "../../assets/tailwind.png";
import figma from "../../assets/figma.png";
import api from "../../assets/api.png";
import redux from "../../assets/redux.png";
import bootstrapLogo from "../../assets/bootstrap-logo.png";
import jquery from "../../assets/jquerry.png";
import nextjs from "../../assets/next-js.png";
import typescript from "../../assets/typescript.png";
import zustandLogo from "../../assets/zustand.svg";

export const About = () => {
    const skills = [
        {
            label: "HTML5",
            value: 100,
            color: "#e34f26",
            description: "Expertise in semantic tags, SEO optimization, DOM structure, and clean HTML5 code practices.",
            logo: <img src={html5} alt="HTML5" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "CSS3 / SCSS",
            value: 100,
            color: "#1572b6",
            description: "Advanced styling with Flexbox, CSS Grid, SCSS nesting, variables, mixins, and responsive fluid designs.",
            logo: <img src={css3} alt="CSS3" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "JavaScript",
            value: 80,
            color: "#f7df1e",
            description: "Deep understanding of ES6+, event loops, promises, async/await, closures, and object-oriented JS.",
            logo: <img src={js} alt="JavaScript" className="w-6 h-6 md:w-7 md:h-7 object-contain rounded" />
        },
        {
            label: "JQuery",
            value: 70,
            color: "#0769ad",
            description: "Proficient in quick DOM manipulation, AJAX animations, and legacy script maintenance.",
            logo: <img src={jquery} alt="JQuery" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "TypeScript",
            value: 95,
            color: "#3178c6",
            description: "Type safety, interfaces, custom generics, union types, and compile-time validation for scalable code bases.",
            logo: <img src={typescript} alt="TypeScript" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "React.js",
            value: 90,
            color: "#61dafb",
            description: "Declarative UI, component lifecycle, custom hooks, context API, state management, and performance tuning.",
            logo: <img src={reactLogo} alt="React" className="w-6 h-6 md:w-7 md:h-7 object-contain animate-[spin_10s_linear_infinite]" />
        },
        {
            label: "Next.js",
            value: 85,
            color: "#64748b",
            description: "Server-side rendering, static site generation, App Router, optimization of images and scripts, and server actions.",
            logo: <img src={nextjs} alt="Next.js" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "Tailwind CSS",
            value: 95,
            color: "#38bdf8",
            description: "Rapid prototyping, custom theme configuration, responsive utilities, and clean utility-first layout composition.",
            logo: <img src={tailwind} alt="Tailwind" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "Bootstrap",
            value: 90,
            color: "#7952b3",
            description: "Grid systems, utility classes, theme customization, and pre-styled UI component integration.",
            logo: <img src={bootstrapLogo} alt="Bootstrap" className="w-6 h-6 md:w-7 md:h-7 object-contain animate-[spin_10s_linear_infinite]" />
        },
        {
            label: "API Integration",
            value: 80,
            color: "#10b981",
            description: "Fetching API resources using Axios & Fetch, token-based authentication, query parameters, and global caching.",
            logo: <img src={api} alt="API" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "Redux",
            value: 85,
            color: "#764abc",
            description: "Predictable global state management using actions, reducers, middleware (Thunk/Saga), and Redux Toolkit for scalable apps.",
            logo: <img src={redux} alt="Redux" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },


        {
            label: "Zustand",
            value: 80,
            color: "#f97316",
            description: "Lightweight, unopinionated client state management with minimal boilerplate and React hooks-first API.",
            logo: <img src={zustandLogo} alt="Zustand" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "UI/UX Design",
            value: 100,
            color: "#ea580c",
            description: "Creating wireframes, interactive prototypes, user flows, visual hierarchy, typography, and cohesive color palettes.",
            logo: <img src={figma} alt="Figma" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
        },
        {
            label: "Design Responsiveness",
            value: 100,
            color: "#0d9488",
            description: "Mobile-first development, breakpoints, flexible layouts, and cross-browser visual fidelity testing.",
            logo: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6 text-teal-500 dark:text-teal-400">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            )
        },
    ];

    const N = skills.length;
    const [activeIndex, setActiveIndex] = useState(5); // React.js default
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [rotationAngle, setRotationAngle] = useState(-90 - (360 / N) * 5); // Start with React at top
    const [radius, setRadius] = useState(175);

    // Auto-rotation state via ref to avoid stale closures
    const rotationRef = useRef(-90 - (360 / N) * 5);
    const activeIndexRef = useRef(5);
    const animFrameRef = useRef<number | null>(null);
    const isPausedRef = useRef(false);
    const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const speedRef = useRef(0.02); // degrees per frame (~1.2 deg/s)

    // Keep activeIndexRef in sync
    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const getActiveFromAngle = useCallback((angle: number) => {
        // Normalize the wheel angle to figure out which skill is at top (-90 deg)
        const normalised = (((-angle - 90) % 360) + 360) % 360;
        const perSlice = 360 / N;
        return Math.round(normalised / perSlice) % N;
    }, [N]);

    // Auto-rotation loop
    useEffect(() => {
        const loop = () => {
            if (!isPausedRef.current) {
                rotationRef.current -= speedRef.current;
                setRotationAngle(rotationRef.current);
                // Update active skill to whichever is at the top
                const newActive = getActiveFromAngle(rotationRef.current);
                if (newActive !== activeIndexRef.current) {
                    setActiveIndex(newActive);
                }
            }
            animFrameRef.current = requestAnimationFrame(loop);
        };
        animFrameRef.current = requestAnimationFrame(loop);
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [getActiveFromAngle]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setRadius(95);
            } else if (window.innerWidth < 768) {
                setRadius(120);
            } else if (window.innerWidth < 1024) {
                setRadius(140);
            } else {
                setRadius(175);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSkillClick = (index: number) => {
        setActiveIndex(index);
        activeIndexRef.current = index;
        const baseAngle = (360 / N) * index;
        const targetAngle = -90 - baseAngle;
        const angleDiff = ((((targetAngle - rotationRef.current) + 180) % 360) + 360) % 360 - 180;
        const newAngle = rotationRef.current + angleDiff;
        rotationRef.current = newAngle;
        setRotationAngle(newAngle);
        // Pause auto-rotation briefly then resume
        isPausedRef.current = true;
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = setTimeout(() => {
            isPausedRef.current = false;
        }, 2500);
    };

    return (
        <section className="md:py-24 sm:py-16 py-10 bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden" id="about">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/5 blur-[100px] -z-10"></div>
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="text-center mb-14 sm:mb-20" data-aos="fade-up">
                    <span className="text-indigo-500 font-mono tracking-[0.4em] uppercase text-xs mb-3 block">Expertise</span>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                        About <span className="text-indigo-500">Me.</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-transparent mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse gap-20 items-start mb-10 sm:mb-16 md:mb-28">
                    <div className="relative group order-2 md:order-1" data-aos="fade-right">
                        <div className="absolute -inset-4 border border-indigo-500/20 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-indigo-500 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-teal-500 rounded-br-3xl"></div>
                        <div className="relative rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-black/5 dark:border-white/5 aspect-[4/5] lg:aspect-auto">
                            <img src={profile} alt="Amir Shahzad" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110" />
                            <div className="absolute md:bottom-8 md:left-8 left-4 right-4 bottom-4 md:right-8 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <p className="text-foreground font-bold text-lg mb-1">Amir Shahzad</p>
                                <p className="text-indigo-400 text-sm font-medium">Senior Software Engineer</p>
                            </div>
                        </div>
                        <div className="absolute -top-8 -right-3 md:-right-8 bg-indigo-600 text-white w-20 h-20 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-2xl shadow-2xl shadow-indigo-600/40 transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                            <span className="text-2xl md:text-4xl font-black">4+</span>
                            <span className="text-[10px] uppercase font-black tracking-tighter">Years Exp.</span>
                        </div>
                    </div>
                    <div className="relative group order-1 md:order-2" data-aos="fade-left">
                        <div className="space-y-5">
                            {/* Tagline */}
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                                Crafting <span className="text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">Scalable</span> Digital Products <br className="hidden sm:block" /> That Drive Real Results.
                            </h3>

                            {/* Bio paragraphs */}
                            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                I'm a <span className="text-foreground font-semibold">Senior Frontend Engineer</span> with 4+ years of professional experience designing and shipping production-grade web applications. My core expertise spans <span className="text-foreground border-b border-indigo-500/50">React.js, Next.js, and TypeScript</span> — enabling me to architect feature-rich, highly maintainable codebases that scale with product growth.
                            </p>
                            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                I collaborate closely with product, design, and backend teams to translate complex requirements into intuitive, pixel-perfect interfaces. From <span className="text-foreground font-semibold">advanced state management</span> and API integration to <span className="text-foreground font-semibold">accessibility compliance</span> and Core Web Vitals optimization — I deliver end-to-end frontend solutions built for performance and longevity.
                            </p>
                            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                Whether working independently or within an agile team, I bring strong ownership, clear communication, and a relentless focus on shipping quality software that exceeds user expectations.
                            </p>

                            {/* Professional Highlights */}
                            <div className="grid grid-cols-3 gap-4 pt-2">
                                {[
                                    { value: "4+", label: "Years Experience" },
                                    { value: "30+", label: "Projects Delivered" },
                                    { value: "100%", label: "Client Satisfaction" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col items-center text-center bg-white/60 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded-xl py-3 px-2">
                                        <span className="text-xl md:text-2xl font-black text-indigo-500">{stat.value}</span>
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="grid grid-cols-1 pt-6 gap-4 sm:grid-cols-2">
                            <a href="#contact" className="bg-indigo-600 text-center hover:bg-indigo-700 text-white px-10 py-4 rounded-xl text-sm font-bold shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1">Hire Me</a>
                            <a href="#projects" className="border text-center border-neutral-300 dark:border-neutral-800 hover:border-indigo-500 text-gray-600 dark:text-gray-300 hover:text-indigo-500 px-10 py-4 rounded-xl text-sm font-bold transition-all">View Portfolio</a>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-50/50 dark:bg-[#0d0f1a]/60 border border-indigo-100 dark:border-indigo-500/10 p-5 sm:p-10 lg:p-16 rounded-3xl backdrop-blur-sm" data-aos="fade-up">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Title and Detail Card (Left Column) */}
                        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
                            <div>
                                <div className="border-l-4 border-indigo-500 pl-6 mb-6">
                                    <h3 className="text-xl md:text-3xl font-black text-foreground uppercase tracking-tighter">
                                        Core Technical <span className="text-indigo-500">Skills</span>
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm mt-2">
                                        Interactive visualization of my technical stack. Click any skill on the wheel to rotate and focus.
                                    </p>
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white/80 dark:bg-[#141625]/80 border border-neutral-100 dark:border-indigo-500/5 p-6 rounded-2xl space-y-5 shadow-lg relative overflow-hidden"
                                    >
                                        {/* Background Subtle Accent Glow */}
                                        <div
                                            className="absolute top-0 right-0 w-24 h-24 blur-2xl opacity-10 -z-10 rounded-full transition-colors duration-500"
                                            style={{ backgroundColor: skills[activeIndex].color }}
                                        />

                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-zinc-900 border shadow-md transition-colors"
                                                style={{ borderColor: skills[activeIndex].color + "40" }}
                                            >
                                                {skills[activeIndex].logo}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-foreground">{skills[activeIndex].label}</h4>
                                                <span className="text-xs text-gray-400 font-mono">Proficiency</span>
                                            </div>
                                            <span
                                                className="ml-auto font-mono text-xl font-bold transition-colors"
                                                style={{ color: skills[activeIndex].color }}
                                            >
                                                {skills[activeIndex].value}%
                                            </span>
                                        </div>

                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[60px]">
                                            {skills[activeIndex].description}
                                        </p>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-mono font-bold text-gray-400">
                                                <span>BEGINNER</span>
                                                <span>INTERMEDIATE</span>
                                                <span>EXPERT</span>
                                            </div>
                                            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden p-[2px]">
                                                <motion.div
                                                    className="h-full rounded-full"
                                                    style={{ backgroundColor: skills[activeIndex].color }}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skills[activeIndex].value}%` }}
                                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Skills Mini-Grid Chips */}
                            <div className="space-y-3 pt-4">
                                <span className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Quick Switch</span>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSkillClick(index)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300 cursor-pointer ${activeIndex === index
                                                ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/20"
                                                : "bg-white dark:bg-[#111320] border-neutral-200 dark:border-neutral-800/80 text-gray-600 dark:text-gray-400 hover:border-indigo-500/50"
                                                }`}
                                        >
                                            {skill.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interactive Rotating Skill Circle (Right Column) */}
                        <div className="lg:col-span-7 flex justify-center items-center py-10 relative select-none">
                            <div
                                className="relative flex items-center justify-center transition-all duration-300"
                                style={{
                                    width: `${radius * 2 + 100}px`,
                                    height: `${radius * 2 + 100}px`,
                                }}
                            >
                                {/* Central active skill display */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                                    {/* Rotating backdrop ring */}
                                    <div className="absolute inset-0 w-32 h-32 md:w-44 md:h-44 -m-6 md:-m-8 border border-dashed border-indigo-500/10 dark:border-indigo-500/25 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />

                                    {/* Radial background glowing highlight */}
                                    <motion.div
                                        className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full filter blur-xl opacity-25"
                                        style={{ backgroundColor: skills[activeIndex].color }}
                                        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    {/* Glowing active skill icon in the center */}
                                    <div
                                        className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-white dark:bg-[#141625] border-2 flex flex-col items-center justify-center p-3 shadow-2xl transition-colors duration-500"
                                        style={{ borderColor: skills[activeIndex].color }}
                                    >
                                        <div className="scale-125 mb-1 text-center flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                                            {skills[activeIndex].logo}
                                        </div>
                                        <span className="text-[10px] md:text-xs font-mono font-bold text-gray-500 dark:text-gray-400 mt-1 select-none">
                                            {skills[activeIndex].value}%
                                        </span>
                                    </div>
                                </div>

                                {/* Orbit line */}
                                <div
                                    className="absolute border border-neutral-200 dark:border-neutral-800/80 rounded-full pointer-events-none"
                                    style={{
                                        width: `${radius * 2}px`,
                                        height: `${radius * 2}px`,
                                    }}
                                />

                                {/* Rotating Skill Items */}
                                <div
                                    className="w-full h-full relative"
                                    style={{
                                        transform: `rotate(${rotationAngle}deg)`,
                                        transition: isPausedRef.current ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
                                    }}
                                >
                                    {skills.map((skill, index) => {
                                        const angle = (360 / N) * index;
                                        const angleRad = (angle * Math.PI) / 180;
                                        const x = Math.cos(angleRad) * radius;
                                        const y = Math.sin(angleRad) * radius;
                                        const isSelected = activeIndex === index;

                                        return (
                                            <div
                                                key={index}
                                                className="absolute left-1/2 top-1/2 cursor-pointer z-10"
                                                style={{
                                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                                }}
                                                onClick={() => handleSkillClick(index)}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                {/* Counter-rotation to keep the icons upright */}
                                                <div
                                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-zinc-900 border flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 relative ${isSelected
                                                        ? "border-indigo-500 shadow-indigo-500/30 scale-110"
                                                        : "border-neutral-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:shadow-lg"
                                                        }`}
                                                    style={{
                                                        transform: `rotate(${-rotationAngle}deg)`,
                                                        transition: "none",
                                                    }}
                                                >
                                                    <div className="opacity-80 hover:opacity-100 select-none flex items-center justify-center">
                                                        {skill.logo}
                                                    </div>

                                                    {/* Tooltip element */}
                                                    <AnimatePresence>
                                                        {hoveredIndex === index && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                                transition={{ duration: 0.15 }}
                                                                className="absolute bottom-full left-1/2 mb-2.5 px-2.5 py-1 bg-zinc-900/95 dark:bg-black/95 text-white dark:text-zinc-100 text-xs font-semibold rounded-lg shadow-lg shadow-black/30 border border-white/10 dark:border-zinc-800/80 whitespace-nowrap pointer-events-none z-50"
                                                                style={{ x: "-50%" }}
                                                            >
                                                                {skill.label}
                                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900/95 dark:border-t-black/95" />
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};