import { useState, useRef, useEffect } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef<HTMLDivElement | null>(null);

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
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu open
        } else {
            document.body.style.overflow = 'unset';
        }
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
                <nav className="hidden lg:flex items-center bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
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
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                                    activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                                }`}></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
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
                            <span className="block h-0.5 w-6 bg-current"></span>
                            <span className="block h-0.5 w-6 bg-current"></span>
                            <span className="block h-0.5 w-6 bg-current"></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* --- Updated Mobile Menu Section (Simple Divs) --- */}
            <div 
                className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${
                    isOpen ? "visible" : "invisible"
                }`}
            >
                {/* Backdrop Overlay */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Tray */}
                <div 
                    ref={menuRef}
                    className={`absolute top-0 right-0 h-screen w-[280px] bg-white dark:bg-neutral-950 shadow-2xl p-8 transition-transform duration-500 ease-in-out transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Close Button (Cross Icon) */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-orange-500 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col h-full pt-12">
                        <ul className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-2xl transition-colors block ${
                                            activeSection === link.href.substring(1) 
                                            ? "text-orange-500" 
                                            : "text-neutral-800 dark:text-gray-200 hover:text-orange-500"
                                        }`}
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
                                className="block w-full text-center bg-orange-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};