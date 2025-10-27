import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import images from "../assets/farmPics/index.js";

const Album = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.5; // Adjust speed (lower = slower)

    const scroll = () => {
      scrollAmount += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    let animationFrame = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrame);
    const handleMouseLeave = () => (animationFrame = requestAnimationFrame(scroll));

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const doubledImages = [...images, ...images];

  return (
    <section className="py-10 bg-[#ABEEFF]">
      <div className="text-center mb-12">
          <h3 className="subheading tracking-wide">
              Our Gallery
            </h3>
            <h1 className="heading font-semibold text-3xl lg:text-4xl">
              Memories from Zuza
            </h1>
        </div>

      <div
        ref={scrollRef}
        className="overflow-x-hidden whitespace-nowrap flex gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 py-5"
      >
        {doubledImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Farmhouse Image ${i}`}
            loading="lazy"
            className="
              h-40 sm:h-52 md:h-56 
              w-auto rounded-xl 
              shadow-[4px_4px_8px_rgba(0,0,0,0.2)] 
              object-cover transition-transform duration-300 hover:scale-105
              flex-shrink-0
            "
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center px-4 sm:px-0">
        <Link
          to="/gallery"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="body font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#320A6B] hover:text-white transition flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg text-[#320A6B]"
        >
          Have a look at our entire Gallery
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Album;
