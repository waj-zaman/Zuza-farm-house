import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4F1A1A] text-[#FFF8E8] px-4 sm:px-6 md:px-8 py-8">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Logo & Description */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold pb-2"><Link to='/' onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>Farm House Logo</Link></h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, explicabo at. Neque, at eum impedit reiciendis ad quos ipsa.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-around flex-1 gap-8 text-center lg:text-left">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Amenities</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Services</h2>
            <ul className="space-y-1">
              <li>12-Hour Rental</li>
              <li>24-Hour Rental</li>
              <li>Multi Day</li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Other Links</h2>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms And Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-[#FFF8E8]/50 pt-4 text-sm sm:text-base">
        <p>© 2025 Farm House Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
