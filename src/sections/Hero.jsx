import React from 'react';

const Hero = ({ bgImage, title, subtitle }) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center 
                 lg:h-screen md:h-[60vh] sm:h-[50vh] h-[40vh] pt-20 md:pt-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/0 lg:bg-black/40"></div> */}

      {/* Text Content */}
      <div className="flex flex-col items-end z-10 px-4 w-3/4 md:w-2xl lg:w-3xl lg:text-end lg:ml-50">
        <h1 className="text-2xl text-[#FFFDB5] font-[aclonica] italic sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-lg mb-1">
          {title}
        </h1>
        <h3 className="leading-4.5 pl-35 sm:leading-6 lg:leading-8 text-[#FFBF00] font-[nowy] sm:text-xl md:text-xl lg:text-2xl font-light drop-shadow-md">
          {subtitle}
        </h3>
        {/* <button className="bg-[#320A6B] w-fit text-[#fbeaff] px-6 py-2 lg:my-4 my-2 sm:text-xl lg:text-4xl hover:bg-[#fbeaff] hover:text-[#320A6B] font-semibold  rounded-lg transition transition-all font-[quicksand] ">
            Contact
          </button> */}
      </div>
    </section>
  );
};

export default Hero;
