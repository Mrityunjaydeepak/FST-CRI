"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import office from './Container.png';
import service1 from './service1.png';
import service2 from './service2.png';
import service3 from './service3.png';
import service4 from './service4.png';

const Services = () => {
  // State variables to manage visibility of each service's hidden content
  const [showService1, setShowService1] = useState(false);
  const [showService2, setShowService2] = useState(false);
  const [showService3, setShowService3] = useState(false);
  const [showService4, setShowService4] = useState(false);

  return (
    <div className='flex flex-col ml-32 mr-32 justify-center bg-primary '>
      {/* Background Image Section */}
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
            BLOCKBUSTER STRATEGIES FOR <span className="block"> YOUR BRAND</span>
          </h2>
        </div>
      </div>

      {/* Description */}
      <div>
        <h1 className='text-xl font-bold text-white -mt-32'>
          From script to screen, we provide the tools and strategies that turn your brand into a digital sensation.
        </h1>
      </div>

      {/* Subscription Plans */}
      <div className='flex flex-col justify-center border border-secondary border-t-2 border-b-0 border-l-0 border-r-0 p-6'> 
        <div>
          <h1 className='text-5xl font-bold text-white flex justify-center'>Subscriptions</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className='flex flex-col justify-center items-center space-y-3 border border-secondary border-t-2 border-b-0 border-l-0 border-r-0 mt-6 p-4'>
        <h1 className='text-4xl font-bold text-white flex justify-center'>Our Services</h1>

        {/* Service 1 */}
        <div className='flex flex-col'>
          <div className='flex cursor-pointer' onClick={() => setShowService1(!showService1)}>
            <Image src={service1} alt='Service 1' width={900} height={200} />
          </div>
          {showService1 && (
            <div className="flex justify-between mt-4 bg-[#030303] p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Sagittis egestas risus vitae eu et massa.<br />
                  Purus leo ornare adipiscing commodo quisque ipsum libero faucibus.<br />
                  Sed metus suscipit auctor nisl nunc sit vel.<br />
                  Sagittis pellentesque sit posuere diam tincidunt.<br />
                  Egestas quis leo dui adipiscing ullamcorper.<br />
                  Turpis eu sit fusce maecenas ut.<br />
                  Auctor at scelerisque congue nunc.<br />
                  A tempor sed est semper est tincidunt nibh tempus.<br />
                  Lobortis nulla adipiscing blandit accumsan a.<br />
                  Morbi vestibulum risus ultricies purus metus cras metus porttitor.<br />
                  Nisl felis leo est pharetra nulla.<br />
                  Lorem ultricies dolor sodales feugiat aenean.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Nibh dapibus ut eleifend lacus volutpat quam aliquam nibh.<br /> 
                  At cursus adipiscing mattis sapien donec<br />
                  et elementum vestibulum sapien. 
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Service 2 */}
        <div className='flex flex-col'>
          <div className='flex cursor-pointer' onClick={() => setShowService2(!showService2)}>
            <Image src={service2} alt='Service 2' width={900} height={200} />
          </div>
          {showService2 && (
            <div className="flex justify-between mt-4 bg-gray-800 p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  {/* Add your service 2 description here */}
                  Detailed description for Service 2.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  {/* Add your service 2 additional info here */}
                  Additional information for Service 2.
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Service 3 */}
        <div className='flex flex-col'>
          <div className='flex cursor-pointer' onClick={() => setShowService3(!showService3)}>
            <Image src={service3} alt='Service 3' width={900} height={200} />
          </div>
          {showService3 && (
            <div className="flex justify-between mt-4 bg-gray-800 p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  {/* Add your service 3 description here */}
                  Detailed description for Service 3.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  {/* Add your service 3 additional info here */}
                  Additional information for Service 3.
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Service 4 */}
        <div className='flex flex-col justify-center'>
          <div className='flex cursor-pointer' onClick={() => setShowService4(!showService4)}>
            <Image src={service4} alt='Service 4' width={900} height={200} />
          </div>
          {showService4 && (
            <div className="flex justify-between mt-4 bg-gray-800 p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  {/* Add your service 4 description here */}
                  Detailed description for Service 4.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  {/* Add your service 4 additional info here */}
                  Additional information for Service 4.
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
