import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/" },
        { name: "Services", href: "/" },
        { name: "Projects", href: "/" },
        { name: "Contact", href: "/" },
    ];

    return (
        <header className="py-6">
            <div className="flex justify-between items-center">
                <strong>
                    <a href="/" className="text-2xl lg:text-4xl flex items-center gap-2 font-bold text-white">
                        Amir
                        <span className="text-orange-500">Shahzad</span>
                    </a>
                </strong>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-5 w-8 flex flex-col gap-y-1 items-center md:hidden cursor-pointer"
                >
                    <div className="w-full h-1 bg-orange-500"></div>
                    <div className="w-full h-1 bg-white"></div>
                    <div className="w-full h-1 bg-orange-500"></div>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-x-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-base lg:text-lg py-1 px-3 lg:px-5 hover:bg-orange-500 hover:rounded-full transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div
                className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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