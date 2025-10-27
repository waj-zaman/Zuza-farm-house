import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  return (
    <div id="amenities" className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">

        <p className="subheading mt-2 text-base sm:text-lg">
          Amenities
        </p>
        <h1 className="heading text-2xl sm:text-3xl md:text-4xl font-semibold font-[aclonica] text-[#320A6B]">
          What We Offer 
        </h1>
        
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {features.map(({ id, title, description, image }) => (
          <div
            key={id}
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
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="my-10 flex justify-center">
        <Link
          to="/amenities"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="body font-semibold px-6 py-3 rounded-lg hover:bg-[#320A6B] hover:text-white transition flex items-center gap-2 md:text-xl  text-[#320A6B]"
        >
          Check Out Everything we offer 
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
