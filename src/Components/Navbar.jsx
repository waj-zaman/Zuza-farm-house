import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import farmhouse from '../assets/icons/rural.png';

// Smooth scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Already on homepage → just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      navigate("/");
    }
  };

  // Define links dynamically
  const isHome = location.pathname === "/";
  const desktopLinks = isHome
    ? [
      { name: "Home", type: "route", path: "/" },
      { name: "About", type: "scroll", path: "about" },
      { name: "Amenities", type: "scroll", path: "amenities" },
      { name: "Gallery", type: "scroll", path: "/gallery" },
      { name: "Contact", type: "scroll", path: "contact" }, ,
      { name: "FAQ", type: "scroll", path: "/info" }
    ]
    : [
      { name: "Home", type: "route", path: "/" },
      { name: "Contact", type: "scroll", path: "contact" },
    ];

  return (
    <>
      <ScrollToTop />

      <nav
        className={`bg-[#0CC8F7] text-[#01003B] py-4 shadow-sm fixed w-full z-40 transition-transform duration-300
    ${showNavbar ? "lg:translate-y-[64px] translate-y-0" : "-translate-y-full"}`
        }
      >


        {/* Desktop Navbar */}
        <div
          className="hidden lg:flex justify-center items-center max-w-[1200px] mx-auto px-6">
          <ul className="flex space-x-8 text-xl font-medium font-[poppins]" style={{ fontFamily: "'Asul', sans-serif" }}>
            {desktopLinks.map((link) =>
              link.name === "Home" ? (
                <li key={link.name}>
                  <button
                    onClick={handleHomeClick}
                    className="hover:text-[#fbeaff] transition"
                  >
                    Home
                  </button>
                </li>
              ) : link.type === "route" ? (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-[#fbeaff] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li key={link.name}>
                  <ScrollLink
                    to={link.path}
                    smooth
                    duration={500}
                    className="hover:text-[#fbeaff] cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center px-6 lg:hidden">
          <button>
            <div className="flex items-center gap-1 text-[#01003B]">
                      <img className="w-6 h-6" src={farmhouse} alt="Farmhouse" />
                      <h1 className="my-auto" style={{fontFamily: "'Asul', sans-serif"}}>ZUZA FARM HOUSE</h1>
                    </div>
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none text-[#320A6B] z-50"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
      style={{fontFamily: "'Asul', sans-serif"}}
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#C3F7F9] text-[#320A6B] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-6 text-3xl text-[#34656D] focus:outline-none"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          {desktopLinks.map((link) =>
            link.name === "Home" ? (
              <button
                key={link.name}
                onClick={() => {
                  handleHomeClick();
                  toggleMenu();
                }}
                className="hover:text-green-700"
              >
                Home
              </button>
            ) : link.type === "route" ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="hover:text-green-700"
              >
                {link.name}
              </Link>
            ) : (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth
                duration={500}
                onClick={toggleMenu}
                className="hover:text-green-700 cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            )
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
