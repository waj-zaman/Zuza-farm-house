import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// For video playback
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

// ✅ Auto-import all images from farmPics folder (Vite only)
const allImages = Object.values(
  import.meta.glob("../assets/farmPics/*.{avif,jpg,jpeg,png}", { eager: true })
).map((mod) => mod.default);

// ✅ Auto-import only videos from Client_Drive folder
const driveVideos = Object.values(
  import.meta.glob("../assets/Client_Drive/*.mp4", { eager: true })
).map((mod) => mod.default);

// ✅ Categorize based on filename patterns
const exteriorImages = allImages.filter(
  (img) =>
    /GGN60(41|21|61|06|16|71)/.test(img) ||
    /night\.(jpe?g)$/i.test(img) ||
    /zuza_night(_2)?\.(jpe?g)$/i.test(img) ||
    /bbq\.(jpe?g)$/i.test(img)
);



const lawnImages = allImages.filter((img) =>
  /GGN60(36|41|56|76|96|51|91)/.test(img)
);

const interiorImages = allImages.filter((img) =>
  /GGN61(56|71|76|85|96)|GGN62(46|11|36|56|41|51|77|82|96)/.test(img)
);

const momentImages = allImages.filter((img) =>
  /GGN61(31|36|51)|GGN63(11)/.test(img)
);

// ✅ Keep your background image manually
import bgImage from "../assets/farmPics/_GGN6176.avif";

import Navbar from "../Components/Navbar";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Footer from "../Components/Footer";
import Namebar from "../Components/Namebar";

export default function VillasGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxVideos, setLightboxVideos] = useState([]);

  const openVideoLightbox = (videos, index) => {
    setLightboxVideos(videos);
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const renderSection = (title, images, index) => (
    <motion.section
      className={`py-16 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="heading text-3xl font-semibold mb-10 text-[#01003B] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            auto-rows-[200px]
            gap-3
          "
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-md 
                ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              onClick={() => openVideoLightbox(images, i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={img}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  // ✅ Drive Section: Only videos (muted + fade-in + double-click Lightbox)
  const renderDriveSection = () => (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="heading text-3xl font-semibold mb-10 text-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Video Gallery
        </motion.h2>

        <div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            auto-rows-[220px]
            gap-3
          "
        >
          {driveVideos.map((video, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-md bg-black cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <video
                src={video}
                muted
                controls
                className="w-full h-full object-cover rounded-2xl"
                onDoubleClick={(e) => {
                  e.target.blur(); // ✅ Remove focus from the video element
                  setTimeout(() => {
                    openVideoLightbox(driveVideos, i);
                  }, 50); // Small delay ensures focus change happens before Lightbox mounts
                }}
              />

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  return (
    <>
      <Namebar />
      <Navbar />
      <Hero bgImage={bgImage} />

      <motion.div
        className="text-center py-12 bg-gradient-to-r from-[#fafafa] to-[#ffffff]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover the serene charm of Zuza Farmhouse through a curated gallery
          of its most enchanting corners — from tranquil lawns to cozy interiors.
        </p>
      </motion.div>

      {renderSection("A Glimpse Into Timeless Tranquility", exteriorImages, 0)}
      {renderSection("Lawn, Play & Perfect Evenings", lawnImages, 1)}
      {renderSection("The Essence of Refined Living", interiorImages, 2)}
      {renderSection("Moments by the Water & Flame", momentImages, 3)}
      {renderDriveSection()}

      <Contact />
      <Footer />

      {/* ✅ Lightbox for Videos Only — now with proper plugin setup */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={selectedIndex}
          plugins={[Video]}  // ✅ Activate Video plugin here
          slides={lightboxVideos.map((src) => ({
            type: "video",   // ✅ Explicitly mark as video
            sources: [{ src, type: "video/mp4" }],
            autoPlay: true,  // optional
          }))}
          carousel={{ finite: true }}
          controller={{ closeOnBackdropClick: true }}
        />
      )}

    </>
  );
}
