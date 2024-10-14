import React from 'react';

function Homei() {
  return (
    <>
    <div className='relative flex justify-center items-center min-h-screen w-full bg-black'>
      {/* Background Text (Responsive with Wider Letters using scaleX) */}
      <div className='absolute text-6xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-blue-500 font-bold text-center' style={{ top: '47%', transform: 'scaleX(1.2)' }}>
        CRIBONIX
      </div>

      {/* Overlayed Text (Responsive) */}
      <div className='absolute text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-bold text-center z-10'>
        <h1>.Your Vision</h1>
        <h1>Our Mastery.</h1>
        <div className='flex-col space-y-2'>
        <p className=' text-white text-[1rem]'> Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci
          </p>

          <p className='text-white text-[1rem]'>
        enim erat lectus egestas etiam mauris tellus est aenean vel aliquam non.</p>
        </div>

      
       
      </div>
     
    </div>
     <div className='flex justify-between items-center'>
     <button className='border border-[#383838] text-white rounded-full p-2 hover:bg-white hover:text-black'>Contact Us</button>
     <button className='border border-[#383838] text-white rounded-full p-2  hover:bg-white hover:text-black'>View Portfolio</button>

   </div> </>
  );
}

export default Homei;
