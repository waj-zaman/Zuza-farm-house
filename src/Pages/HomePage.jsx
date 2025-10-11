import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Footer from '../Components/Footer'
import Amenities from '../sections/Amenitites'
import Contact from '../sections/Contact'
import bgImage from '../assets/_GGn6041.avif'

function HomePage() {
  return (
    <div className='flex flex-col mx-auto'>
      <div>
        <Navbar />
        <Hero  bgImage={bgImage} title="Farm House Name" subtitle="um is simply dummy text of the printing"/>
        <About />
        <Amenities />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
