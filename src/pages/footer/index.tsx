import { Instagram, Linkedin, Github, Mail, Phone } from "lucide-react"

export const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About me", href: "#about" },
        { name: "Portfolio", href: "#projects" },
        { name: "Contact me", href: "#contact" },
    ];

    const socials = [
        { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
        { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
        { icon: <Github size={18} />, href: "#", label: "GitHub" },
    ];

    return (
        <footer className="py-8 sm:py-16 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="flex flex-col items-center">
                    
                    {/* Brand Logo - High Impact */}
                    <div className="mb-8 sm:mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-2">
                            AMIR <span className="text-orange-500">SHAHZAD</span>
                        </h2>
                        <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Navigation - Minimalist */}
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
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 items-center py-10 border-y border-white/5 mb-10">
                        
                        {/* Contact Info Left */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <a href="mailto:amir.shahzad7005@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm font-medium">amir.shahzad7005@gmail.com</span>
                            </a>
                        </div>

                        {/* Social Icons Center */}
                        <div className="flex justify-center gap-4">
                            {socials.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-1 shadow-xl"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Contact Info Right */}
                        <div className="flex flex-col items-center md:items-end gap-3">
                            <a href="tel:+923079075010" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <span className="text-sm font-medium">+92 307 9075010</span>
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