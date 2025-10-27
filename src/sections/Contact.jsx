import React, { useState } from "react";

import maps from "../assets/Screenshot 2025-10-18 225109.png";
import phone from "../assets/icons/phone-call.png";
import gmail from "../assets/icons/gmail.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const whatsappNumber = "917386868001"; // Owner's number with country code
    const whatsappMessage = `Hello! There is an enquiry for Zuza farmhouse.

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="subheading tracking-wide">Contact</h3>
          <h1 className="heading font-semibold text-3xl lg:text-4xl">
            Visit Us Soon
          </h1>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Column - Form + Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-[#ABEEFF] backdrop-blur-md shadow-lg rounded-2xl flex flex-col gap-5 p-6 sm:p-8"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border border-[#01003B] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#320A6B] shadow-sm placeholder-gray-400 transition duration-300"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border border-[#01003B] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#320A6B] shadow-sm placeholder-gray-400 transition duration-300"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="border border-[#01003B] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#320A6B] shadow-sm placeholder-gray-400 transition duration-300"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-[#320A6B] to-[#00CED1] text-white font-semibold py-3 rounded-xl hover:scale-105 transform transition duration-300 shadow-md"
              >
                Submit
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 pt-6 sm:pt-8">
              <div className="flex items-center gap-4">
                <img src={phone} alt="Phone" className="w-5 sm:w-6" />
                <p className="body text-sm sm:text-base font-medium">
                  +91 73868 68001
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={gmail} alt="Email" className="w-5 sm:w-6" />
                <p className="body text-sm sm:text-base font-medium break-words">
                  zuzafarmhouse@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="w-full flex justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Zuza+Farm+House+Moinabad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={maps}
                alt="Zuza Farmhouse Map"
                className="w-full sm:w-[80%] md:w-[90%] lg:w-[1200px] rounded-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.3)] object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
