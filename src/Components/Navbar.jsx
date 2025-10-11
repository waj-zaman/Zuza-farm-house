import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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

  // Define links dynamically based on current page
  const isHome = location.pathname === "/";
  const desktopLinks = isHome
    ? [
        { name: "Home", type: "route", path: "/" },
        { name: "About", type: "scroll", path: "about" },
        { name: "Amenities", type: "scroll", path: "amenities" },
        { name: "Contact", type: "scroll", path: "contact" },
      ]
    : [
        { name: "Home", type: "route", path: "/" },
        { name: "Contact", type: "scroll", path: "contact" },
      ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-[#FFF8E8] text-[#4F1A1A] py-4 shadow-sm fixed w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center max-w-[1200px] mx-auto px-6">
          <h1 className="text-2xl font-bold">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Farm House Logo
            </Link>
          </h1>

          <ul className="flex space-x-8 text-lg font-medium">
            {desktopLinks.map((link) =>
              link.type === "route" ? (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-green-700 transition"
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
                    className="hover:text-green-700 cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              )
            )}
          </ul>

          <button className="bg-[#4F1A1A] text-[#FFF8E8] px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Visit Us
          </button>
        </div>

        {/* Mobile Navbar Toggle */}
        <div className="flex justify-between items-center px-6 lg:hidden">
          <h1 className="text-xl font-bold">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Farm House Logo
            </Link>
          </h1>
          <button onClick={toggleMenu} className="text-2xl focus:outline-none text-[#4F1A1A] z-50">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (fixed independently) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#FFF8E8] text-[#4F1A1A] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          {desktopLinks.map((link) =>
            link.type === "route" ? (
              <Link key={link.name} to={link.path} onClick={toggleMenu}>
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
          <button
            onClick={toggleMenu}
            className="mt-4 bg-[#4F1A1A] text-[#FFF8E8] px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Visit Us
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
