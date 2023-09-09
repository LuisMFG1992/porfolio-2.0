import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="p-2 xs:px-10 md:px-20">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App
