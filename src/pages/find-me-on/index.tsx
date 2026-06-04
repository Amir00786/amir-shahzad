import profile from "../../assets/profile.jpg";

export const FindMeOn = () => {
    const cards = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/",
            gradient: "from-[#2c3e50] to-[#34495e]",
            shadow: "hover:shadow-[#34495e]/40",
            textColor: "text-white",
            rotation: "-rotate-12 lg:-rotate-[22deg]",
            hoverRotation: "hover:-rotate-3 lg:hover:-rotate-22",
            offsetClass: "-translate-x-[90px] translate-y-6 sm:-translate-x-[300px] lg:-translate-x-[420px] lg:translate-y-12",
            hoverOffsetClass: "hover:-translate-y-16 hover:-translate-x-[90px] sm:hover:-translate-x-[300px] lg:hover:-translate-x-[420px]",
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
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/",
            gradient: "from-[#8e44ad] to-[#9b59b6]",
            shadow: "hover:shadow-[#9b59b6]/40",
            textColor: "text-white",
            rotation: "-rotate-6 lg:-rotate-[14deg]",
            hoverRotation: "hover:-rotate-2 lg:hover:-rotate-[4deg]",
            offsetClass: "-translate-x-[60px] translate-y-3 sm:-translate-x-[200px] lg:-translate-x-[280px] lg:translate-y-6",
            hoverOffsetClass: "hover:-translate-y-16 hover:-translate-x-[60px] sm:hover:-translate-x-[200px] lg:hover:-translate-x-[280px]",
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
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/amir-shahzad-222776249/",
            gradient: "from-[#2980b9] to-[#3498db]",
            shadow: "hover:shadow-[#3498db]/40",
            textColor: "text-white",
            rotation: "-rotate-3 lg:-rotate-[6deg]",
            hoverRotation: "hover:-rotate-1 lg:hover:-rotate-[2deg]",
            offsetClass: "-translate-x-[30px] translate-y-1 sm:-translate-x-[100px] lg:-translate-x-[140px] lg:translate-y-2",
            hoverOffsetClass: "hover:-translate-y-16 hover:-translate-x-[30px] sm:hover:-translate-x-[100px] lg:hover:-translate-x-[140px]",
            zIndex: "z-30",
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
            name: "Upwork",
            url: "https://www.upwork.com/freelancers/~01ec5d9c54cf0049ab",
            gradient: "from-[#27ae60] to-[#2ecc71]",
            shadow: "hover:shadow-[#2ecc71]/40",
            textColor: "text-white",
            rotation: "rotate-3 lg:rotate-[6deg]",
            hoverRotation: "hover:rotate-1 lg:hover:rotate-[2deg]",
            offsetClass: "translate-x-[30px] translate-y-1 sm:translate-x-[100px] lg:translate-x-[140px] lg:translate-y-2",
            hoverOffsetClass: "hover:-translate-y-16 hover:translate-x-[30px] sm:hover:translate-x-[100px] lg:hover:translate-x-[140px]",
            zIndex: "z-30",
            previewUrl: "upwork.com/freelancers/amirshahzad",
            icon: (
                <svg
                    viewBox="0 0 32 32"
                    className="w-10 h-10 lg:w-16 lg:h-16 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                        <span className="text-[#2ecc71] font-black text-xs">upwork</span>
                        <span className="text-[8px] bg-[#2ecc71]/10 text-[#2ecc71] px-1 py-0.5 rounded font-bold">Top Rated</span>
                    </div>
                    <div className="my-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-tight">React & Next.js Engineer</p>
                        <p className="text-[8px] text-slate-500 dark:text-slate-400 mt-0.5 leading-none">100% Job Success Score</p>
                    </div>
                    <button className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white text-[8px] font-bold py-1.5 rounded-full transition-colors mt-auto">
                        Hire Amir
                    </button>
                </div>
            )
        },
        {
            name: "Fiverr",
            url: "https://www.fiverr.com/amirshahzad993/be-your-front-end-developer-and-designer?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=ac27644f4a6f42169957037c65a711cb&context=recommendation&pckg_id=1&pos=3&context_alg=recently_viewed&seller_online=true&imp_id=c921610a-8f40-411e-a149-d1c73bf79222",
            gradient: "from-[#16a085] to-[#1abc9c]",
            shadow: "hover:shadow-[#1abc9c]/40",
            textColor: "text-white",
            rotation: "rotate-6 lg:rotate-[14deg]",
            hoverRotation: "hover:rotate-2 lg:hover:rotate-[4deg]",
            offsetClass: "translate-x-[60px] translate-y-3 sm:translate-x-[200px] lg:translate-x-[280px] lg:translate-y-6",
            hoverOffsetClass: "hover:-translate-y-16 hover:translate-x-[60px] sm:hover:translate-x-[200px] lg:hover:translate-x-[280px]",
            zIndex: "z-20",
            previewUrl: "www.fiverr.com/amirshahzad993",
            icon: (
                <svg
                    viewBox="0 0 192 192"
                    className="w-10 h-10 lg:w-16 lg:h-16 stroke-white fill-none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z"
                        strokeLinejoin="round"
                        strokeWidth="12"
                    />
                </svg>
            ),
            previewContent: (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                        <span className="text-[#16a085] font-bold text-xs">fiverr.</span>
                        <span className="text-[8px] bg-[#16a085]/10 text-[#16a085] px-1 py-0.5 rounded font-bold">PRO</span>
                    </div>
                    <div className="my-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-[10px] leading-tight">Front End Developer & Designer</p>
                        <p className="text-[8px] text-slate-400 mt-0.5 leading-tight">Clean code & optimized layouts.</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-1.5 mt-auto">
                        <div className="flex items-center gap-0.5 text-[8px]">
                            <span className="text-yellow-500">★</span>
                            <span className="font-bold text-slate-800 dark:text-slate-200">5.0</span>
                            <span className="text-slate-400">(120+)</span>
                        </div>
                        <span className="text-slate-500 text-[8px]">Starting at $50</span>
                    </div>
                </div>
            )
        },
        {
            name: "GitHub",
            url: "https://github.com/Amir00786",
            gradient: "from-[#2c3e50] to-[#1a252f]",
            shadow: "hover:shadow-[#34495e]/40",
            textColor: "text-white",
            rotation: "rotate-12 lg:rotate-[22deg]",
            hoverRotation: "hover:rotate-3 lg:hover:rotate-[6deg]",
            offsetClass: "translate-x-[90px] translate-y-6 sm:translate-x-[300px] lg:translate-x-[420px] lg:translate-y-12",
            hoverOffsetClass: "hover:-translate-y-16 hover:translate-x-[90px] sm:hover:translate-x-[300px] lg:hover:translate-x-[420px]",
            zIndex: "z-10",
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
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center border-t border-b border-slate-200/30 dark:border-zinc-800/40" id="findme-on">
            {/* Ambient Background Glows matching the image */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#9b59b6]/10 blur-[130px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3498db]/15 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#2ecc71]/10 blur-[130px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-[#34495e]/20 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-[#1abc9c]/15 blur-[130px] rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 flex flex-col items-center">

                {/* Section Title */}
                <div className="text-center mb-20 sm:mb-28" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-orange-50/90 drop-shadow-sm select-none">
                        FIND ME ON
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#9b59b6] via-[#3498db] to-[#1abc9c] mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Fan Deck Container */}
                <div className="relative w-full max-w-[1200px] h-[380px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-6 select-none" data-aos="zoom-in">

                    {/* Social Cards (Left and Right Wings) */}
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute w-[110px] h-[160px] sm:w-[185px] sm:h-[270px] lg:w-[240px] lg:h-[350px] transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) transform origin-bottom hover:scale-110 hover:-translate-y-16 ${card.zIndex} hover:z-[60] ${card.rotation} ${card.hoverRotation} ${card.offsetClass} ${card.hoverOffsetClass} group`}
                        >
                            {/* FLOATING MOCK BROWSER PREVIEW */}
                            <div className="absolute -top-[115px] -left-4 sm:-top-[155px] sm:-left-8 w-[150px] h-[110px] sm:w-[220px] sm:h-[150px] bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden scale-75 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-bottom-right z-50 flex flex-col -rotate-[6deg] group-hover:rotate-0">
                                {/* Browser URL Header */}
                                <div className="flex items-center justify-between px-2 py-1.5 sm:px-3 sm:py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f56]"></span>
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffbd2e]"></span>
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#27c93f]"></span>
                                    </div>
                                    <div className="flex-1 max-w-[80px] sm:max-w-[130px] mx-auto bg-slate-200 dark:bg-slate-800 rounded py-0.5 px-2 text-[6px] sm:text-[8px] text-slate-500 dark:text-slate-400 truncate text-center font-mono select-none">
                                        {card.previewUrl}
                                    </div>
                                    <div className="w-6 sm:w-8"></div>
                                </div>
                                {/* Page Content */}
                                <div className="flex-1 p-2 sm:p-3 flex flex-col text-slate-700 dark:text-slate-300 select-none">
                                    {card.previewContent}
                                </div>
                            </div>

                            {/* Actual Card Anchor */}
                            <a
                                href={card.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full h-full rounded-2xl sm:rounded-[32px] p-4 sm:p-7 bg-gradient-to-b ${card.gradient} border border-white/10 flex flex-col justify-between items-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow`}
                            >
                                {/* Inner Border Mirror reflection outline */}
                                <div className="absolute inset-0.5 sm:inset-1 rounded-[14px] sm:rounded-[26px] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors"></div>

                                {/* Card Content Top */}
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="p-3 bg-white/10 rounded-2xl sm:rounded-3xl group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                </div>

                                {/* Card Name Bottom */}
                                <div className="text-center mt-2">
                                    <span className={`text-xs sm:text-base lg:text-lg font-black uppercase tracking-widest ${card.textColor} opacity-90 group-hover:opacity-100 italic transition-opacity`}>
                                        {card.name}
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}

                    {/* Center Profile Card */}
                    <div
                        className="absolute w-[120px] h-[175px] sm:w-[200px] sm:h-[290px] lg:w-[260px] lg:h-[375px] rounded-2xl sm:rounded-[32px] bg-neutral-900 border-2 border-white/20 dark:border-white/10 overflow-hidden shadow-2xl z-30 hover:z-[60] transform translate-x-0 translate-y-0 transition-all duration-500 hover:scale-110 hover:-translate-y-12 hover:shadow-[#3498db]/40 group"
                    >
                        {/* Profile Image */}
                        <img
                            src={profile}
                            alt="Amir Shahzad"
                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />

                        {/* Glassmorphic Caption Card */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/60 backdrop-blur-md border border-white/10 p-2 sm:p-4 rounded-xl sm:rounded-2xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center">
                            <p className="text-[#3498db] font-black text-[10px] sm:text-xs italic tracking-wider uppercase leading-none mb-1">Amir Shahzad</p>
                            <p className="text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-tight opacity-80">Frontend Developer</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
