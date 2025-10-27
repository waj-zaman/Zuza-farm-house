import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import family from "../assets/events/family-dinner.png";
import headquarters from "../assets/events/headquarter.png";
import surprise from "../assets/events/surprise.png";
import wedding from "../assets/events/wedding-decoration.png";
import centerImage from "../assets/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067.jpeg";

const WhyUs = () => {
  const sectionRef = useRef(null);

  // Added ~50% more delay in scroll activation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "end 0.05"], // starts later & stays active longer
  });

  // More pronounced but slower motion
  const leftY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const centerY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const centerScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          style={{ y: centerY }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <p className="subheading tracking-wide text-[#320A6B] mb-2">
            Zuza is suitable for all occasions.
          </p>
          <h1 className="heading text-3xl md:text-4xl font-medium text-[#320A6B]">
            Celebrate Life's Special Events At Zuza
          </h1>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Cards */}
          <motion.div
            className="flex flex-col justify-evenly gap-10 w-full lg:w-1/3"
            style={{ y: leftY }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-end lg:items-end">
              <img src={wedding} alt="wedding" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Weddings & Receptions
              </h1>
              <p className="body text-sm text-gray-700">
                Celebrate your love story amidst nature’s charm, with open lawns
                and elegant décor that make every moment unforgettable.
              </p>
            </div>

            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-end lg:items-end">
              <img src={surprise} alt="birthday" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Birthday Parties
              </h1>
              <p className="body text-sm text-gray-700">
                Make your special day vibrant and joyful with a perfect setting
                for fun, laughter, and celebration.
              </p>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            style={{ y: centerY, scale: centerScale }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <img
              src={centerImage}
              alt="Zuza farmhouse events"
              className="w-full sm:w-[500px] md:w-[600px] lg:w-[1400px] aspect-[3/3] rounded-2xl shadow-[8px_8px_10px_rgba(0,0,0,0.4)] object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="flex flex-col justify-evenly gap-10 w-full lg:w-1/3"
            style={{ y: rightY }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-start lg:items-start">
              <img src={family} alt="family" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Family Get-Togethers
              </h1>
              <p className="body text-sm text-gray-700">
                Reconnect with your loved ones in a peaceful, private setting
                where memories are made naturally.
              </p>
            </div>

            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-start lg:items-start">
              <img src={headquarters} alt="corporate" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Corporate Retreats & Team Outings
              </h1>
              <p className="body text-sm text-gray-700">
                Step out of the office and into serenity — perfect for refreshing
                minds, building bonds, and sparking new ideas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
