import './index.css'
import { About } from './pages/about'
import { Banner } from './pages/banner'
import { Header } from './pages/header'
import { Projects } from './pages/projects'
import { Services } from './pages/services'
import { Skills } from './pages/skills'

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
      </div>
    </>
  )
}

export default App
