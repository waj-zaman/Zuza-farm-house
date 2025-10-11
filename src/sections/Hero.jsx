import React from 'react';
import HeroImg from '../assets/_GGN6041.avif';

const Hero = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center 
             lg:h-screen md:h-[60vh] sm:h-[50vh] h-[40vh]"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            {/* Optional overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30 lg:bg-black/40"></div>

            {/* Text content */}
            <div className="relative z-10 text-white px-4 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-2">
                    Farm House Name
                </h1>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light drop-shadow-md">
                    Experience the calm, comfort, and charm of nature in every corner.
                </h3>
            </div>
        </section>
    )
}

export default Hero