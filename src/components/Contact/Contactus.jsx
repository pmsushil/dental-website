import React, { useState } from 'react';
import Topbar from '../Shared/Topbar';
import Footer from '../Shared/Footer';
import BGVideo from './../../assets/contact.mp4';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your appointment scheduling logic here
    console.log('Appointment Scheduled:', formData);
    // You can send the form data to your backend for further processing
  };

  return (
    <>
      <Topbar />

      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
          style={{ zIndex: -1 }}
        >
          <source src={BGVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="bg-black bg-opacity-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold  mb-8 text-center text-white">
              Book an Appointment
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              required />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-white font-medium mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              required />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-700  hover:text-black"
          >
            Schedule Appointment
          </button>
        </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contactus;
