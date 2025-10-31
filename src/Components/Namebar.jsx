import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import whatsapp from '../assets/icons/whatsapp.png'
import farmhouse from '../assets/icons/rural.png'
import logo from '../assets/Client_Drive/IMG_20230201_114051.jpg'

const Namebar = () => {
  return (
    <section
      className="hidden lg:flex px-4 py-3 fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div
        style={{ fontFamily: "'Asul', sans-serif" }}
        className="flex justify-between items-center text-xl max-w-[1200px] mx-auto w-full"
      >
        {/* Left: WhatsApp */}
        <a
          href="https://wa.me/917386868001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 text-[#01003B] cursor-pointer hover:opacity-80 transition">
            <img className="w-8 h-8" src={whatsapp} alt="WhatsApp" />
            <h1>+91 73868 68001</h1>
          </div>
        </a>


        {/* Middle: Farmhouse Name */}
        <Link to="/">
          <div className="flex items-center gap-2 text-[#01003B]">
            <img className="w-44 h-10 rounded-md" src={logo} alt="Farmhouse" />
            {/* <h1>ZUZA FARM HOUSE</h1> */}
          </div>
        </Link>

        {/* Right: Button */}
        <div>
          <ScrollLink
            to="contact"      // ID of the section you want to scroll to
            smooth={true}     // smooth scrolling
            duration={500}    // scroll duration in ms
          >
            <button className="bg-[#FF7B00] text-white px-3 py-2 rounded-lg hover:bg-[#e96d00] transition">
              Contact Us
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

export default Namebar
