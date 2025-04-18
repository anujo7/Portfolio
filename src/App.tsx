import { useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ParticlesBackground from './components/ParticlesBackground';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';



function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <ParticlesBackground />
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

     <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
     </main>
      </div>
  )
}

export default App
