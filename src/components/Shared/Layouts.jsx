import React from 'react';

import Topbar from './Topbar';

import Services from '../Services/Services';
import Footer from './Footer';
import Hero from './Hero';


const Layouts=() =>{
  return (
    <>
    <div className=' '>
    
      <Topbar/>
      <Hero/>
      <Services/>
      <Footer/>
      </div>
    </>
  );
}

export default Layouts