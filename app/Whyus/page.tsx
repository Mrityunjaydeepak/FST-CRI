"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import imgcont from './Container.png';
import Button from '../Components/Button';
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
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Whyus = () => {
  // Array of image imports
  const images = [
    panel1,  // 01
    panel2,  // 02
    panel3,  // 03
    // 04 (You can replace this with another image if available)
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State to handle fade animation
  const [isFading, setIsFading] = useState(false);

  // Handler for button clicks
  const handleButtonClick = (index:number) => {
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
    <div className="flex flex-col min-h-screen px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Image Section */}
      <div className="relative w-full mt-24 h-auto sm:h-128 md:h-160">
        <Image
          src={imgcont}
          alt="Why Us Background Image"
          layout="responsive"
          width={1200} // Maintain original aspect ratio
          height={600}
          className="object-cover opacity-50 rounded-md"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-8 md:p-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-left text-white">
            Mastering Every <span className="block"> Digital Move.</span>
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 space-y-8 lg:space-y-0 lg:space-x-40">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-left text-md sm:text-lg md:text-xl text-gray-200">
            Where Aloo meets the Samosa<br /> <br />

            At Cribonix, we're the “Bahubali” of <br />digital marketing—always delivering <br />what your brand needs. With blockbuster strategies, superstar <br />solutions, and a script for success, we make sure your brand hits the spotlight.<br />
            Ready for a “Dhoom”<br /> of growth? We’ve got your back!
          </p>
        </div>

        {/* Right Content: Metrics */}
        <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-16">
          {/* Metric 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ads <br />
              Management
            </h2>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white mt-4">+500K</h1>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Years of <br />
              Experience
            </h2>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white mt-4">+10</h1>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Successful <br />
              Projects
            </h2>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white mt-4">+400</h1>
          </div>
        </div>
      </div>

      {/* How We Started */}
      <div className="flex flex-col p-4 border-t-2 border-secondary mb-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            Cribonix Insights: The Power <br /> Behind Our Strategies
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-12 w-full sm:space-x-16">
            {/* Left Description */}
            <div className="flex-1 space-y-4">
              <h2 className="text-white text-4xl sm:text-5xl font-bold text-left">
                Where smart strategies meet creativity,<br /> we lift brands to new heights.<br /> Discover how knowledge drives<br /> our innovative solutions!
              </h2>
              <h2 className="text-white text-md sm:text-lg text-left">
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
                className="w-full sm:w-48"
              />
            </div>

            {/* Right Image */}
            <div className="flex-1 mt-8 sm:mt-0">
              <Image
                src={team}
                alt="Team Image"
                width={500}
                height={500}
                className="object-cover opacity-100 rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="flex flex-col p-4 border-t-2 border-secondary mb-8">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl sm:text-6xl md:text-7xl font-bold text-white text-center">
            THE VALUES THAT DRIVE, <br />EVERYTHING WE DO
          </h1>
          <h2 className="text-lg sm:text-xl text-white font-light text-center mt-4">
            - More than goals. We’re on a mission. <br />
            Our values are the fuel behind every campaign, strategy and breakthrough
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-5 mt-8">
          {/* Dynamic Image Section */}
          <div className="relative w-full sm:w-2/3 lg:w-1/2 transition-opacity duration-500">
            <Image
              src={images[currentImageIndex]}
              alt={`Quality Image ${currentImageIndex + 1}`}
              layout="responsive"
              width={800}
              height={600}
              className={`object-cover rounded-md shadow-lg ${isFading ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-row sm:flex-col justify-center items-center space-x-4 sm:space-x-0 sm:space-y-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-12 h-12 sm:w-16 sm:h-16 text-lg bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors duration-100 focus:outline-none ${
                  currentImageIndex === index ? 'bg-white text-black' : ''
                }`}
                aria-label={`Display image ${index + 1}`}
              >
                {`0${index + 1}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-t-2 border-secondary mt-24 p-8 space-y-8 sm:space-y-0">
        <h1 className="text-6xl sm:text-7xl text-left font-bold text-white">
          OUR TRUSTED <br /> CLIENTS
        </h1>
        <h2 className="text-md sm:text-lg text-white text-center sm:text-left">
          Collaborating with the best to bring their visions to life.<br />
          From emerging startups to established brands, we’re <br />
          honoured to be the trusted digital partner that helps <br />
          them thrive in the modern market.
        </h2>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-t-2 border-secondary mt-24 p-8 space-y-8 sm:space-y-0">
        {/* (Assuming testimonials content goes here) */}
      </div>

      {/* Our Team */}
      <div className="flex flex-col p-4 border-t-2 border-secondary mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-9 space-y-8 sm:space-y-0 sm:space-x-40">
          {/* Left Content */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white text-center sm:text-left">
              MEET OUR TEAM
            </h1>
            <h2 className="text-md sm:text-lg text-white text-center sm:text-left">
              The brains behind the brilliance, the faces behind the flair.<br />
              Meet the dreamers, creators and doers shaping Cribonix’s magic.
            </h2>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <Button
              text="Join Us"
              href="/Portfolio"
              variant="primary"
              ariaLabel="Join Us"
              className="w-full sm:w-48"
            />
            <Button
              text="Browse all members"
              href="/Portfolio"
              variant="primary"
              ariaLabel="Browse all members"
              className="w-full sm:w-48"
            />
          </div>
        </div>

        {/* Team Members */}
        <div className="flex flex-col sm:flex-row justify-between mt-12 space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem1}
              alt="Member 1"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">Hi! my Name is</p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem2}
              alt="Member 2"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">Hi! my Name is</p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem3}
              alt="Member 3"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">Hi! my Name is</p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem4}
              alt="Member 4"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">Hi! my Name is</p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="flex flex-col p-4 border-t-2 border-secondary mb-8">
        <div className="flex justify-center">
          <h1 className="font-extrabold text-white text-6xl text-center mb-8">
            VISIT OUR OFFICE
          </h1>
        </div>
        <div className="relative flex justify-center transition-opacity duration-500">
          <Image
            src={office}
            alt="Office Background"
            width={990}
            height={990}
            className="object-cover rounded-md shadow-lg opacity-80"
          />
        </div>
      </div>

      {/* Follow us on Instagram */}
      <div className="flex flex-col p-4 border-t-2 border-secondary mb-8">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-extrabold text-6xl text-center">
            FOLLOW OUR WORK <br /> ON INSTAGRAM
          </h1>
          <h2 className="text-md text-white text-center mt-4">
            Behind Every Swipe, There’s a Story to Tell.<br />
            Join us on Instagram for a peek into our world!
          </h2>
          <div className="flex flex-row items-center justify-center space-x-4 mt-8">
            <Image src={circle} alt="Circle Icon" width={24} height={24} />
            <span className="text-white font-bold">@Productionx</span>
            <Image src={verified} alt="Verified Icon" width={24} height={24} />
            <button className="flex items-center space-x-2 px-4 py-2 border border-secondary rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300">
              <FaInstagram />
              <span>Follow us</span>
              <Link href="https://www.instagram.com/cribonix/" target="_blank" rel="noopener noreferrer"></Link>
            </button>
          </div>
        </div>

        {/* Instagram Images */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          {/* Mountain Image */}
          <div className="flex-1">
            <Image
              src={mountain}
              alt="Mountain"
              width={500}
              height={550}
              className="object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Grid of Images */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4">
              <Image
                src={g1}
                alt="Gallery 1"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
              />
              <Image
                src={g2}
                alt="Gallery 2"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
              />
            </div>
            <div className="flex gap-4">
              <Image
                src={g3}
                alt="Gallery 3"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
              />
              <Image
                src={g4}
                alt="Gallery 4"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
