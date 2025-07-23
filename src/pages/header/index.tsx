import { useState } from "react";
import "aos/dist/aos.css";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Who I am", href: "#about" },
        { name: "My Work", href: "#projects" },
        { name: "What I Offer", href: "#services" },
        { name: "Expertise", href: "#skills" },
        { name: "What Client Say", href: "#testimonials" },
        { name: "Contact Me", href: "#contact" },
    ];


    return (
        <header className="py-6 border-b border-white/20 fixed top-0 left-0 right-0 z-50 bg-stone-900" data-aos="fade-down" data-aos-duration="2000">
            <div className="flex justify-between items-center mx-auto px-4 max-w-[1440px]">
                <strong>
                    <a href="/" className="text-2xl lg:text-4xl flex items-center gap-2 font-bold text-white">
                        Amir
                        <span className="text-orange-500">Shahzad</span>
                    </a>
                </strong>
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
            <div
                className={`fixed inset-0 z-30 xl:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`absolute top-0 right-0 h-full w-64 bg-stone-800 text-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative cursor-pointer" onClick={() => setIsOpen(false)}>
                        <span className="absolute right-8 w-1 h-6 bg-orange-500 top-7 rotate-[-45deg]"></span>
                        <span className="absolute right-8 w-1 h-6 bg-orange-500 top-7 rotate-45"></span>
                    </div>
                    <ul className="flex flex-col gap-y-6 p-6 mt-20">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-base lg:text-lg py-1 px-3 lg:px-5 hover:bg-orange-500 hover:rounded-full transition-all duration-300"
                                    onClick={() => setIsOpen(false)} // Optional: close on link click
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}