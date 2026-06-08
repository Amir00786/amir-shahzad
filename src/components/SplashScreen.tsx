import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

    // Hide splash after progress finishes
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

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14
      }
    }
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 220,
        damping: 10,
        delay: 0.7
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.9
      }
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
      }`}
    >
      {/* Background Pulsating Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] -translate-x-12 -translate-y-12"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] translate-x-12 translate-y-12"
      />

      <div className="relative flex flex-col items-center gap-10">
        
        {/* Animated Initials Logo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative group flex items-baseline select-none"
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full"></div>
          <motion.span
            variants={letterVariants}
            className="text-7xl md:text-8xl font-black text-white italic tracking-tighter relative z-10"
          >
            A
          </motion.span>
          <motion.span
            variants={letterVariants}
            className="text-7xl md:text-8xl font-black text-white italic tracking-tighter relative z-10"
          >
            S
          </motion.span>
          <motion.span
            variants={dotVariants}
            className="text-7xl md:text-8xl font-black bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent italic tracking-tighter relative z-10"
          >
            .
          </motion.span>
        </motion.div>

        {/* Loading Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 w-64 z-10"
        >
          <div className="flex justify-between w-full mb-1">
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] italic">Loading</span>
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent text-[10px] font-black italic">
              {progress}%
            </span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-teal-500 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.4em] font-semibold mt-2 animate-pulse">
            Crafting Experience
          </p>
        </motion.div>
      </div>
    </div>
  )
}