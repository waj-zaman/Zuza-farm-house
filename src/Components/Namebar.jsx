import React from 'react'

import whatsapp from '../assets/icons/whatsapp.png'
import farmhouse from '../assets/icons/rural.png'

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
        <div className="flex items-center gap-2 text-[#01003B]">
          <img className="w-8 h-8" src={whatsapp} alt="WhatsApp" />
          <h1>+91 72868 68001</h1>
        </div>

        {/* Middle: Farmhouse Name */}
        <div className="flex items-center gap-2 text-[#01003B]">
          <img className="w-8 h-8" src={farmhouse} alt="Farmhouse" />
          <h1>ZUZA FARM HOUSE</h1>
        </div>

        {/* Right: Button */}
        <div>
          <button className="bg-[#FF7B00] text-white px-3 py-2 rounded-lg hover:bg-[#e96d00] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Namebar
