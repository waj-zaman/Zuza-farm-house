import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../sections/Hero";
import bgImage from "../assets/farmPics/_GGN6196.avif";
import Footer from "../Components/Footer";
import Contact from "../sections/Contact";
import Namebar from "../Components/Namebar";

const InformationPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
          const namebarHeight =
            document.querySelector("#namebar")?.offsetHeight || 0;

          // Total offset: both Namebar + Navbar + 10px padding
          const totalOffset = navbarHeight + namebarHeight + 40;

          const y =
            section.getBoundingClientRect().top +
            window.scrollY -
            totalOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }, 400);
      }
    }
  }, [location]);

  return (
    <>
      <div id="namebar">
        <Namebar />
      </div>
      <Navbar />
      <Hero bgImage={bgImage} />

      {/* Container for all sections */}
      <main className="px-6 md:px-10 flex justify-center">
        <div className="max-w-[1200px] w-full space-y-20">



          {/* 12-Hour Rental */}
          <section id="12hour">
            <h1 className="heading text-3xl mt-15 font-semibold mb-4">
              12-Hour Rental
            </h1>
            <p className="body text-gray-700 leading-relaxed sm:text-xl">
              At Zuza Farm Stay, we believe that every special moment deserves
              a place where time slows down and comfort takes over. To make
              your experience flexible and convenient, we offer our entire
              farmhouse for 12-hour rentals, allowing you to enjoy the space
              at your own pace. Whether you wish to spend a refreshing day
              surrounded by greenery, host an intimate gathering with family
              and friends, or unwind under the stars by the pool, our property
              is yours to enjoy for half a day of uninterrupted bliss. From the
              sprawling lawns and cozy interiors to the poolside and barbecue
              areas, every corner of Zuza Farm Stay is designed to create a
              sense of warmth and togetherness. Whether you choose a day slot
              or night slot, our team ensures that your stay is seamless,
              comfortable, and memorable — a perfect balance of nature, leisure,
              and understated luxury.
            </p>
          </section>

          {/* 24-Hour Rental */}
          <section id="24hour">
            <h1 className="heading text-3xl font-semibold mb-4">24-Hour Rental</h1>
            <p className="body text-gray-700 leading-relaxed sm:text-xl">
              At Zuza Farm Stay, we offer the comfort and freedom of a full
              24-hour stay, giving you the space and time to truly unwind and
              enjoy every moment. Whether you’re planning a peaceful retreat, a
              weekend celebration, or simply an escape from the everyday, our
              farmhouse is designed to make you feel at home from sunrise to
              sunrise. Spend your day soaking in the natural beauty, lounging
              by the pool, or hosting a cozy barbecue under the stars — and
              wake up to the soft sounds of nature and a view that feels miles
              away from the city. Every corner of Zuza Farm Stay — from the
              inviting lawns and serene balconies to the spacious interiors — is
              crafted to bring together comfort, style, and a touch of
              countryside charm. Here, every hour is yours to relax, connect,
              and create memories that linger long after your stay.
            </p>
          </section>

          {/* Multi-Day Rental */}
          <section id="multiday">
            <h1 className="heading text-3xl font-semibold mb-4">Multi-Day Rental</h1>
            <p className="body text-gray-700 leading-relaxed sm:text-xl">
              For those seeking an extended escape, Zuza Farm Stay welcomes you
              for multi-day stays that let you slow down and fully immerse
              yourself in the beauty of nature. Whether it’s a quiet family
              getaway, a friends’ retreat, or a long weekend celebration, our
              farmhouse offers the perfect blend of comfort, privacy, and
              relaxation. Wake up to misty mornings, spend lazy afternoons by
              the pool or on the lawns, and unwind under starry skies each
              night. With spacious interiors, cozy rooms, and modern amenities,
              every day feels like a new experience — familiar yet refreshing.
              Stay for as long as you wish, and let Zuza become your home away
              from home — where time moves gently and every day feels like a
              holiday.
            </p>
          </section>

          {/* Privacy Policy */}
          <section id="privacy">
            <h1 className="heading text-3xl font-semibold mb-4">Privacy Policy</h1>
            <p className="body text-gray-700 leading-relaxed sm:text-xl">
              At Zuza Farm Stay, we value and respect your privacy. Any personal
              information you share with us — including your name, contact
              details, or booking information — is collected solely for the
              purpose of providing and improving our services. We do not sell,
              rent, or share your data with third parties except as required by
              law or to facilitate your reservation. All information is handled
              securely and responsibly to ensure your peace of mind. By using
              our website or booking with us, you consent to the collection and
              use of your information in accordance with this policy. We are
              committed to maintaining transparency and protecting your trust at
              every step.
            </p>
          </section>

          {/* Terms & Conditions */}
          <section id="terms" className="space-y-8">
            {/* ZUZA FARM HOUSE AGREEMENT SECTION */}

            <h1 className="heading text-3xl font-semibold mb-4">
              Zuza Farm House – Terms & Conditions
            </h1>
            <p className="body text-gray-700 leading-relaxed sm:text-xl mb-8">
              Before your stay, please take a moment to review our mutual
              agreement guidelines. These are designed to ensure a comfortable,
              safe, and enjoyable experience for all our guests at Zuza Farm
              House.
            </p>

            <ol className="list-decimal pl-6 text-gray-700 space-y-3 sm:text-xl leading-relaxed">
              <li>Booking guest age should be above 18 years with submission of valid ID proof (Aadhaar Card).</li>
              <li>Full payment must be made at check-in along with a refundable caution deposit of <strong>₹5,000</strong> for families up to 25 members.</li>
              <li>Advance booking payments are non-refundable or non-adjustable under any circumstances.</li>
              <li>A refundable caution deposit of <strong>₹15,000</strong> is required for large events (50+ members), refundable post-inspection.</li>
              <li>Swimming pool timings: <strong>6 AM – 9 PM</strong> (closed afterward for cleaning & maintenance).</li>
              <li>Music must be kept at low volume after <strong>10:00 PM</strong> to avoid disturbance to neighbors.</li>
              <li><strong>Alcohol, hookah, and drugs are strictly prohibited</strong> on the premises.</li>
              <li>Any damage to property or common areas will be recovered from the guest.</li>
              <li>Guests are requested to use dustbins to maintain cleanliness and hygiene.</li>
              <li>Management is <strong>not responsible</strong> for lost belongings or accidents.</li>
              <li>No eating or drinking is allowed near the swimming pool area.</li>
              <li>Extensions of hours must be notified at least <strong>6 hours before</strong>, subject to availability.</li>
              <li>Extra charges apply for backup generator usage during power failures.</li>
              <li>Extra charges apply for gas cylinders, coal, or wood for barbeque and bonfire setups.</li>
              <li>Caretaker/Watchman services are unavailable after <strong>10 PM</strong>.</li>
              <li>Only 3 shaded car parking spots are available inside; additional cars may park outside.</li>
              <li>Please wear <strong>nylon swimming costumes</strong> and take a shower before entering the pool.</li>
              <li>Shorts, tracks, and undergarments are <strong>not allowed</strong> for swimming.</li>
              <li>Do not throw any litter or objects into the pool.</li>
              <li>Children must <strong>not be left unattended</strong> near the poolside area.</li>
              <li>Guests must adhere to the <strong>check-in and check-out timings</strong> as per booking confirmation.</li>
            </ol>

            <p className="body text-gray-700 mt-8 sm:text-xl">
              <strong>Note:</strong> We want you to enjoy your stay comfortably
              and end your visit with a happy memory!
            </p>
          </section>
          <p className="text-gray-500 text-sm italic mt-10 sm:text-xl">
            By proceeding with a booking, guests confirm that they have read
            and agreed to these Terms and Conditions.
          </p>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
};

export default InformationPage;
