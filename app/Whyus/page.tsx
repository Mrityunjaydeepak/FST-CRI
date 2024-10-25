"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Button from '../Components/Button';
import imgcont from './Container.png';
import team from './Team.png';
import mem1 from './Rectangle 379.png';
import mem2 from './Rectangle 380.png';
import mem3 from './Rectangle 381.png';
import mem4 from './Rectangle 382.png';
import office from './Officereal.png';
import panel1 from './Tabpanel(2).png';
import panel2 from './Tabpanel(1).png';
import panel3 from './Tabpanel.png';
import mountain from './mountain.png';
import g1 from './g1.png';
import g2 from './g2.png';
import g3 from './g3.png';
import g4 from './g4.png';
import circle from './circle.svg.png';
import verified from './verified.png';

const Whyus = () => {
  const images = [panel1, panel2, panel3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleButtonClick = (index) => {
    if (index === currentImageIndex || isFading) return;

    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setTimeout(() => {
        setIsFading(false);
      }, 500);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen mx-8 sm:mx-16 lg:mx-32">
      {/* Image Section */}
      <div className="relative w-full mt-24 h-[500px] sm:h-[600px] md:h-[700px]">
        <Image
          src={imgcont}
          alt="Why Us Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white">
            Mastering Every <span className="block">Digital Move.</span>
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-start p-8 lg:space-x-40">
        <div className="text-md lg:w-1/2">
          <p>
            Where Aloo meets the Samosa<br /><br />
            At Cribonix, we're the “Bahubali” of digital marketing—always delivering what your brand needs. With blockbuster strategies, superstar solutions, and a script for success, we make sure your brand hits the spotlight. Ready for a “Dhoom” of growth? We’ve got your back!
          </p>
        </div>
        <div className="flex justify-between lg:w-1/2 space-x-8 mt-8 lg:mt-0">
          <div className="flex flex-col text-center">
            <h2 className="text-3xl">Ads Management</h2>
            <h1 className="text-6xl mt-3 font-bold">+500K</h1>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="text-3xl">Years of Experience</h2>
            <h1 className="text-6xl mt-3 font-bold">+10</h1>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="text-3xl">Successful Projects</h2>
            <h1 className="text-6xl mt-3 font-bold">+400</h1>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="flex flex-col p-8 border-t-2 border-gray-400 mb-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-7xl text-white font-bold">
            Cribonix Insights: The Power Behind Our Strategies
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-white lg:w-1/2">
            <h2 className="text-4xl font-bold">
              Where smart strategies meet creativity, we lift brands to new heights.
            </h2>
            <p className="mt-8">
              Et quam nec commodo senectus elementum facilisi in vestibulum adipiscing proin ligula euismod sagittis mollis donec gravida lorem tortor adipiscing lorem massa lorem mattis amet leo varius posuere nullam magna maecenas massa, sit purus sit pretium convallis luctus nulla.
            </p>
            <Button text="View Portfolio" href="/Portfolio" variant="primary" className="mt-8 w-[200px]" />
          </div>
          <div className="mt-8 lg:mt-0">
            <Image src={team} alt="Team Image" height={500} width={500} className="rounded-md shadow-lg" />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="flex flex-col p-8 border-t-2 border-gray-400 mb-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-7xl text-white font-bold">
            THE VALUES THAT DRIVE EVERYTHING WE DO
          </h1>
          <p className="text-lg mt-8 text-white">
            More than goals. We’re on a mission. Our values are the fuel behind every campaign, strategy, and breakthrough.
          </p>
        </div>
        <div className="flex justify-center space-x-5">
          <div className="relative sm:h-[400px] md:h-[500px]">
            <Image
              src={images[currentImageIndex]}
              alt={`Quality Image ${currentImageIndex + 1}`}
              height={500}
              width={800}
              className={`object-cover rounded-md shadow-lg transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>
          <div className="flex flex-col space-y-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-12 h-12 text-lg bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200 ${currentImageIndex === index ? 'bg-white text-black' : ''}`}
              >
                {`0${index + 1}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="flex flex-col lg:flex-row justify-between border-t-2 border-gray-400 p-8">
        <h1 className="text-5xl sm:text-7xl font-bold">OUR TRUSTED CLIENTS</h1>
        <p className="text-white lg:w-1/2 mt-8 lg:mt-0">
          Collaborating with the best to bring their visions to life. From emerging startups to established brands, we’re honoured to be the trusted digital partner that helps them thrive in the modern market.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="flex flex-col p-8 border-t-2 border-gray-400">
        <div className="flex justify-between items-center mb-12">
          <div className="text-white">
            <h1 className="text-5xl sm:text-7xl font-extrabold">MEET OUR TEAM</h1>
            <p className="mt-4">
              The brains behind the brilliance, the faces behind the flair. Meet the dreamers, creators and doers shaping Cribonix’s magic.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button text="Join Us" href="/Portfolio" variant="primary" className="w-[150px]" />
            <Button text="Browse all members" href="/Portfolio" variant="primary" className="w-[200px]" />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          {[mem1, mem2, mem3, mem4].map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <Image src={member} alt={`Team Member ${index + 1}`} height={250} width={250} className="rounded-md" />
              <p className="text-[#AAAAAA] mt-2">Hi! My Name is</p>
              <h2 className="text-white font-bold">Herman Defoe</h2>
              <h3 className="text-white font-thin">CEO & Founder</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="flex flex-col p-8 border-t-2 border-gray-400">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold">VISIT OUR OFFICE</h1>
        </div>
        <div className="relative flex justify-center">
          <Image src={office} alt="Office" height={700} width={700} className="rounded-md shadow-lg opacity-90" />
        </div>
      </div>

      {/* Follow Us on Instagram */}
      <div className="flex flex-col p-8 border-t-2 border-gray-400">
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold">FOLLOW OUR WORK ON INSTAGRAM</h1>
          <p className="mt-4 text-white">Behind Every Swipe, There’s a Story to Tell. Join us on Instagram for a peek into our world!</p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <Image src={circle} alt="circle" />
            <span>@Productionx</span>
            <Image src={verified} alt="verified" />
            <button className="flex items-center space-x-2 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300">
              <FaInstagram />
              <Link href="https://www.instagram.com/cribonix/" target="_blank" rel="noopener noreferrer">Follow Us</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-1/2">
            <Image src={mountain} alt="Mountain" className="h-[500px] w-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <Image src={g1} alt="Gallery Image 1" className="h-[250px] w-full object-cover" />
            <Image src={g2} alt="Gallery Image 2" className="h-[250px] w-full object-cover" />
            <div className="flex gap-4">
              <Image src={g3} alt="Gallery Image 3" className="h-[250px] w-1/2 object-cover" />
              <Image src={g4} alt="Gallery Image 4" className="h-[250px] w-1/2 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
