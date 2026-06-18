import profile from "../../assets/profile.jpg";

export const FindMeOn = () => {
    const cards = [
        {
            name: "Gmail",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=amirshahzadvu91@gmail.com",
            gradient: "from-[#EA4335] to-[#c0392b]",
            shadow: "hover:shadow-[#EA4335]/40",
            textColor: "text-white",
            rotation: "-rotate-12 lg:-rotate-[22deg]",
            hoverRotation: "hover:-rotate-3 lg:hover:-rotate-22",
            offsetClass: "-translate-x-[90px] translate-y-6 sm:-translate-x-[300px] lg:-translate-x-[420px] lg:translate-y-12",
            hoverOffsetClass: "hover:-translate-y-16 hover:-translate-x-[90px] sm:hover:-translate-x-[300px] lg:hover:-translate-x-[420px]",
            zIndex: "z-10",
            previewUrl: "mail.google.com",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.29 1.454-2.032 2.514-1.202L12 11.33l9.486-7.075c1.06-.83 2.514-.088 2.514 1.202z"/>
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                        <span className="text-[#EA4335] font-black text-sm">gmail</span>
                    </div>
                    <div className="my-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-tight">amirshahzadvu91@gmail.com</p>
                        <p className="text-[8px] text-slate-400 mt-0.5 leading-tight">Send an email directly.</p>
                    </div>
                    <button className="w-full bg-[#EA4335] hover:bg-[#c0392b] text-white text-[8px] font-bold py-1.5 rounded-full transition-colors mt-auto">
                        Compose Email
                    </button>
                </div>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/amir-shahzad-222776249/",
            gradient: "from-[#2980b9] to-[#3498db]",
            shadow: "hover:shadow-[#3498db]/40",
            textColor: "text-white",
            rotation: "-rotate-6 lg:-rotate-[14deg]",
            hoverRotation: "hover:-rotate-2 lg:hover:-rotate-[4deg]",
            offsetClass: "-translate-x-[60px] translate-y-3 sm:-translate-x-[200px] lg:-translate-x-[280px] lg:translate-y-6",
            hoverOffsetClass: "hover:-translate-y-16 hover:-translate-x-[60px] sm:hover:-translate-x-[200px] lg:hover:-translate-x-[280px]",
            zIndex: "z-20",
            previewUrl: "linkedin.com/in/amir-shahzad-222776249",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full bg-[#3498db] text-white flex items-center justify-center font-bold text-xs select-none">
                            in
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-none mb-0.5">Amir Shahzad</p>
                            <p className="text-[8px] text-slate-400 leading-none">Senior React Developer</p>
                        </div>
                    </div>
                    <p className="text-[8px] text-slate-500 dark:text-slate-400 my-1 leading-normal">Building pixel-perfect custom web systems with clean layout and code.</p>
                    <button className="w-full bg-[#3498db] text-white text-[8px] font-bold py-1.5 rounded-full hover:bg-[#2980b9] transition-colors mt-auto">
                        Connect
                    </button>
                </div>
            )
        },
        {
            name: "GitHub",
            url: "https://github.com/Amir00786",
            gradient: "from-[#2c3e50] to-[#1a252f]",
            shadow: "hover:shadow-[#34495e]/40",
            textColor: "text-white",
            rotation: "-rotate-3 lg:-rotate-[6deg]",
            hoverRotation: "hover:-rotate-1 lg:hover:-rotate-[2deg]",
            offsetClass: "-translate-x-[30px] translate-y-1 sm:-translate-x-[100px] lg:-translate-x-[140px] lg:translate-y-2",
            hoverOffsetClass: "hover:-translate-y-16 hover:-translate-x-[30px] sm:hover:-translate-x-[100px] lg:hover:-translate-x-[140px]",
            zIndex: "z-30",
            previewUrl: "github.com/Amir00786",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between font-mono">
                    <div className="flex items-center gap-1">
                        <span className="text-slate-900 dark:text-white font-bold text-[9px]">Amir00786</span>
                        <span className="text-[7px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.2 rounded border border-slate-200 dark:border-slate-700">Public</span>
                    </div>
                    <p className="font-bold text-slate-800 dark:text-slate-100 text-[9px] mt-1 truncate">amir-shahzad-portfolio</p>
                    <div className="flex items-center gap-2 text-[7px] text-slate-500 dark:text-slate-400 mt-1">
                        <span className="flex items-center gap-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3178c6]"></span> TS
                        </span>
                        <span>★ 48</span>
                    </div>
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-1 mt-auto text-[7px] text-slate-400 truncate">
                        feat: liquid water caustics effect
                    </div>
                </div>
            )
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/923076358337",
            gradient: "from-[#128c7e] to-[#25d366]",
            shadow: "hover:shadow-[#25d366]/40",
            textColor: "text-white",
            rotation: "rotate-3 lg:rotate-[6deg]",
            hoverRotation: "hover:rotate-1 lg:hover:rotate-[2deg]",
            offsetClass: "translate-x-[30px] translate-y-1 sm:translate-x-[100px] lg:translate-x-[140px] lg:translate-y-2",
            hoverOffsetClass: "hover:-translate-y-16 hover:translate-x-[30px] sm:hover:translate-x-[100px] lg:hover:translate-x-[140px]",
            zIndex: "z-30",
            previewUrl: "wa.me/923076358337",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                        <span className="text-[#25d366] font-black text-sm">whatsapp</span>
                        <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse"></span>
                    </div>
                    <div className="my-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-tight">Direct Message</p>
                        <p className="text-[8px] text-slate-400 mt-0.5 leading-tight">Available for project inquiries.</p>
                    </div>
                    <button className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white text-[8px] font-bold py-1.5 rounded-full transition-colors mt-auto">
                        Chat Now
                    </button>
                </div>
            )
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/",
            gradient: "from-[#8e44ad] to-[#9b59b6]",
            shadow: "hover:shadow-[#9b59b6]/40",
            textColor: "text-white",
            rotation: "rotate-6 lg:rotate-[14deg]",
            hoverRotation: "hover:rotate-2 lg:hover:rotate-[4deg]",
            offsetClass: "translate-x-[60px] translate-y-3 sm:translate-x-[200px] lg:translate-x-[280px] lg:translate-y-6",
            hoverOffsetClass: "hover:-translate-y-16 hover:translate-x-[60px] sm:hover:translate-x-[200px] lg:hover:translate-x-[280px]",
            zIndex: "z-20",
            previewUrl: "instagram.com/amir_shahzad",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-xs bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] bg-clip-text text-transparent">instagram</span>
                    </div>
                    <div className="my-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-tight">@amir_shahzad</p>
                        <p className="text-[8px] text-slate-400 mt-0.5 leading-tight">Creative UI designs & highlights.</p>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] text-white text-[8px] font-bold py-1.5 rounded-full transition-colors mt-auto">
                        Follow
                    </button>
                </div>
            )
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/",
            gradient: "from-[#2c3e50] to-[#34495e]",
            shadow: "hover:shadow-[#34495e]/40",
            textColor: "text-white",
            rotation: "rotate-12 lg:rotate-[22deg]",
            hoverRotation: "hover:rotate-3 lg:hover:rotate-[6deg]",
            offsetClass: "translate-x-[90px] translate-y-6 sm:translate-x-[300px] lg:translate-x-[420px] lg:translate-y-12",
            hoverOffsetClass: "hover:-translate-y-16 hover:translate-x-[90px] sm:hover:translate-x-[300px] lg:hover:translate-x-[420px]",
            zIndex: "z-10",
            previewUrl: "facebook.com/amirshahzad",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[#34495e] font-black text-sm">facebook</span>
                    </div>
                    <div className="my-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-tight">Amir Shahzad</p>
                        <p className="text-[8px] text-slate-400 mt-0.5 leading-tight">Connect on social media.</p>
                    </div>
                    <button className="w-full bg-[#34495e] hover:bg-[#2c3e50] text-white text-[8px] font-bold py-1.5 rounded-full transition-colors mt-auto">
                        Follow
                    </button>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center border-t border-b border-slate-200/30 dark:border-zinc-800/40" id="findme-on">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#9b59b6]/10 blur-[130px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3498db]/15 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#25d366]/10 blur-[130px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-[#34495e]/20 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-[#EA4335]/15 blur-[130px] rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 flex flex-col items-center">

                {/* Section Title */}
                <div className="text-center mb-14 sm:mb-20 lg:mb-28" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-orange-50/90 drop-shadow-sm select-none">
                        FIND ME ON
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#9b59b6] via-[#3498db] to-[#25d366] mx-auto mt-4 rounded-full"></div>
                </div>

                {/* ====== MOBILE GRID LAYOUT (hidden on lg+) ====== */}
                <div className="lg:hidden w-full max-w-sm mx-auto flex flex-col gap-4" data-aos="fade-up">
                    {/* Profile Picture */}
                    <div className="flex justify-center mb-2">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                            <img
                                src={profile}
                                alt="Amir Shahzad"
                                className="w-full h-full object-cover object-top grayscale"
                            />
                        </div>
                    </div>
                    <p className="text-center text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">Connect with me</p>

                    {/* Social Link Buttons */}
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={card.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-gradient-to-r ${card.gradient} shadow-lg active:scale-[0.97] transition-all duration-200 group`}
                        >
                            {/* Icon */}
                            <div className="w-11 h-11 flex items-center justify-center bg-white/15 rounded-xl shrink-0">
                                <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full">
                                    {card.icon}
                                </div>
                            </div>
                            {/* Name */}
                            <span className="text-white font-black text-base uppercase tracking-widest italic">
                                {card.name}
                            </span>
                            {/* Arrow */}
                            <svg className="ml-auto w-4 h-4 fill-white opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                            </svg>
                        </a>
                    ))}
                </div>

                {/* ====== FAN DECK LAYOUT (lg and above only) ====== */}
                <div className="hidden lg:flex relative w-full max-w-[1200px] h-[600px] items-center justify-center mt-6 select-none" data-aos="zoom-in">

                    {/* Social Cards (Left and Right Wings) */}
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute w-[240px] h-[350px] transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) transform origin-bottom hover:scale-110 hover:-translate-y-16 ${card.zIndex} hover:z-[60] ${card.rotation} ${card.hoverRotation} ${card.offsetClass} ${card.hoverOffsetClass} group`}
                        >
                            {/* FLOATING MOCK BROWSER PREVIEW */}
                            <div className="absolute -top-[155px] -left-8 w-[220px] h-[150px] bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden scale-75 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-bottom-right z-50 flex flex-col -rotate-[6deg] group-hover:rotate-0">
                                {/* Browser URL Header */}
                                <div className="flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#27c93f]"></span>
                                    </div>
                                    <div className="flex-1 max-w-[130px] mx-auto bg-slate-200 dark:bg-slate-800 rounded py-0.5 px-2 text-[8px] text-slate-500 dark:text-slate-400 truncate text-center font-mono select-none">
                                        {card.previewUrl}
                                    </div>
                                    <div className="w-8"></div>
                                </div>
                                {/* Page Content */}
                                <div className="flex-1 p-3 flex flex-col text-slate-700 dark:text-slate-300 select-none">
                                    {card.previewContent}
                                </div>
                            </div>

                            {/* Actual Card Anchor */}
                            <a
                                href={card.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full h-full rounded-[32px] p-7 bg-gradient-to-b ${card.gradient} border border-white/10 flex flex-col justify-between items-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow`}
                            >
                                {/* Inner Border reflection */}
                                <div className="absolute inset-1 rounded-[26px] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors"></div>

                                {/* Card Icon */}
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="p-3 bg-white/10 rounded-3xl group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                </div>

                                {/* Card Name */}
                                <div className="text-center mt-2">
                                    <span className={`text-lg font-black uppercase tracking-widest ${card.textColor} opacity-90 group-hover:opacity-100 italic transition-opacity`}>
                                        {card.name}
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}

                    {/* Center Profile Card */}
                    <div className="absolute w-[260px] h-[375px] rounded-[32px] bg-neutral-900 border-2 border-white/20 dark:border-white/10 overflow-hidden shadow-2xl z-30 hover:z-[60] transform translate-x-0 translate-y-0 transition-all duration-500 hover:scale-110 hover:-translate-y-12 hover:shadow-[#3498db]/40 group">
                        <img
                            src={profile}
                            alt="Amir Shahzad"
                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center">
                            <p className="text-[#3498db] font-black text-xs italic tracking-wider uppercase leading-none mb-1">Amir Shahzad</p>
                            <p className="text-white text-[10px] font-bold uppercase tracking-tight opacity-80">Frontend Developer</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
