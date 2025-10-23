import React from "react";
import gateway from "../assets/farmPics/_GGN6006.avif";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center lg:py-24 bg-white"
    >
      <div className="hidden lg:block">
        <div className=" w-[1400px] flex flex-col lg:flex-row items-center relative px-6 ">
          <div>

          </div>
          {/* Left: Image */}
          <div className="ml-20 w-full lg:w-1/2 relative">
            <img
              src={gateway}
              alt="Zuza Farmhouse"
              className="w-full h-[800px] object-cover rounded-2xl shadow-md"
            />

            {/* Optional overlay tint for better contrast */}
            {/* <div className="absolute inset-0 bg-black/20 rounded-2xl"></div> */}
          </div>

          {/* Right: Text overlapping image area */}
          <div
            className="lg:absolute lg:left-[50%] bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:max-w-[600px] shadow-lg mt-10 lg:mt-0"
          >
            <h3 className="subheading tracking-wide">
              Welcome
            </h3>
            <h1 className="heading font-semibold text-3xl lg:text-4xl">
              A Little About Zuza
            </h1>
            <p className="mt-4 leading-relaxed text-gray-700 text-base lg:text-lg">
              Welcome to Zuza Farm Stay, a peaceful countryside retreat where time slows down and nature takes the lead. Tucked away amidst rolling greens and the soft hum of rural life, Zuza offers you more than just a stay — it’s an experience of tranquility, connection, and comfort. From sunrise walks along dew-kissed lawns to golden sunsets by the pool, every corner of our farmhouse is designed to help you unwind, reflect, and rediscover the simple joys of life. Whether you’re seeking a quiet escape from the city or a scenic venue to celebrate life’s moments, Zuza welcomes you with open arms and warm hearts.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700 text-base lg:text-lg">
              Here, every detail has been thoughtfully crafted to blend rustic
              charm with modern comfort. Enjoy farm-fresh meals made with love,
              cozy spaces that invite laughter and conversations, and an
              environment that encourages you to simply be.
            </p>
            <p className="heading text-xl mt-4 font-semibold text-[#320A6B]  text-end">– Owner’s Name</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden px-4 py-10">
        <div className="flex flex-col items-center max-w-[800px] mx-auto space-y-6">

          <div className="w-full">
            <h3 className="subheading font-semibold tracking-wide mb-2">
              Welcome
            </h3>
            <h1 className="heading text-3xl font-bold mb-4">
              A Little About Zuza
            </h1>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={gateway}
              alt="Zuza Farmhouse"
              className="w-full h-auto object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="w-full">
            <p className="body text-gray-700 leading-relaxed text-base mb-4">
              Welcome to Zuza Farm Stay, a peaceful countryside retreat where time slows down and nature takes the lead. Tucked away amidst rolling greens and the soft hum of rural life, Zuza offers you more than just a stay — it’s an experience of tranquility, connection, and comfort. From sunrise walks along dew-kissed lawns to golden sunsets by the pool, every corner of our farmhouse is designed to help you unwind, reflect, and rediscover the simple joys of life. Whether you’re seeking a quiet escape from the city or a scenic venue to celebrate life’s moments, Zuza welcomes you with open arms and warm hearts.
            </p>
            <p className="body text-gray-700 leading-relaxed text-base mb-4">
              Here, every detail has been thoughtfully crafted to blend rustic charm with modern comfort. Enjoy farm-fresh meals made with love, cozy spaces that invite laughter and conversations, and an environment that encourages you to simply be.
            </p>
            <p className="heading text-xl font-semibold text-[#320A6B] text-right">
              – Owner’s Name
            </p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;
