import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '800',
  subsets: ['latin'],
});

function Homei() {
  return (
    <>
      <div className='relative flex justify-center items-center min-h-screen w-full bg-black'>
        {/* Background Text (Responsive with Wider Letters using scaleX) */}
        <div className={`${inter.className} absolute text-6xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-blue-500 font-bold text-center`} style={{ top: '40%', transform: 'scaleX(1.2)' }}>
          CRIBONIX
        </div>

        {/* Overlayed Text (Responsive) */}
        <div className='absolute text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-bold text-center z-10'>
          <h1>.Your Vision</h1>
          <h1>Our Mastery.</h1>
          <div className='flex flex-col items-center space-y-2 mt-4'>
            <p className='text-white text-base md:text-lg'>
              Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci
            </p>
            <p className='text-white text-base md:text-lg'>
              enim erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
            </p>
            {/* Buttons */}
            <div className='flex space-x-4 mt-6'>
              <button className='text-2xl border border-[#383838] text-white rounded-full py-3 px-6 hover:bg-white hover:text-black'>
                Contact Us
              </button>
              <button className='text-2xl border border-[#383838] text-white rounded-full py-3 px-6 hover:bg-white hover:text-black'>
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homei;
