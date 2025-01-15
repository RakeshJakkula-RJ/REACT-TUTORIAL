import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import About from './Components/About'
import Project from './Components/Project'


const App = () => {
  return (
       <div className='relative'>
  
         <Navbar />
          <Hero />
          <Skills />
         <About />
         <Project />
          
       </div>
  )
}

export default App