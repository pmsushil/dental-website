import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Topbar from '../Shared/Topbar';
import Footer from '../Shared/Footer';

const Treatment = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const dentalTreatments = [
    {
      id: 1,
      title: 'Root Canal Therapy',
      description: 'Treatment to repair and save a badly damaged or infected tooth.',
      image: 'https://source.unsplash.com/800x600/?dental,root-canal',
    },
    {
      id: 2,
      title: 'Dental Crowns',
      description: 'Restoration of a tooth to its normal shape, size, and function.',
      image: 'https://source.unsplash.com/800x600/?dental,crowns',
    },
    {
      id: 3,
      title: 'Tooth Extraction',
      description: 'Removal of a tooth from its socket in the bone.',
      image: 'https://source.unsplash.com/800x600/?dental,tooth-extraction',
    },
    {
      id: 4,
      title: 'Dental Bridges',
      description: 'Replacement of missing teeth with artificial teeth.',
      image: 'https://source.unsplash.com/800x600/?dental,bridges',
    },
    {
      id: 5,
      title: 'Dental Veneers',
      description: 'Thin shells of porcelain or composite resin to enhance the appearance of teeth.',
      image: 'https://source.unsplash.com/800x600/?dental,veneers',
    },
    {
      id: 6,
      title: 'Teeth Whitening',
      description: 'Cosmetic procedure to lighten the color of teeth.',
      image: 'https://source.unsplash.com/800x600/?dental,whitening',
    },
    // Add more treatments as needed
  ];

  return (
    <>
    <Topbar/>
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Dental Treatments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dentalTreatments.map((treatment) => (
            <div key={treatment.id} className="p-6 bg-white rounded-lg shadow-md">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {treatment.title}
              </h3>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
       
   
  );
};

export default Treatment;
