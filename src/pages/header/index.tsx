import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "My Work", href: "#projects" },
        { name: "What I Offer", href: "#services" },
        //  { name: "Expertise", href: "#skills" },
        { name: "What Client Say", href: "#testimonials" },
        { name: "Contact Me", href: "#contact" },
    ];

    // Outside click handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header
            className="py-6 border-b border-white/20 dark:border-stone-900 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 transition-colors duration-300"
            data-aos="fade-down"
            data-aos-duration="2000"
        >``
            <div className="flex justify-between items-center mx-auto px-4 max-w-[1440px]">
                <strong>
                    <a
                        href="/"
                        className="text-2xl lg:text-4xl flex items-center gap-2 font-bold text-stone-900 dark:text-white"
                    >
                        Amir <span className="text-orange-500 dark:text-orange-400">Shahzad</span>
                    </a>
                </strong>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-orange-500/20 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        )}
                    </button>

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-5 w-8 flex flex-col gap-y-1 items-center xl:hidden cursor-pointer"
                    >
                        <div className="w-full h-1 bg-orange-500"></div>
                        <div className="w-full h-1 bg-white"></div>
                        <div className="w-full h-1 bg-orange-500"></div>
                    </div>

                    <nav className="hidden xl:block">
                        <ul className="flex items-center gap-x-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-base py-1 px-3 lg:px-5 hover:bg-orange-500 hover:rounded-full transition-all duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-30 xl:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Sidebar */}
                <div
                    ref={menuRef}
                    className={`absolute top-0 h-screen right-0 w-64 bg-stone-800 dark:bg-gray-800 text-white transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div
                        className="relative cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="absolute right-8 w-1 h-6 bg-orange-500 top-7 rotate-[-45deg]"></span>
                        <span className="absolute right-8 w-1 h-6 bg-orange-500 top-7 rotate-45"></span>
                    </div>
                    <ul className="flex flex-col gap-y-6 p-6 mt-20">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-base lg:text-lg py-1 px-3 lg:px-5 hover:bg-orange-500 hover:rounded-full transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};
