import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import farmhouse from "../assets/icons/rural.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import instagramIcon from "../assets/icons/instagram.png";
import facebookIcon from "../assets/icons/facebook.png";
import youtube from "../assets/icons/youtube.png"

import logo from '../assets/Client_Drive/IMG_20230201_114051 - Copy.jpg'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      }, 400);
    }
  };

  return (
    <footer className="bg-[#01003B] text-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        {/* Logo & Description */}
        <div className="lg:w-1/3 text-center lg:text-left flex flex-col justify-center gap-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <img className="w-56 h-24" src={logo} alt="Farmhouse" />
            {/* <h1
              style={{ fontFamily: "'Asul', sans-serif" }}
              className="text-xl sm:text-2xl font-medium"
            >
              ZUZA FARM HOUSE
            </h1> */}
          </Link>
          <p className="text-xs sm:text-sm md:text-base font-light leading-5">
            Find your calm in the gentle embrace of nature — where comfort,
            care, and countryside charm come together effortlessly.
          </p>

          {/* Social Media Buttons */}
          <div className="flex justify-center lg:justify-start gap-10 mt-4">
            <a
              href="https://wa.me/917386868001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/zuzafarmhouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/zuzafarmhouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://youtube.com/@zuzafarmhouse?si=YkIgzgiYeXEb9Aqy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                alt="Youtube"
                className="w-10 h-10 hover:scale-110 transition"
              />
            </a>
            
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-20 flex-1 justify-center lg:justify-end text-center lg:text-left lg:mt-10">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <Link
                  className="hover:text-green-300"
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Home
                </Link>
              </li>
              <li
                className="cursor-pointer hover:text-green-300"
                onClick={() => handleNavigation("about")}
              >
                About
              </li>
              <li
                className="cursor-pointer hover:text-green-300"
                onClick={() => handleNavigation("amenities")}
              >
                Amenities
              </li>
              <li
                className="cursor-pointer hover:text-green-300"
                onClick={() => handleNavigation("contact")}
              >
                Contact Us
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Services</h2>
            <ul className="space-y-1">
              <li>
                <Link to="/info" state={{ scrollTo: "12hour" }}>
                  12-Hour Rental
                </Link>
              </li>
              <li>
                <Link to="/info" state={{ scrollTo: "24hour" }}>
                  24-Hour Rental
                </Link>
              </li>
              <li>
                <Link to="/info" state={{ scrollTo: "multiday" }}>
                  Multi-Day Rental
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Other Links</h2>
            <ul className="space-y-1">
              <li>
                <Link to="/info" state={{ scrollTo: "privacy" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/info" state={{ scrollTo: "terms" }}>
                  Terms And Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-[#FFF8E8]/50 pt-4 text-xs sm:text-sm md:text-base space-y-1">
        <p className="text-gray-400">
          © 2025 Zuza Farm House. All Rights Reserved.
        </p>
        <p className="text-gray-400">
          Designed and Developed by{" "}
          <strong className="text-[#00CCFF]">Wajahath Zaman</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
