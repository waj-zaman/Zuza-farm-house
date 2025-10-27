import React from 'react'

import family from '../assets/events/family-dinner.png'
import headquarters from '../assets/events/headquarter.png'
import surprise from '../assets/events/surprise.png'
import wedding from '../assets/events/wedding-decoration.png'
import centerImage from '../assets/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067.jpeg'

const WhyUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="subheading tracking-wide text-[#320A6B] mb-2">
            Zuza is suitable for all occasions.
          </p>
          <h1 className="heading text-3xl md:text-4xl font-medium text-[#320A6B]">
            Celebrate Life's Special Events At Zuza
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Cards */}
          <div className="flex flex-col justify-evenly gap-10 w-full lg:w-1/3">
            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-end lg:items-end">
              <img src={wedding} alt="wedding" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Weddings & Receptions
              </h1>
              <p className="body text-sm text-gray-700">
                Celebrate your love story amidst nature’s charm, with open lawns and elegant décor that make every moment unforgettable.
              </p>
            </div>

            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-end lg:items-end">
              <img src={surprise} alt="birthday" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Birthday Parties
              </h1>
              <p className="body text-sm text-gray-700">
                Make your special day vibrant and joyful with a perfect setting for fun, laughter, and celebration.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={centerImage}
              alt="Zuza farmhouse events"
              className="w-full sm:w-[500px] md:w-[600px] lg:w-[1400px] aspect-[3/3] rounded-2xl shadow-[8px_8px_10px_rgba(0,0,0,0.4)] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col justify-evenly gap-10 w-full lg:w-1/3">
            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-start lg:items-start">
              <img src={family} alt="family" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Family Get-Togethers
              </h1>
              <p className="body text-sm text-gray-700">
                Reconnect with your loved ones in a peaceful, private setting where memories are made naturally.
              </p>
            </div>

            <div className="card flex flex-col gap-y-1 text-center items-center lg:text-start lg:items-start">
              <img src={headquarters} alt="corporate" className="w-12" />
              <h1 className="heading font-semibold text-lg text-[#320A6B]">
                Corporate Retreats & Team Outings
              </h1>
              <p className="body text-sm text-gray-700">
                Step out of the office and into serenity — perfect for refreshing minds, building bonds, and sparking new ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
