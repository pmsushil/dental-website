import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Services = () => {
  const dentalServices = [
    {
      id: 1,
      title: 'Regular Checkups',
      description: 'Routine dental checkups for maintaining oral health.',
      image: 'https://source.unsplash.com/800x600/?dental,checkup',
    },
    {
      id: 2,
      title: 'Teeth Cleaning',
      description: 'Professional cleaning to remove plaque and tartar.',
      image: 'https://source.unsplash.com/800x600/?dental,cleaning',
    },
    {
      id: 3,
      title: 'Fillings',
      description: 'Restoration of cavities with dental fillings.',
      image: 'https://source.unsplash.com/800x600/?dental,fillings',
    },
    {
      id: 4,
      title: 'Teeth Whitening',
      description: 'Cosmetic procedure to lighten the color of teeth.',
      image: 'https://source.unsplash.com/800x600/?dental,whitening',
    },
    {
      id: 5,
      title: 'Orthodontics',
      description: 'Correction of misaligned teeth with braces or aligners.',
      image: 'https://source.unsplash.com/800x600/?dental,orthodontics',
    },
    {
      id: 6,
      title: 'Dental Implants',
      description: 'Replacement of missing teeth with dental implants.',
      image: 'https://source.unsplash.com/800x600/?dental,implants',
    },
    // Add more services as needed
  ];

  const zoomInVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Dental Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dentalServices.map((service) => (
            <motion.div key={service.id} className="p-6 bg-white rounded-lg shadow-md"
            variants={zoomInVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}      
            transition={{ duration: 0.5 }}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
