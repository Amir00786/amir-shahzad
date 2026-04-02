import { Mail, Phone } from "lucide-react"

export const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About me", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact me", href: "#contact" },
    ];

    return (
        <footer className="py-8 sm:py-16 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="flex flex-col items-center">

                    {/* Brand Logo */}
                    <div className="mb-8 sm:mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-2 uppercase">
                            AMIR <span className="text-orange-500">SHAHZAD</span>
                        </h2>
                        <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Navigation */}
                    <nav className="mb-8 sm:mb-12">
                        <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-white transition-all duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Socials & Contact Wrapper */}
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 sm:gap-10 items-center py-8 sm:py-10 border-y border-white/5 mb-8 sm:mb-10">

                        {/* Contact Info Left */}
                        <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1">
                            <a href="mailto:amir.shahzadvu91@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm font-medium">amir.shahzadvu91@gmail.com</span>
                            </a>
                        </div>

                        {/* Social Icons Center */}
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 order-1 md:order-2">

                            {/* LinkedIn */}
                            <a href="#" className="relative flex items-center justify-center h-14 w-14 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                <div className="absolute inset-0 bg-[#0077B5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                <svg
                                    viewBox="0 0 20 20"
                                    className="w-5 h-5 fill-[#0077B5] group-hover:fill-white transition-colors relative z-50 duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a href="#" className="relative flex items-center justify-center h-14 w-14 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                {/* Animated Background Layer */}
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-10 h-10 fill-none stroke-[#8a00c2] relative z-50 group-hover:stroke-[#8a00c2] transition-colors duration-500"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>

                            {/* Fiverr */}
                            <a href="#" className="relative flex items-center justify-center h-14 w-14 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                {/* Animated Background Layer */}
                                <div className="absolute inset-0 bg-[#1dbf73] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                                {/* SVG Icon */}
                                <svg
                                    viewBox="0 0 192 192"
                                    className="relative z-10 w-10 h-10 stroke-white fill-none transition-colors duration-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z"
                                        strokeLinejoin="round"
                                        strokeWidth="12"
                                    />
                                </svg>
                            </a>

                            {/* Upwork */}
                            <a href="#" className="relative flex items-center justify-center h-14 w-14 rounded-xl overflow-hidden border border-white/10 group transition-all duration-300">
                                <div className="absolute inset-0 bg-[#3b8132] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                <svg
                                    viewBox="0 0 32 32"
                                    className="w-10 h-10 fill-[#14a800] relative z-50 group-hover:fill-white transition-colors duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                                </svg>
                            </a>

                        </div>

                        {/* Contact Info Right */}
                        <div className="flex flex-col items-center md:items-end gap-3 order-3">
                            <a href="tel:+923076258337" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <span className="text-sm font-medium">+92 307 6258337</span>
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <Phone size={16} />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Copyright & Credits */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-600">
                        <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
                        <div className="flex items-center gap-2 group cursor-default">
                            <span>Designed by</span>
                            <span className="text-gray-400 group-hover:text-orange-500 transition-colors">@Mahmood Fazila</span>
                        </div>
                        <p>Senior Frontend Developer</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};