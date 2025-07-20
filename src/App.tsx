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

function App() {

  return (
    <>
      <div className='mx-auto px-4 max-w-[1440px]'>
        <Header />
        <Banner />
        <About />
        <Projects />
        <Services />
        <Skills />
        <WhatClientSay />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
