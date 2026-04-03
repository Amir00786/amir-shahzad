
export const Footer = () => {
    
    return (
        <footer className="py-8 sm:py-10 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-600">
                    <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
                    <div className="flex items-center gap-2 group cursor-default">
                        <span>Designed by</span>
                        <span className="text-gray-400 group-hover:text-orange-500 transition-colors">@Amir Shahzad</span>
                    </div>
                    <p>Senior Frontend Developer</p>
                </div>
            </div>
        </footer>
    );
};