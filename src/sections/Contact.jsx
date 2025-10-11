import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    e.target.reset(); // clear the form
    toast.success('Your message has been sent successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      theme: 'colored',
    });
  };

  return (
    <section id='contact' className="bg-[#FFF8E8] py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="shadow-md rounded-lg p-10 bg-white">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#4F1A1A]">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F1A1A]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F1A1A]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F1A1A]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#4F1A1A] text-[#FFF8E8] px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center text-[#4F1A1A] space-y-6 text-center lg:text-start lg:pl-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact Details</h2>
          <div>
            <h3 className="font-semibold">Address:</h3>
            <p>123 Farm Road</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>info@farmhousename.com</p>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
