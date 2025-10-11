import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#FFF8E8] text-[#4F1A1A] py-4 shadow-sm relative">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center max-w-[1200px] mx-auto px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Farm House Logo</h1>

        {/* Links */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li className="hover:text-green-700 cursor-pointer transition">Home</li>
          <li className="hover:text-green-700 cursor-pointer transition">About</li>
          <li className="hover:text-green-700 cursor-pointer transition">Amenities</li>
          <li className="hover:text-green-700 cursor-pointer transition">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-[#4F1A1A] text-[#FFF8E8] px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Visit Us
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center px-6 lg:hidden">
        {/* Logo */}
        <h1 className="text-xl font-bold">Client Logo</h1>

        {/* Burger Icon */}
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none text-[#4F1A1A] z-50"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (Slide-in) */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-[#FFF8E8] text-[#4F1A1A] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
            <a href="#home" onClick={toggleMenu} className="hover:text-green-700">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-green-700">About</a>
            <a href="#amenities" onClick={toggleMenu} className="hover:text-green-700">Amenities</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-green-700">Contact</a>

            <button
              onClick={toggleMenu}
              className="mt-4 bg-[#4F1A1A] text-[#FFF8E8] px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Visit Us
            </button>
          </div>
        </div>
      </div>

      {/* Optional Background Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
