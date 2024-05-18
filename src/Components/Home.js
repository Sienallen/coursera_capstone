import React from 'react'
import Hero from './Home/Hero'
import Highlights from './Home/Highlights'
import Testimonials from './Home/Testimonials'
import About from './Home/Chicago'
import './Nav.css'


const Home = () => {
  return (
    <>
      <main>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
      </main>
    </>
  )
}

export default Home
