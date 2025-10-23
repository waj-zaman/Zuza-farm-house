import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../sections/Hero'
import bgImage from '../assets/farmPics/_GGN6196.avif'
import Footer from '../Components/Footer'
import Contact from '../sections/Contact'

const InformationPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // Wait for hero + navbar to render
        setTimeout(() => {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 100; // default 100px
          const y = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 10; // -10px small spacing
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 400);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero bgImage={bgImage} />

      <div className='flex justify-center px-6 py-16'>
        <div className='max-w-[1200px] space-y-20'>

          {/* 12-Hour Rental */}
          <section id='12hour'>
            <h1 className='text-3xl font-semibold mb-4'>12-Hour Rental</h1>
            <p className='text-gray-700 leading-relaxed sm:text-xl'>
              At Zuza Farm Stay, we believe that every special moment deserves a place where time slows down and comfort takes over. To make your experience flexible and convenient, we offer our entire farmhouse for 12-hour rentals, allowing you to enjoy the space at your own pace. Whether you wish to spend a refreshing day surrounded by greenery, host an intimate gathering with family and friends, or unwind under the stars by the pool, our property is yours to enjoy for half a day of uninterrupted bliss. From the sprawling lawns and cozy interiors to the poolside and barbecue areas, every corner of Zuza Farm Stay is designed to create a sense of warmth and togetherness. Whether you choose a day slot or night slot, our team ensures that your stay is seamless, comfortable, and memorable — a perfect balance of nature, leisure, and understated luxury.
            </p>
          </section>

          {/* 24-Hour Rental */}
          <section id='24hour'>
            <h1 className='text-3xl font-semibold mb-4'>24-Hour Rental</h1>
            <p className='text-gray-700 leading-relaxed sm:text-xl'>
              At Zuza Farm Stay, we offer the comfort and freedom of a full 24-hour stay, giving you the space and time to truly unwind and enjoy every moment. Whether you’re planning a peaceful retreat, a weekend celebration, or simply an escape from the everyday, our farmhouse is designed to make you feel at home from sunrise to sunrise. Spend your day soaking in the natural beauty, lounging by the pool, or hosting a cozy barbecue under the stars — and wake up to the soft sounds of nature and a view that feels miles away from the city. Every corner of Zuza Farm Stay — from the inviting lawns and serene balconies to the spacious interiors — is crafted to bring together comfort, style, and a touch of countryside charm. Here, every hour is yours to relax, connect, and create memories that linger long after your stay.            </p>
          </section>

          {/* Multi-Day Rental */}
          <section id='multiday'>
            <h1 className='text-3xl font-semibold mb-4'>Multi-Day Rental</h1>
            <p className='text-gray-700 leading-relaxed sm:text-xl'>
              For those seeking an extended escape, Zuza Farm Stay welcomes you for multi-day stays that let you slow down and fully immerse yourself in the beauty of nature. Whether it’s a quiet family getaway, a friends’ retreat, or a long weekend celebration, our farmhouse offers the perfect blend of comfort, privacy, and relaxation. Wake up to misty mornings, spend lazy afternoons by the pool or on the lawns, and unwind under starry skies each night. With spacious interiors, cozy rooms, and modern amenities, every day feels like a new experience — familiar yet refreshing. Stay for as long as you wish, and let Zuza become your home away from home — where time moves gently and every day feels like a holiday.            </p>
          </section>

          {/* Privacy Policy */}
          <section id='privacy'>
            <h1 className='text-3xl font-semibold mb-4'>Privacy Policy</h1>
            <p className='text-gray-700 leading-relaxed sm:text-xl '>
              At Zuza Farm Stay, we value and respect your privacy. Any personal information you share with us — including your name, contact details, or booking information — is collected solely for the purpose of providing and improving our services. We do not sell, rent, or share your data with third parties except as required by law or to facilitate your reservation. All information is handled securely and responsibly to ensure your peace of mind. By using our website or booking with us, you consent to the collection and use of your information in accordance with this policy. We are committed to maintaining transparency and protecting your trust at every step.
            </p>
          </section>

          {/* Terms & Conditions */}
          <section id="terms">
            <div>
              <h1 className="text-3xl font-semibold mb-6 text-gray-800">
                Terms and Conditions
              </h1>

              <p className="text-gray-700 leading-relaxed mb-8 text-xl">
                By booking and staying at Zuza Farm Stay, guests agree to the following terms and conditions.
                These guidelines ensure a comfortable, safe, and enjoyable experience for everyone visiting our property.
              </p>

              <div className="space-y-8 text-gray-700 leading-relaxed sm:text-xl">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">1. Booking & Payment</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>All bookings are confirmed only after receiving the advance payment.</li>
                    <li>The balance amount must be paid before check-in.</li>
                    <li>Advance payments are non-refundable in case of a no-show or early checkout.</li>
                    <li>Rescheduling is subject to availability and management approval.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">2. Check-in & Check-out</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Standard check-in is 1:00 PM and check-out is 11:00 AM unless otherwise agreed.</li>
                    <li>Early check-in or late check-out may be available upon prior request.</li>
                    <li>All guests must present valid identification at the time of check-in.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">3. Property Use & Conduct</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The farmhouse is meant for leisure stays and small private gatherings only.</li>
                    <li>Guests are requested to respect the property, surroundings, and neighbors.</li>
                    <li>Loud music or parties are allowed only with prior approval from management.</li>
                    <li>Smoking is permitted only in outdoor areas.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">4. Damage & Liability</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Guests are responsible for any damage to property, furniture, or fixtures during their stay.</li>
                    <li>Zuza Farm Stay is not liable for loss, theft, or damage to guests’ belongings.</li>
                    <li>Guests use the pool and outdoor facilities at their own risk.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">5. Cancellation & Refunds</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cancellations made at least 7 days before the stay may qualify for a partial refund.</li>
                    <li>No refunds will be issued for cancellations within 48 hours of check-in.</li>
                    <li>Refunds, if applicable, will be processed within 7–10 business days.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">6. Safety & Security</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Guests must adhere to all safety instructions provided by the management.</li>
                    <li>Children must be supervised at all times, especially around the pool and play area.</li>
                    <li>Use of illegal substances, fireworks, or firearms is strictly prohibited.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">7. Management Rights</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Management reserves the right to deny entry or evict guests violating rules or causing disturbance.</li>
                    <li>Terms and conditions are subject to change without prior notice.</li>
                    <li>All disputes shall be subject to local jurisdiction.</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-500 text-sm italic mt-10 text-xl">
                By proceeding with a booking, guests confirm that they have read and agreed to these Terms and Conditions.
              </p>
            </div>
          </section>


        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default InformationPage
