import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Education from './Education/Education'

const Home = () => {
  return (
    <div className='overflow-hidden h-[20000px]'>
        <Hero/>
        <About/>
        <Education/>
    </div>
  )
}

export default Home