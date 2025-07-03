import './index.css'
import { Banner } from './pages/banner'
import { Header } from './pages/header'

function App() {

  return (
    <>
      <div className='mx-auto px-4 max-w-[1440px]'>
        <Header />
        <Banner />
      </div>
    </>
  )
}

export default App
