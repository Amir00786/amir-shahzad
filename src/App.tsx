import './index.css'
import { About } from './pages/about'
import { Banner } from './pages/banner'
import { Contact } from './pages/contact'
import { Footer } from './pages/footer'
import { Header } from './pages/header'
import { Projects } from './pages/projects'
import { Services } from './pages/services'
// import { Skills } from './pages/skills'
import { WhatClientSay } from './pages/what-client-say'
import { FindMeOn } from './pages/find-me-on'
import { Toaster } from './components/ui/toaster'
import { SplashScreen } from './components/SplashScreen'
import { WaterBackground } from './components/WaterBackground'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once per element
    })
  }, [])

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <div className='relative overflow-hidden'>
      <WaterBackground />
      <div className='text-foreground min-h-screen transition-colors duration-300 relative z-10'>
        <Header />
        <div>
          <section id="home">
            <Banner />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section>
            <Projects />
          </section>
          {/* <section id="skills">
          <Skills />
        </section> */}
          <section id="testimonials">
            <WhatClientSay />
          </section>
          <FindMeOn />
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
        <Toaster />
      </div>
    </div>
  )
}

export default App
