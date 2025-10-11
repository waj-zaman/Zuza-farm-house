import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../sections/Hero'
import bgImage from '../assets/_GGN6196.avif'
import Footer from '../Components/Footer'
import Contact from '../sections/Contact'

const InformationPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // Wait for hero + navbar to render
        setTimeout(() => {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 100; // default 100px
          const y = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 10; // -10px small spacing
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 400);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero bgImage={bgImage} title="Information" />

      <div className='flex justify-center px-6 py-16'>
        <div className='max-w-[1200px] space-y-20'>

          {/* 12-Hour Rental */}
          <section id='12hour'>
            <h1 className='text-3xl font-semibold mb-4'>12-Hour Rental</h1>
            <p className='text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit doloremque corporis,
              consequuntur beatae rem provident delectus sint accusantium ipsam officia magni.
            </p>
          </section>

          {/* 24-Hour Rental */}
          <section id='24hour'>
            <h1 className='text-3xl font-semibold mb-4'>24-Hour Rental</h1>
            <p className='text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit porro doloribus perspiciatis facilis!
            </p>
          </section>

          {/* Multi-Day Rental */}
          <section id='multiday'>
            <h1 className='text-3xl font-semibold mb-4'>Multi-Day Rental</h1>
            <p className='text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia unde ipsum tempora ullam ex nihil.
            </p>
          </section>

          {/* Privacy Policy */}
          <section id='privacy'>
            <h1 className='text-3xl font-semibold mb-4'>Privacy Policy</h1>
            <p className='text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore reprehenderit enim!
            </p>
          </section>

          {/* Terms & Conditions */}
          <section id='terms'>
            <h1 className='text-3xl font-semibold mb-4'>Terms and Conditions</h1>
            <p className='text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit doloremque corporis.
            </p>
          </section>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default InformationPage
