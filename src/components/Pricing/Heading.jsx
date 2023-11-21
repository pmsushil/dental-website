import React from 'react'
import {
    AiOutlineCloudUpload,
    AiOutlineDatabase,
    AiOutlineCloudServer,
} from 'react-icons/ai'
import {CiPaperplane} from 'react-icons/ci'
// import SandA from '../../assets/sa.jpg'


const Heading = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#4a6572] flex flex-col justify-between '>
        <div className='  max-w-[1240px] m-auto'>
            <div className='flex flex-col  justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-3xl md:text-5xl font-bold text-white'>We Offer a Special Discount to help Small Businesses.  </h1>
                <p className='text-xl mt-2 text-[#F9AA33] text-center'>Please Contact Us and we'll Email you with the Details.</p>
            </div>
          
           
        </div>
    </div>
  )
}

export default Heading