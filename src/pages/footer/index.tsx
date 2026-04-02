import { Mail, Phone } from "lucide-react"

export const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About me", href: "#about" },
        { name: "Portfolio", href: "#projects" },
        { name: "Contact me", href: "#contact" },
    ];

    const socials = [
        {
            href: "#",
            label: "LinkedIn",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            href: "#",
            label: "GitHub",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
        },
        {
            href: "#",
            label: "Fiverr",
            icon: (
                <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="20" cy="20" r="20" fill="#1DBF73"/>
                    <path 
                        d="M28.8336 30.6H23.5816V18.976H18.5552V30.6H13.272V18.976H10.276V14.676H13.272V13.3704C13.272 9.96321 15.8496 7.63843 19.684 7.63843H23.5824V11.9376H20.5544C19.3296 11.9376 18.556 12.6064 18.556 13.6896V14.676H28.8344V30.6H28.8336Z" 
                        fill="white"
                    />
                </svg>
            ),
        },
        {
            href: "#",
            label: "Upwork",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
            ),
        },
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
                            <a href="mailto:amir.shahzad7005@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm font-medium">amir.shahzad7005@gmail.com</span>
                            </a>
                        </div>

                        {/* Social Icons Center */}
                        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 order-1 md:order-2">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="sm:w-12 sm:h-12 h-20 w-full rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-1 shadow-xl"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Contact Info Right */}
                        <div className="flex flex-col items-center md:items-end gap-3 order-3">
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