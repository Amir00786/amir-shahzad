import './index.css'
import { About } from './pages/about'
import { Banner } from './pages/banner'
import { Contact } from './pages/contact'
import { Footer } from './pages/footer'
import { Header } from './pages/header'
import { Projects } from './pages/projects'
import { Services } from './pages/services'
import { Skills } from './pages/skills'
import { WhatClientSay } from './pages/what-client-say'
import { useEffect } from 'react'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once per element
    })
  }, [])

  return (
    <>
      <Header />
      <div className='mx-auto px-4 max-w-[1440px]'>
        <section id="home">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="testimonials">
          <WhatClientSay />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
