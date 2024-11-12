"use client";

import React from 'react';
import Image from 'next/image';
import office from './Container.png';

export default function Portfolio() {
  return (
    <div className='flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 justify-center space-y-8'>

      {/* Image Section */}
      <div className="relative h-auto sm:h-128 md:h-160 bg-primary">
        <Image
          src={office}
          alt="Why Us Background Image"
          layout="responsive"
          width={1200} // Maintain original aspect ratio
          height={600}
          className="object-cover opacity-50 rounded-md"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12 md:p-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center sm:text-left text-white">
            COMING<span className="block"> SOON...</span>
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <p className='text-center max-w-2xl mx-auto text-gray-300'>
          Lorem ipsum dolor sit amet consectetur. Nibh dapibus ut eleifend lacus volutpat quam aliquam nibh.<br />
          At cursus adipiscing mattis sapien donec et elementum vestibulum sapien. Nisl imperdiet aliquet suspendisse massa.<br />
          Elementum vestibulum quisque pellentesque rhoncus convallis dictum magna vulputate.
        </p>
      </div>
    </div>
  );
}
