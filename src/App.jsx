
import './App.css'
import About from './Component/About'
import Experience from './Component/Experience'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Projects from './Component/Projects'

function App() {


  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
   <Navbar/>
   <Home/>
   <About/>
   <Experience/>
   <Projects/>
   <Footer/>
    </div>
  )
}

export default App
