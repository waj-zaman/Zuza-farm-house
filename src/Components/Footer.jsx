import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // helper for navigation + scroll
  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      // already on home → just scroll smoothly
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80, // adjust if navbar overlaps
      });
    } else {
      // go to home first, then scroll
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      }, 400); // small delay for page load
    }
  };

  return (
    <footer className="bg-[#4F1A1A] text-[#FFF8E8] px-4 sm:px-6 md:px-8 py-8">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Logo & Description */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold pb-2">
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Farm House Logo
            </Link>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
            explicabo at. Neque, at eum impedit reiciendis ad quos ipsa.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-around flex-1 gap-8 text-center lg:text-left">
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
              <li><Link to="/info" state={{ scrollTo: "12hour" }}>12-Hour Rental</Link></li>
              <li><Link to="/info" state={{ scrollTo: "24hour" }}>24-Hour Rental</Link></li>
              <li><Link to="/info" state={{ scrollTo: "multiday" }}>Multi-Day Rental</Link></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="font-semibold text-lg pb-2">Other Links</h2>
            <ul className="space-y-1">
              <li><Link to="/info" state={{ scrollTo: "privacy" }}>Privacy Policy</Link></li>
              <li><Link to="/info" state={{ scrollTo: "terms" }}>Terms And Conditions</Link></li>
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
