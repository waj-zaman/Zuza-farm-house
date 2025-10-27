import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gateway from "../assets/farmPics/_GGN6006.avif";

const About = () => {
  const sectionRef = useRef(null);

  // Track scroll progress of this section (0 → top, 1 → bottom)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // triggers as section enters/leaves view
  });

  // Smooth scroll-based transformations
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex justify-center items-center lg:py-24 bg-white overflow-hidden"
    >
      {/* === Desktop View === */}
      <div className="hidden lg:block">
        <div className="w-[1400px] flex flex-col lg:flex-row items-center relative px-6">
          {/* Left: Image scrolls with parallax-like motion */}
          <motion.div
            className="ml-20 w-full lg:w-1/2 relative"
            style={{ y: imageY, opacity }}
          >
            <img
              src={gateway}
              alt="Zuza Farmhouse"
              className="w-full h-[800px] object-cover rounded-2xl shadow-md"
            />
          </motion.div>

          {/* Right: Text scrolls in opposite direction */}
          <motion.div
            className="lg:absolute lg:left-[50%] bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:max-w-[600px] shadow-lg mt-10 lg:mt-0"
            style={{ y: textY, opacity }}
          >
            <h3 className="subheading tracking-wide">Welcome</h3>
            <h1 className="heading font-semibold text-3xl lg:text-4xl">
              A Little About Zuza
            </h1>
            <p className="mt-4 leading-relaxed text-gray-700 text-base lg:text-lg">
              Welcome to Zuza Farm Stay, a peaceful countryside retreat where
              time slows down and nature takes the lead. Tucked away amidst
              rolling greens and the soft hum of rural life, Zuza offers you
              more than just a stay — it’s an experience of tranquility,
              connection, and comfort. From sunrise walks along dew-kissed lawns
              to golden sunsets by the pool, every corner of our farmhouse is
              designed to help you unwind, reflect, and rediscover the simple
              joys of life.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700 text-base lg:text-lg">
              Here, every detail has been thoughtfully crafted to blend rustic
              charm with modern comfort. Enjoy farm-fresh meals made with love,
              cozy spaces that invite laughter and conversations, and an
              environment that encourages you to simply be.
            </p>
            <p className="heading text-xl mt-4 font-semibold text-[#320A6B] text-end">
              - Management, Zuza.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === Mobile View === */}
      <div className="lg:hidden px-4 py-10">
        <motion.div
          className="flex flex-col items-center max-w-[800px] mx-auto space-y-6"
          style={{ y: textY, opacity }}
        >
          <h3 className="subheading font-semibold tracking-wide mb-2">Welcome</h3>
          <h1 className="heading text-3xl font-bold mb-4">
            A Little About Zuza
          </h1>

          <motion.img
            src={gateway}
            alt="Zuza Farmhouse"
            className="w-full h-auto object-cover rounded-2xl shadow-md"
            style={{ y: imageY }}
          />

          <p className="body text-gray-700 leading-relaxed text-base mb-4">
            Welcome to Zuza Farm Stay, a peaceful countryside retreat where time
            slows down and nature takes the lead. Tucked away amidst rolling
            greens and the soft hum of rural life, Zuza offers you more than
            just a stay — it’s an experience of tranquility, connection, and
            comfort.
          </p>
          <p className="body text-gray-700 leading-relaxed text-base mb-4">
            Here, every detail has been thoughtfully crafted to blend rustic
            charm with modern comfort. Enjoy farm-fresh meals made with love,
            cozy spaces that invite laughter and conversations, and an
            environment that encourages you to simply be.
          </p>
          <p className="heading text-xl font-semibold text-[#320A6B] text-right">
            – Management, Zuza.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
