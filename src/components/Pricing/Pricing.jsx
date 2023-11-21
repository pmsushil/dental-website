import React from 'react';

import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div  className='w-full text-white '>
      <div className='w-full h-[800px] bg-[#F9AA33] absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-8'>

        <div className='text-center py-8 mt-4 text-slate-300'>
          <h2 className=' text-3xl text-black font-bold '>PRICING</h2>

          <p className='text-3xl text-[#946724]'>
            Select Your Subscription type, Based on  Your Requirements.
          </p>
        </div>

        <div className='grid md:grid-cols-3'>

          <div className='bg-[white] text-[black] m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$29<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-[#f9aa33]'>For Small Scale, Entrepreneur</p>
            <div className='text-2xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />1 Team Member</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />1 Location</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />1 Integration</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />4 Hour Setup Assistance</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Limited Support</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Optional Integration with Scanners and Printers</p>
                <hr/>
                <div className=' flex flex-col -gap-3 '>
                <p  className='flex py-4 text-blue-300 ml-10 ' >Billed Annually  </p>
                </div>
               <Link to='/contact'> <button className='w-full py-4 my-4 mt-20 bg-[#232f34] font-semibold text-[#f9aa33] '>Get Started</button></Link>
            </div>
          </div>
          <div className='bg-[#344955] text-[#f9aa33] m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$89<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-[#f9aa33]'>For Medium Business</p>
            <div className='text-2xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />10 Members</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />10 Locations</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />2 Integrations</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />8 Hour Setup Assistance</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Limited Support over the Phone and Mails</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Optional Integration with Scanners and Printers</p>
                <hr/>
                <div className=' flex flex-col -gap-3 '>
                <p  className='flex py-4 text-[#f9aa33] ml-10 ' >Billed Annually </p>
                </div>
                <Link to='/contact'> <button className='w-full py-4 my-4 mt-12 bg-[white] font-semibold text-[#232f34] '>Get Started</button></Link>

            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Platinum</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$199<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>For Large Scale Companies.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Upto 50 Members</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />50 Locations</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />3 Integrations</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />10 Hour Setup Assistance</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Unlimited Support</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Optional Integration with Scanners and Printers</p>
                <hr/>
                <div className=' flex flex-col -gap-3 '>
                <p  className='flex py-4 text-blue-300 ml-10 ' >Billed Annually </p>
                </div>
                <Link to='/contact'> <button className='w-full py-4 my-4 mt-12 bg-[#232f34] font-semibold text-[#f9aa33] '>Get Started</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;