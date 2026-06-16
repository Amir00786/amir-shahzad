import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Download } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
            const sections = navLinks.map((l) => l.href.substring(1));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const { top } = el.getBoundingClientRect();
                    if (top <= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/amir-shahzad-cv.pdf";
        link.download = "Amir Shahzad CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                    scrolled
                        ? "py-2.5 bg-white/75 dark:bg-[#050812]/80 backdrop-blur-2xl border-b border-black/[0.05] dark:border-white/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]"
                        : "py-5 bg-transparent"
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between gap-4">

                    {/* ── Logo ── */}
                    <a href="#home" className="flex items-center gap-2 flex-shrink-0 group">
                        {/* Icon mark */}
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
                            <span className="text-white font-black text-sm leading-none">A</span>
                        </div>
                        <div className="text-xl font-black tracking-tight leading-none">
                            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                                Amir
                            </span>
                            <span className="text-neutral-900 dark:text-white">
                                .dev
                            </span>
                        </div>
                    </a>

                    {/* ── Desktop Nav — centered pill ── */}
                    <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                        <ul className="flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.08] rounded-full px-2 py-1.5 backdrop-blur-md">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                                            }`}
                                        >
                                            {/* Active pill bg */}
                                            {isActive && (
                                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/30" />
                                            )}
                                            {/* Active dot indicator */}
                                            {isActive && (
                                                <span className="relative z-10 w-1 h-1 rounded-full bg-white/70" />
                                            )}
                                            <span className="relative z-10">{link.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* ── Actions ── */}
                    <div className="flex items-center gap-2.5 flex-shrink-0">

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-400/40 text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 transition-all duration-300 backdrop-blur-sm"
                        >
                            {theme === "dark"
                                ? <Sun className="w-4 h-4" />
                                : <Moon className="w-4 h-4" />
                            }
                        </button>

                        {/* Download CV — desktop */}
                        <button
                            onClick={handleDownload}
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <Download className="w-3.5 h-3.5" />
                            Resume
                        </button>

                        {/* Hire Me CTA */}
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                            </span>
                            Hire Me
                        </a>

                        {/* Hamburger — mobile */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50"
                        >
                            <span className={`block h-[1.5px] bg-neutral-700 dark:bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? "w-4 translate-y-[6.5px] rotate-45" : "w-4"}`} />
                            <span className={`block h-[1.5px] bg-neutral-700 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 w-0" : "w-3.5 opacity-100"}`} />
                            <span className={`block h-[1.5px] bg-neutral-700 dark:bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? "w-4 -translate-y-[6.5px] -rotate-45" : "w-4"}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            <div
                className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${
                    isOpen ? "visible" : "invisible pointer-events-none"
                }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Drawer Panel */}
                <div
                    ref={menuRef}
                    className={`absolute top-0 right-0 h-full w-[300px] bg-white dark:bg-[#06080f] border-l border-black/5 dark:border-white/[0.07] shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Drawer header */}
                    <div className="flex items-center justify-between px-7 py-6 border-b border-black/5 dark:border-white/[0.06]">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                                <span className="text-white font-black text-xs">A</span>
                            </div>
                            <span className="font-black text-lg text-neutral-900 dark:text-white tracking-tight">
                                Menu
                            </span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Nav links */}
                    <nav className="flex-1 px-5 py-6 overflow-y-auto">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-600 px-3 mb-3">
                            Navigation
                        </p>
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link, i) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <li
                                        key={link.name}
                                        style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                                        className={`transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                                isActive
                                                    ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                                                    : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white"
                                            }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-indigo-500" : "bg-neutral-300 dark:bg-neutral-700"}`} />
                                            {link.name}
                                            {isActive && (
                                                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-indigo-400 opacity-70">
                                                    Current
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Drawer footer CTAs */}
                    <div className="px-5 py-6 border-t border-black/5 dark:border-white/[0.06] flex flex-col gap-3">
                        <button
                            onClick={() => { handleDownload(); setIsOpen(false); }}
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-neutral-200 dark:border-white/10 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 hover:border-indigo-400/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </button>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform duration-150"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                            </span>
                            Let's Work Together
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};