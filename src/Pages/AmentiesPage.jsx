import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../sections/Hero'
import Contact from '../sections/Contact'
import Footer from '../Components/Footer'

import { Link } from 'react-router-dom'

import bgImage from '../assets/_GGN6121.avif'

const AmentiesPage = () => {
  return (
    <>
    <Navbar />
    <Hero bgImage={bgImage} title={"Amenities"}/>
    <div>
      <h1 className='text-2xl text-center py-10'>
        Add All the layout and contents of the amenities here in detail.
      </h1>
    </div>
    <Contact />
    <Footer/>
    </>

  )
}

export default AmentiesPage