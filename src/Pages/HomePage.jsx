import React from 'react'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Achievements from '../sections/Achivements'
import Footer from '../Components/Footer'
import Amenities from '../sections/Amenitites'
import Reviews from '../sections/Reviews'
import WhyUs from '../sections/WhyUs'
import Album from '../sections/Album'
import Contact from '../sections/Contact'


import bgImage from '../assets/farmPics/_GGN6121.avif'


function HomePage() {
  return (
    <div className='flex flex-col mx-auto bg-white'>
      <div>
        <Namebar />
        <Navbar />
        <Hero  bgImage={bgImage} title="" subtitle=""/>
        <About />
        <Achievements />
        <Amenities />
        <Reviews />
        <WhyUs />
        <Album />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
