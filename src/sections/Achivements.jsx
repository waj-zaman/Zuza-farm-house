import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import guests from "../assets/icons/family-dinner (1).png";
import land from "../assets/icons/spatial.png";
import events from "../assets/icons/confetti (1).png";
import calender from "../assets/icons/calendar (1).png";
import star from "../assets/icons/favourite.png";

const achievements = [
  { icon: guests, title: "Total Guests Hosted", value: "2000+" },
  { icon: land, title: "Land Area (Acres)", value: "1.5+" },
  { icon: events, title: "Events and Celebrations", value: "120+" },
  { icon: calender, title: "Serving Happily Since", value: "2023" },
  { icon: star, title: "Avg Customer Rating (Maps)", value: "4.6" },
];

const Achievements = () => {
  return (
    <section className="bg-[#ABEEFF] py-8 lg:py-24 px-4 sm:px-6">
      {/* Heading */}
      <motion.div
        className="max-w-[1400px] mx-auto text-center mb-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="subheading text-gray-700 text-sm sm:text-base lg:text-lg">
          Statistics
        </p>
        <h2 className="heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#01003B]">
          Our Achievements Over the Years
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] mx-auto px-4">
        {achievements.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { amount: 0.3 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="bg-white justify-between shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 80,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mb-4"
                animate={{
                  scale: isInView ? 1 : 0.8,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              />
              <h3 className="text-md sm:text-lg font-semibold text-[#01003B] mb-2">
                {item.title}
              </h3>
              <p
                className="text-3xl sm:text-5xl text-[#320A6B]"
                style={{ fontFamily: "'BBH Sans Bogle', sans-serif" }}
              >
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
