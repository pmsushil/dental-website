// Doctors.js
import React from 'react';
import Topbar from '../Shared/Topbar';
import Footer from '../Shared/Footer';

const DentalDoctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Orthodontist',
    experience: '15 years',
    image: 'https://source.unsplash.com/800x600/?dentist',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Periodontist',
    experience: '12 years',
    image: 'https://source.unsplash.com/800x600/?dental,surgeon',
  },
  // Add more dental doctors as needed
];

const Doctors = () => {
  return (
    <div>
      <Topbar />

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Meet Our Dental Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DentalDoctors.map((doctor) => (
              <div key={doctor.id} className="p-6 bg-white rounded-lg shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                <p className="text-gray-600 mb-2">Experience: {doctor.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
