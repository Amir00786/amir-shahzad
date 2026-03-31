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
import { Toaster } from './components/ui/toaster'
import { SplashScreen } from './components/SplashScreen'
import { useEffect, useState } from 'react'
import AOS from 'aos'

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
      <div className='bg-zinc-300 dark:bg-neutral-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300'>
        <Header />
        
        <div className='mx-auto max-w-[1440px]'>
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
