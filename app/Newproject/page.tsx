"use client";
import React from 'react'
import Image from 'next/image'
import office from './Container.png'
export default function Newproject() {
  return (
    <div className='flex flex-col mx-32 justify-center '>


<div className="relative mt-24 h-screen sm:h-128  bg-primary">
        <Image
          src={office}
          alt="Why Us Background Image"
          layout='fill' // Use layout='fill' for better responsiveness
          objectFit='cover'
          className="object-cover opacity-50"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          <h2 className="text-8xl sm:text-5xl md:text-7xl font-bold text-left text-white">
            COMING<span className="block"> SOON...</span>
          </h2>
        </div>
      </div>

      <div>
        <p className='flex text-center justify-center'>
        Lorem ipsum dolor sit amet consectetur. Nibh 
        dapibus ut eleifend lacus volutpat quam aliquam nibh. <br />
        At cursus adipiscing mattis sapien donec et elementum vestibulum sapien.
         Nisl imperdiet aliquet suspendisse massa. Elementum vestibulum <br />
         quisque pellentesque rhoncus convallis dictum magna vulputate.
        </p>
      </div>
    </div>
  )
}
