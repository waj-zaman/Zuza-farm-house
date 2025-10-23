import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import villa1 from '../assets/farmPics/_GGN6041.avif'
import villa2 from '../assets/farmPics/_GGN6121.avif'

import gate1 from '../assets/farmPics/_GGN6006.avif'
import gate2 from '../assets/farmPics/_GGN6016.avif'

import way1 from '../assets/farmPics/_GGN6021.avif'
import way2 from '../assets/farmPics/_GGN6061.avif'
import way3 from '../assets/farmPics/_GGN6071.avif'

import lawn1 from '../assets/farmPics/_GGN6036.avif'
import lawn2 from '../assets/farmPics/_GGN6041.avif'
import lawn3 from '../assets/farmPics/_GGN6056.avif'

import children from '../assets/farmPics/_GGN6076.avif'

import boxCricket from '../assets/farmPics/_GGN6096.avif'

import bbq1 from '../assets/farmPics/_GGN6131.avif'
import bbq2 from '../assets/farmPics/_GGN6136.avif'

import pool1 from '../assets/farmPics/_GGN6151.avif'
import pool2 from '../assets/farmPics/_GGN6311.avif'

import interior1 from '../assets/farmPics/_GGN6156.avif'
import interior2 from '../assets/farmPics/_GGN6171.avif'
import interior3 from '../assets/farmPics/_GGN6176.avif'
import interior4 from '../assets/farmPics/_GGN6185.avif'
import interior5 from '../assets/farmPics/_GGN6196.avif'
import interior6 from '../assets/farmPics/_GGN6246.avif'

import room1 from '../assets/farmPics/_GGN6211.avif'
import room2 from '../assets/farmPics/_GGN6236.avif'
import room3 from '../assets/farmPics/_GGN6256.avif'

import kitchen from '../assets/farmPics/_GGN6241.avif'

import balcony1 from '../assets/farmPics/_GGN6251.avif'
import balcony2 from '../assets/farmPics/_GGN6277-Edit-Edit.avif'
import balcony3 from '../assets/farmPics/_GGN6282-Edit.avif'
import balcony4 from '../assets/farmPics/_GGN6296.avif'

import gazebo1 from '../assets/farmPics/_GGN6051.avif'
import gazebo2 from '../assets/farmPics/_GGN6091.avif'

const settings = {
    dots: false,          // remove dots
    arrows: false,        // remove arrows
    infinite: true,       // loop infinitely
    autoplay: true,       // auto-slide
    autoplaySpeed: 2500,  // change slide every 2.5 seconds
    fade: true,           // smooth fade effect
    speed: 800,           // transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,   // pause when hovered
};




const features = [
    {
        id: 1,
        title: "Sparkling Swimming Pool",
        description: "Take a refreshing dip or lounge poolside and enjoy serene waters in a lush setting.",
        images: [pool1, pool2]
    },
    {
        id: 2,
        title: "Spacious Villa",
        description: "Stay in our 3BHK villas offering comfort, privacy, and scenic views of the countryside.",
        images: [villa1, villa2]
    },
    {
        id: 3,
        title: "Lush Green Lawn",
        description: "Perfect for gatherings, celebrations, or simply soaking in the natural beauty around you.",
        images: [lawn1, lawn2, lawn3]
    },
    {
        id: 4,
        title: "Elegant Living Spaces",
        description: "Well-designed interiors that provide a harmonious blend of comfort, style, and practicality for an effortless stay experience.",
        images: [interior1, interior2, interior3, interior4, interior5, interior6]
    },
    {
        id: 5,
        title: "Well-Appointed Kitchen",
        description: "Prepare tea, coffee, or light refreshments with ease in our well-maintained kitchen space.",
        images: [kitchen]
    },
    {
        id: 6,
        title: "Scenic Entrance and Pathway",
        description: "Step into a serene environment as you walk along our landscaped entrance and pathway, designed for a welcoming and effortless arrival.",
        images: [way1, way2, gate1, way3, gate2]
    },
    {
        id: 7,
        title: "Children's Play Area",
        description: "Let children enjoy a safe and engaging outdoor space, thoughtfully designed for play and exploration amid natural surroundings.",
        images: [children]
    },
    {
        id: 8,
        title: "Box Cricket",
        description: "A well-maintained box cricket area where guests can play, stay active, and enjoy outdoor recreation.",
        images: [boxCricket]
    },
    {
        id: 9,
        title: "Barbecue Zone",
        description: " Enjoy a thoughtfully designed barbecue area that makes outdoor cooking and entertaining simple and comfortable.",
        images: [bbq1, bbq2]
    },
    {
        id: 10,
        title: "Comfortable Bedrooms",
        description: "Cozy and serene bedrooms crafted for relaxation, providing guests with a peaceful retreat after a day at Zuza.",
        images: [room1, room2, room3]
    },
    {
        id: 11,
        title: "Shaded Gazebo Lounge",
        description: "A comfortable sit-out area providing a serene setting for relaxation, conversation, or simply taking in the surroundings.",
        images: [gazebo1, gazebo2]
    },
    {
        id: 12,
        title: "Panoramic Balcony Lounge",
        description: "Enjoy the perfect blend of nature and comfort from your private balcony, crafted to inspire relaxation, leisure, and unforgettable moments.",
        images: [balcony1, balcony2, balcony3, balcony4]
    }



];

export default function FeaturesSection() {
    return (
        <div id="amenities" className="max-w-[1200px] mx-auto">

            <div className="text-center">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold pb-4 font-[aclonica] text-[#320A6B]'>
                    Amenities
                </h1>
            </div>

            <div className="grid gap-6 md:gap-10 p-6 md:grid-cols-2">
                {features.map(({ id, title, description, images }) => (
                    <div
                        key={id}
                        className="rounded-lg bg-[#00CED1] p-1.5 text-center hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-lg"
                    >


                        <div className="lg:hidden">
                            <img
                                src={images[0]}
                                alt={title}
                                className="w-full h-fit object-cover rounded-md"
                            />
                        </div>
                        <div className="hidden lg:block">
                            <Slider {...settings} className="min-h-[200px] md:min-h-[250px]">
                                {images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={title}
                                        className="w-full h-auto object-cover rounded-md"
                                        loading="lazy"
                                    />
                                ))}
                            </Slider>
                        </div>
                        <h1 className="font-[gabriela] text-xl sm:text-2xl pt-4 pb-2 text-white">{title}</h1>
                        <p className="font-[poppins] mx-auto sm:w-4/5 text-md sm:text-md lg:text-lg leading-6  md:text-base text-[#320A6B]">{description}</p>
                    </div>
                ))}
            </div>

            <div className="my-10 flex justify-center">
                <Link
                    to="/amenities"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-semibold px-6 py-3 rounded-lg hover:bg-[#320A6B]  hover:text-white transition flex items-center gap-2 md:text-2xl"
                >
                    View Gallery
                    <ArrowRight size={20} />
                </Link>
            </div>

        </div>
    );
}
