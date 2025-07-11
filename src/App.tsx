import './index.css'
import { About } from './pages/about'
import { Banner } from './pages/banner'
import { Header } from './pages/header'
import { Projects } from './pages/projects'

function App() {

  return (
    <>
      <div className='mx-auto px-4 max-w-[1440px]'>
        <Header />
        {/* <Banner /> */}
        <About />
        {/* <Projects /> */}
      </div>
    </>
  )
}

export default App
