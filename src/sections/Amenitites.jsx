import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import pool1 from "../assets/farmPics/_GGN6151.avif";
import villa1 from "../assets/farmPics/_GGN6041.avif";
import lawn1 from "../assets/farmPics/_GGN6036.avif";
import bbq1 from "../assets/farmPics/_GGN6131.avif";
import boxCricket from "../assets/farmPics/_GGN6096.avif";
import gazebo1 from "../assets/farmPics/_GGN6051.avif";

const features = [
  {
    id: 1,
    title: "Sparkling Swimming Pool",
    description:
      "Take a refreshing dip or lounge poolside and enjoy serene waters in a lush setting.",
    image: pool1,
  },
  {
    id: 2,
    title: "Spacious Villa",
    description:
      "Stay in our 3BHK villa offering comfort, privacy, and scenic views of the countryside.",
    image: villa1,
  },
  {
    id: 3,
    title: "Lush Green Lawn",
    description:
      "Perfect for gatherings, celebrations, or simply soaking in the natural beauty around you.",
    image: lawn1,
  },
  {
    id: 4,
    title: "Barbecue Zone",
    description:
      "Enjoy a thoughtfully designed barbecue area that makes outdoor cooking and entertaining simple and fun.",
    image: bbq1,
  },
  {
    id: 5,
    title: "Box Cricket",
    description:
      "A well-maintained box cricket area where guests can play, stay active, and enjoy outdoor recreation.",
    image: boxCricket,
  },
  {
    id: 6,
    title: "Shaded Gazebo Lounge",
    description:
      "A serene sit-out area for relaxation, conversation, or simply taking in the surroundings.",
    image: gazebo1,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // when section enters/leaves viewport
  });

  // Scroll-based transformations
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={sectionRef}
      id="amenities"
      className="max-w-[1200px] mx-auto px-4 py-12 overflow-hidden"
      style={{ opacity }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        style={{ y }}
      >
        <p className="subheading mt-2 text-base sm:text-lg">Amenities</p>
        <h1 className="heading text-2xl sm:text-3xl md:text-4xl font-semibold font-[aclonica] text-[#320A6B]">
          What We Offer
        </h1>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {features.map(({ id, title, description, image }, index) => {
          const cardRef = useRef(null);
          const { scrollYProgress: cardProgress } = useScroll({
            target: cardRef,
            offset: ["start end", "end start"],
          });

          // Each card moves independently as user scrolls
          const cardY = useTransform(
            cardProgress,
            [0, 1],
            ["10%", "-10%"]
          );
          const cardOpacity = useTransform(
            cardProgress,
            [0.1, 0.3, 0.8, 1],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={id}
              ref={cardRef}
              style={{ y: cardY, opacity: cardOpacity }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#ABEEFF] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-56 sm:h-64 object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="p-5 pl-10">
                <h2 className="heading text-2xl font-medium text-[#01003B] mb-2">
                  {title}
                </h2>
                <p className="body text-gray-600 text-md leading-5">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <motion.div
        className="my-10 flex justify-center"
        style={{ y, opacity }}
      >
        <Link
          to="/amenities"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="body font-semibold px-6 py-3 rounded-lg hover:bg-[#320A6B] hover:text-white transition flex items-center gap-2 md:text-xl text-[#320A6B]"
        >
          Check Out Everything We Offer
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
