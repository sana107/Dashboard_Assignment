import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Marque from './components/Marque'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <>
        <Navbar/>
        {/* <h1>hello</h1> */}
        <main>
          <HeroSection/>
          <About/>
          <Marque/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Education/>
          <ContactForm/>
        </main>
        
    </>
  )
}

export default App
