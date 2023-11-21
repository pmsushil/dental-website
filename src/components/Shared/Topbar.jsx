import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="fixed  min-w-full bg-black  z-20 ">
      {/* Toggle button for medium screens (top-right) */}
      <div className="md:hidden absolute top-4 right-4 z-10">
      <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 360 : 0 }}
          transition={{ type: 'spring', stiffness: 100, duration: 2  }}
        >
          <AiOutlineMenu size={24} onClick={toggleMenu} />
        </motion.div>
      
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center  w-full md:w-auto gap-4">
              <Link to="/">
            
                < motion.img
                  className="h-8 w-auto sm:h-10"
                  initial={{ y: -20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ type: 'spring', stiffness: 120, duration: 2 }}
                  src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                  alt=""
                />
              </Link>
              <motion.h1 className=' text-2xl font-bold text-white '
               
               initial={{ y: -20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ type: 'spring', stiffness: 120, duration: 2 }}
              >Dental Care
              </motion.h1>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <Link to="/" className="font-medium text-white hover:text-[#404091]">
              Home
            </Link>
            <Link to="/treatment" className="font-medium text-white hover:text-[#404091]">
              Treatments
            </Link>
            <Link to="/doctors" className="font-medium text-white hover:text-[#404091]">
              Doctors
            </Link>
            <Link to="/blog" className="font-medium text-white hover:text-[#404091]">
              Blog
            </Link>
            <Link to="/contactus" className="font-medium text-indigo-600 hover:text-indigo-900">
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
   
      {/* Menu for medium screens */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212] text-white mt-2 flex  flex-col gap-4 text-center">
          <Link to="." className="font-medium text-white hover:text-[#404091] block">
            Home
          </Link>
          <Link to="/treatment" className="font-medium text-white hover:text-[#404091] block">
            Treatments
          </Link>
          <Link to="/doctors" className="font-medium text-white hover:text-[#404091]">
              Doctors
            </Link>
          <Link to="/blog" className="font-medium text-white hover:text-[#404091] block">
            Blog
          </Link>
          <Link to="/contactus" className="font-medium text-white hover:text-[#404091] mb-4 block">
            Book Appointment
          </Link>
        </div>
      )}
   
           </div>
  );
};

export default Topbar;
