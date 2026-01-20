import { useEffect, useState } from 'react'
import './SplashScreen.css'

interface SplashScreenProps {
  onComplete: () => void
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show splash for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Wait for fade out animation to complete
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-9999 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="spinner scale-150">
        <div className="spinnerin"></div>
      </div>
    </div>
  )
}

