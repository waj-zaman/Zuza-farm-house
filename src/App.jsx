import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AmenitiesPage from "./Pages/AmentiesPage";
import InformationPage from "./Pages/InformationPage";
import { Phone, MessageCircle } from "lucide-react";
import whatsapp from './assets/icons/whatsapp.png'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/info" element={<InformationPage />} />
      </Routes>

      {/* ✅ Floating Buttons (Mobile Only) */}
      <div className="fixed bottom-15 right-5 z-50 flex flex-col gap-3 md:hidden">
        {/* 📞 Call Button */}
        <a
          href="tel:+917386868001" // <-- replace with your number
          className="
            flex items-center justify-center
            w-14 h-14 rounded-full shadow-lg
            bg-orange-600 text-white
            hover:bg-orange-700 transition-all duration-300
          "
        >
          <Phone size={26} />
        </a>

        {/* 💬 WhatsApp Button */}
        <a
          href="https://wa.me/917386868001" // <-- replace with your number (no '+' here)
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            w-14 h-14 rounded-full shadow-lg
            bg-white transition-all duration-300
          "
        >
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </>
  );
}

export default App;
