import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import ParticleBackground from './Hero/ParticleBackground'
import Projects from './Projects/Projects'

const Home = () => {
  return (
    <div className='overflow-hidden h-[20000px]'>
        <ParticleBackground  />
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default Home