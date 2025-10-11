import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Footer from './Components/Footer'
import Contact from './sections/Contact'

function App() {
  return (
    <div className='flex flex-col mx-auto'>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
