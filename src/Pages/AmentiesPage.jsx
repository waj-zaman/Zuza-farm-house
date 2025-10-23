import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import villa1 from '../assets/farmPics/_GGN6041.avif';
import villa2 from '../assets/farmPics/_GGN6121.avif';
import gate1 from '../assets/farmPics/_GGN6006.avif';
import gate2 from '../assets/farmPics/_GGN6016.avif';
import way1 from '../assets/farmPics/_GGN6021.avif';
import way2 from '../assets/farmPics/_GGN6061.avif';
import way3 from '../assets/farmPics/_GGN6071.avif';

import lawn1 from '../assets/farmPics/_GGN6036.avif';
import lawn2 from '../assets/farmPics/_GGN6041.avif';
import lawn3 from '../assets/farmPics/_GGN6056.avif';
import children from '../assets/farmPics/_GGN6076.avif';
import boxCricket from '../assets/farmPics/_GGN6096.avif';
import gazebo1 from '../assets/farmPics/_GGN6051.avif';
import gazebo2 from '../assets/farmPics/_GGN6091.avif';

import bbq1 from '../assets/farmPics/_GGN6131.avif';
import bbq2 from '../assets/farmPics/_GGN6136.avif';
import pool1 from '../assets/farmPics/_GGN6151.avif';
import pool2 from '../assets/farmPics/_GGN6311.avif';

import interior1 from '../assets/farmPics/_GGN6156.avif';
import interior2 from '../assets/farmPics/_GGN6171.avif';
import interior3 from '../assets/farmPics/_GGN6176.avif';
import interior4 from '../assets/farmPics/_GGN6185.avif';
import interior5 from '../assets/farmPics/_GGN6196.avif';
import interior6 from '../assets/farmPics/_GGN6246.avif';
import room1 from '../assets/farmPics/_GGN6211.avif';
import room2 from '../assets/farmPics/_GGN6236.avif';
import room3 from '../assets/farmPics/_GGN6256.avif';
import kitchen from '../assets/farmPics/_GGN6241.avif';
import balcony1 from '../assets/farmPics/_GGN6251.avif';
import balcony2 from '../assets/farmPics/_GGN6277-Edit-Edit.avif';
import balcony3 from '../assets/farmPics/_GGN6282-Edit.avif';
import balcony4 from '../assets/farmPics/_GGN6296.avif';

import bgImage from '../assets/farmPics/_GGN6176.avif';

import Navbar from "../Components/Navbar";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Footer from "../Components/Footer";

export default function VillasGallery() {
  const exteriorImages = [villa1, villa2, gate1, gate2, way1, way2, way3];
  const lawnImages = [lawn1, lawn2, lawn3, children, boxCricket, gazebo1, gazebo2];
  const interiorImages = [interior1, interior2, interior3, interior4, interior5, interior6, room1, room2, room3, kitchen, balcony1, balcony2, balcony3, balcony4];
  const momentImages = [bbq1, bbq2, pool1, pool2];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const renderSection = (title, images) => (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 font-[nowy/farmPics]">{title}</h2>

        <div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            auto-rows-[200px]
            gap-3
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer shadow-md 
                ${i === 0 ? "col-span-2 row-span-2" : ""}
              `}
              onClick={() => openLightbox(images, i)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      <Hero bgImage={bgImage}/>

      {renderSection("A Glimpse Into Timeless Tranquility", exteriorImages)}
      {renderSection("Lawn, Play & Perfect Evenings", lawnImages)}
      {renderSection("The Essence of Refined Living", interiorImages)}
      {renderSection("Moments by the Water & Flame", momentImages)}

      <Contact />
      <Footer />

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={selectedIndex}
          slides={lightboxImages.map((img) => ({ src: img }))}
        />
      )}
    </>
  );
}
