"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import imgcont from './Container.png';
import Button from '../Components/Button';
import team from './Team.png';
import mem1 from './Rectangle 379.png'
import mem2 from './Rectangle 380.png'
import mem3 from './Rectangle 381.png'
import mem4 from './Rectangle 382.png'
import office from './Officereal.png'
import panel1 from './Tabpanel(2).png'
import panel2 from './Tabpanel(1).png'
import panel3 from './Tabpanel.png'
import mountain from './mountain.png'
import g1 from './g1.png'
import g2 from './g2.png'
import g3 from './g3.png'
import g4 from './g4.png'
import circle from './circle.svg.png'
import verified from './verified.png'
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Whyus = () => {
  // Array of image imports
  const images = [
    panel1,  // 01
    panel2,  // 02
    panel3,     // 03
    // 04 (You can replace this with another image if available)
  ];


  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State to handle fade animation
  const [isFading, setIsFading] = useState(false);

  // Handler for button clicks
  const handleButtonClick = (index) => {
    if (index === currentImageIndex || isFading) return; // Prevent redundant clicks

    setIsFading(true); // Start fade-out

    // Wait for the fade-out transition to complete
    setTimeout(() => {
      setCurrentImageIndex(index); // Change image

      // Start fade-in after image has changed
      setTimeout(() => {
        setIsFading(false); // End animation
      }, 500); // Duration matches the Tailwind transition
    }, 500); // Duration matches the Tailwind transition
  };

  return (
    <div className="flex flex-col min-h-screen ml-32 mr-32">
      {/* Image Section */}
      <div className="relative w-auto mt-24 h-screen sm:h-128 md:h-160">
        <Image
          src={imgcont} // Ensure the image is in the public directory
          alt="Why Us Background Image"
          objectFit='fit'
          className="object-cover opacity-50"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          <h2 className="text-9xl sm:text-5xl md:text-9xl font-bold text-left text-white">
            Mastering Every <span className="block"> Digital Move.</span>
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex justify-start p-8 space-x-40 mr-8">
        <div className="min-w-72">
          <p className="text-left text-md">
            Where Aloo meets the Samosa<br /> <br />

            At Cribonix, we're the “Bahubali” of <br />digital marketing—always delivering <br />what your brand needs. With blockbuster strategies, superstar <br />solutions, and a script for success, we <br />make sure your brand hits the spotlight.<br />
            Ready for a “Dhoom”<br /> of growth? We’ve got your back!

          </p>
        </div>
        <div className='flex place-items-end justify-between space-x-8'>
          <div className='flex flex-col'>
            <div className='flex justify-start'>
              <h2 className='text-3xl '>Ads <br />
                Management</h2>
            </div>
            <div className='flex justify-end'>
              <h1 className='text-6xl ml-9 mt-3 font-bold'>+500K</h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-start'>
              <h2 className='text-3xl '>Years of <br />
                Experience</h2>
            </div>
            <div className='flex justify-end'>
              <h1 className='text-6xl ml-9 mt-3 font-bold'>+10</h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-start'>
              <h2 className='text-3xl '>Successful <br />
                Projects</h2>
            </div>
            <div className='flex justify-end'>
              <h1 className='text-6xl ml-9 mt-3 font-bold'>+400</h1>
            </div>
          </div>
        </div>
      </div>

      {/* How We Started */}
      <div className='flex flex-col p-4 border-t-2 border-secondary mb-8'>
        <div className='flex justify-center'>
          <h1 className='text-white text-7xl font-bold text-center'>
            Cribonix Insights: The Power <br />  Behind Our Strategies
          </h1>
        </div>
        <div className='flex justify-between mt-12 ml-16'>
          <div className='flex flex-col justify-start space-y-10'>
            <h2 className='text-white text-4xl font-bold text-left'>
              Where smart strategies meet creativity,<br /> we lift brands to new heights.<br /> Discover how knowledge drives<br /> our innovative solutions!
            </h2>
            <h2 className='text-white text-md text-left'>
              Et quam nec commodo senectus elementum facilisi in <br />
              vestibulum adipiscing proin ligula euismod sagittis mollis <br />
              donec gravida lorem tortor adipiscing lorem massa lorem <br />
              mattis amet leo varius posuere nullam magna maecenas <br />
              massa, sit purus sit pretium convallis luctus nulla.
            </h2>
            <Button
              text="View Portfolio"
              href="/Portfolio"
              variant="primary"
              ariaLabel="View Portfolio"
              className='w-[200px]'
            />
          </div>

          <div className='flex justify-end'>
            <Image
              src={team} // Ensure the image is in the public directory
              alt="Team Image"
              height={500}
              width={500}
              className="object-cover opacity-100 rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className='flex flex-col p-4 border-t-2 border-secondary mb-8'>
        <div className='mt-14 flex flex-col justify-center space-y-10'>
          <h1 className='text-7xl text-white font-Inter font-bold text-center'>
            THE VALUES THAT DRIVE, <br />EVERYTHING WE DO
          </h1>

          <h2 className='text-lg text-white font-Inter text-center'>
            - More than goals. We’re on a mission. <br />
            Our values are the fuel behind every campaign, strategy and breakthrough
          </h2>
        </div>

        <div className='flex justify-center space-x-5 mt-8'>
          {/* Dynamic Image Section */}
          <div className='relative  sm:h-128 md:h-160 transition-opacity duration-500'>
            <Image
              src={images[currentImageIndex]}
              alt={`Quality Image ${currentImageIndex + 1}`}
              height={500}
              width={800}
              className={`object-cover rounded-md shadow-lg ${isFading ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col space-y-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-12 h-12 text-lg bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors duration-100 ${currentImageIndex === index ? 'bg-white text-black' : ''
                  }`}
                aria-label={`Display image ${index + 1}`}
              >
                {`0${index + 1}`}
              </button>
            ))}
          </div>
        </div>
      </div>




      {/* our Clients Section */}
      <div className='flex justify-between border border-secondary border-t-2 border-l-0 border-r-0 border-b-0 mt-24 p-8'>
        <h1 className='text-7xl text-left font-bold'>
          OUR TRUSTED <br /> CLIENTS
        </h1>
        <h2 className='flex text-md text-white place-items-end '>Collaborating with the best to bring their visions to life.<br />
          From emerging startups to established brands, we’re <br />
          honoured to be the trusted digital partner that helps <br />
          them thrive in the modern market. </h2>

      </div>

      {/* Testimonials sort of thing */}
      <div className='flex justify-between border border-secondary border-t-2 border-l-0 border-r-0 border-b-0 mt-24 p-8'>



      </div>

      {/* Our Team */}
      <div className='border border-secondary border-t-2 border-l-0 border-r-0 border-b-0 mt-24 p-8 flex flex-col'>
        <div className='flex font-Inter justify-between mt-9 space-x-40'>
          <div className='flex flex-col space-y-4 '>
            <h1 className='text-6xl text-white font-extrabold'>
              MEET OUR TEAM
            </h1>
            <h2 className='text-md text-white '>
              The brains behind the brilliance, the faces behind the flair.<br />
              Meet the dreamers, creators and doers shaping Cribonix’s magic.

            </h2>

          </div>
          <div className='flex place-items-end space-x-8'>
            <Button
              text="Join Us"
              href="/Portfolio"
              variant="primary"
              ariaLabel="View Portfolio"
              className='w-[200px]'
            />
            <Button
              text="Browse all members"
              href="/Portfolio"
              variant="primary"
              ariaLabel="View Portfolio"

            />
          </div>

        </div>
        <div className='flex justify-between mt-12'>
          <div className='flex flex-col mt-4'>
            <Image
              src={mem1}
              alt="Mem1"
              height={200}
              width={250}

            />
            <p className='text-[#AAAAAA] font-thin text-sm mt-2 '>Hi! my Name is</p>
            <h2 className='text-white font-bold text-md'>Herman Defoe</h2>
            <h2 className='text-white text-md font-thin'>CEO & Founder</h2>
          </div>

          <div className='flex flex-col'>
            <Image
              src={mem2}
              alt="Mem1"
              height={200}
              width={250}

            />
            <p className='text-[#AAAAAA] font-thin text-sm mt-2 '>Hi! my Name is</p>
            <h2 className='text-white font-bold text-md'>Herman Defoe</h2>
            <h2 className='text-white text-md font-thin'>CEO & Founder</h2>
          </div><div className='flex flex-col'>
            <Image
              src={mem3}
              alt="Mem1"
              height={200}
              width={250}

            />
            <p className='text-[#AAAAAA] font-thin text-sm mt-2 '>Hi! my Name is</p>
            <h2 className='text-white font-bold text-md'>Herman Defoe</h2>
            <h2 className='text-white text-md font-thin'>CEO & Founder</h2>
          </div><div className='flex flex-col'>
            <Image
              src={mem4}
              alt="Mem1"
              height={200}
              width={250}

            />
            <p className='text-[#AAAAAA] font-thin text-sm mt-2 '>Hi! my Name is</p>
            <h2 className='text-white font-bold text-md'>Herman Defoe</h2>
            <h2 className='text-white text-md font-thin'>CEO & Founder</h2>
          </div>

        </div>

      </div>



      {/* Visit Our Office */}

      <div className='border border-secondary border-t-2 border-l-0 border-r-0 border-b-0 mt-24 p-8 flex flex-col'>
        <div className='flex justify-center'>
          <h1 className='font-extrabold text-white text-6xl mb-8'>VISIT OUR OFFICE</h1>
        </div>
        <div className='relative  flex justify-center transition-opacity duration-500'>
          <Image
            src={office} // Ensure the image is in the public directory
            alt="Office Background"
            height={990}
            width={990}
            className={`object-cover rounded-md shadow-lg opacity-80 ${isFading ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Overlay Text */}

        </div>
      </div>

      {/* Follow us on intsagram */}

      <div className='border border-secondary border-t-2 border-l-0 border-r-0 border-b-0 mt-24 p-8 flex flex-col'>

        <div className='flex flex-col'>
          <div className='flex justify-center flex-col'>
            <h1 className='text-white font-extrabold text-6xl text-center '>FOLLOW OUR WORK <br /> ON INSTAGRAM </h1>
            <h2 className='text-md text-white flex justify-center '>Behind Every Swipe, There’s a Story to Tell. <br />
              Join us on Instagram for a peek into our world!</h2>
              <h3 className='flex flex-row items-center justify-center font-bold space-x-4 mb-8'> <Image src={circle} alt='circle' className='' />@Productionx <Image src={verified} alt='verified' className='' /> <button className=' border border-secondary flex space-x-3 p-2 rounded-full items-center text-center justify-center text-white hover:bg-white hover:text-black'> <FaInstagram />Follow us <Link href="https://www.instagram.com/cribonix/" target="_blank"></Link></button></h3>
          </div>
          <div className='flex justify-between gap-4 '>
            <div className='flex gap-4 '>
              <Image
                src={mountain}
                alt='mountain'
                
                className='h-[550px]'
              />

            </div>
            <div className='flex flex-col gap-4 '>
              <div className='flex justify-between gap-4'>
                <Image
                  src={g1}
                  alt='mountain'
                 
                  className='h-[250px] '
                />
                <Image
                  src={g2}
                  alt='mountain'
                  
                  className='h-[250px]'
                />
              </div>
              <div className='flex justify-between gap-4 '> <Image
                src={g3}
                alt='mountain'
              
                className='h-[250px]'
              /> <Image
                  src={g4}
                  alt='mountain'
                  
                  className='h-[250px]'
                /></div>

            </div>


          </div>


        </div>
      </div>
    </div>
  );
};

export default Whyus;
