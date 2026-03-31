import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress Bar Animation
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100))
    }, 25)

    // Hide splash after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete()
      }, 600)
    }, 3200)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute w-64 h-64 bg-orange-500/10 blur-[100px] animate-pulse"></div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Logo / Initials */}
        <div className="relative group">
          <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <h1 className="text-7xl md:text-8xl font-black text-white italic tracking-tighter relative z-10">
            AS<span className="text-orange-500">.</span>
          </h1>
        </div>

        {/* Loading Content */}
        <div className="flex flex-col items-center gap-4 w-64">
          <div className="flex justify-between w-full mb-1">
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] italic">Loading</span>
            <span className="text-orange-500 text-[10px] font-black italic">{progress}%</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(249,115,22,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-bold mt-2 animate-pulse">
            Crafting Experience
          </p>
        </div>
      </div>
    </div>
  )
}