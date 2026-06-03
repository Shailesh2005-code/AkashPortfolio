import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"


function App() {
  return (

    <div className="relative overflow-x-hidden bg-[#dce8f6] min-h-screen">

      <Navbar />

      <Hero />

      <Skills />

      <Projects />

      <Contact />

    </div>

  )
}

export default App