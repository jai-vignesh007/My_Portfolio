import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import ParticleBackground from './Hero/ParticleBackground'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Resume from './Resume/Resume'

const Home = () => {
  return (
    <div className='overflow-hidden '>
        <ParticleBackground  />
        <Hero/>
        <About/>
        <Skills/>
        <Education/>
        <Experience/>
        <Projects/>
        <Resume/>
        <Contact/>
    </div>
  )
}

export default Home