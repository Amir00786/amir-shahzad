import { useState, useRef, useEffect } from "react";
// import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion"; // Highly recommended for professional feel

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef<HTMLDivElement | null>(null);
    // const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About me", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#projects" },
        { name: "Contact me", href: "#contact" },
    ];

    // Scroll effect for header background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Logic to update active section on scroll
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled 
                ? "py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg" 
                : "py-5 bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between mx-auto px-6 lg:px-12 max-w-[1440px]">
                
                {/* Logo Section */}
                <div className="text-2xl font-black tracking-tighter cursor-pointer">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                        AMIR.
                    </span>
                    <span className="text-neutral-800 dark:text-white">SHAHZAD</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center bg-neutral-100/50 dark:bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                    <ul className="flex items-center gap-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        activeSection === link.href.substring(1)
                                        ? "text-orange-500"
                                        : "text-neutral-600 dark:text-gray-300 hover:text-orange-500"
                                    }`}
                                >
                                    {link.name}
                                </a>
                                {/* Animated Underline */}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                                    activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                                }`}></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    {/* <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:scale-110 transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
                        ) : (
                            <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                        )}
                    </button> */}

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_14px_0_rgba(255,118,20,0.39)] hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Hire Me
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-neutral-800 dark:text-white"
                    >
                        <div className="space-y-1.5">
                            <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`block h-0.5 w-6 bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                            <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
                        />
                        <motion.div
                            ref={menuRef}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[280px] bg-white dark:bg-neutral-950 z-[100] lg:hidden shadow-2xl p-8"
                        >
                            <div className="flex flex-col h-full">
                                <div className="text-xl font-bold mb-12">Navigation</div>
                                <ul className="space-y-8">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-2xl font-semibold text-neutral-800 dark:text-gray-200 hover:text-orange-500 transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <a
                                        href="#contact"
                                        className="block w-full text-center bg-orange-500 text-white py-4 rounded-xl font-bold"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Let's Talk
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};