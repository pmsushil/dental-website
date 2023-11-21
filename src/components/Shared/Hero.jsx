import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import BGVideo from './../../assets/bg1.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const textSpeed = 0.3; // Adjust this value to control the parallax effect for text

      // Parallax effect for the text
      textRef.current.style.transform = `translateY(${scrollPosition * textSpeed}px)`;
    };

    const handleAnimation = async () => {
      await controls.start({ opacity: 1, y: 0 });
    };

    // Attach the event listeners
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleAnimation, 1000); // Delay the animation for 3 seconds


    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
        style={{ zIndex: -1 }}
      >
        <source src={BGVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <main className="mx-auto max-w-7xl px-4 hero h-screen relative text-white z-10">
        <div
          ref={textRef}
          className="text-center relative z-10"
         
        >
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <motion.span
  className="block xl:inline"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{delay: 0.2, duration: 0.6, type: 'spring', stiffness: 120 }}
>
  Best
</motion.span>

<motion.span
  className="block text-indigo-600 xl:inline"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
>
   Dental Care
</motion.span>
          </h1>
          <motion.p
  className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1, duration: 0.6, type: 'spring', stiffness: 120 }}
>
  Dental care you can trust, we offer high-quality services to meet your oral health needs.
</motion.p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
     
<motion.div
  className="rounded-md shadow"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1, duration: 0.6 }}
>
  <a
    href="#"
    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
  >
    Book Appointment
  </a>
</motion.div>
<motion.div
  className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1, duration: 0.6 }}
>
  <a
    href="#"
    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
  >
    Learn More
  </a>
</motion.div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
