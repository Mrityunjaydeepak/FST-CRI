"use client";

import Image from "next/image";
import React, { useState } from "react";
import imgcont from "./Container.png";
import Button from "../Components/Button";
import team from "./Team.png";
import mem1 from "./Rectangle 379.png";
import mem2 from "./Rectangle 380.png";
import mem3 from "./Rectangle 381.png";
import mem4 from "./Rectangle 382.png";
import office from "./Officereal.png";
import panel1 from "./Tabpanel(2).png";
import panel2 from "./Tabpanel(1).png";
import panel3 from "./Tabpanel.png";
import mountain from "./mountain.png";
import g1 from "./g1.png";
import g2 from "./g2.png";
import g3 from "./g3.png";
import g4 from "./g4.png";
import circle from "./circle.svg.png";
import verified from "./verified.png";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Whyus = () => {
  // Array of image imports
  const images = [panel1, panel2, panel3];

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
    <div className="bg-[#040404] scroll-smooth">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative w-full mt-12 h-auto sm:h-96 lg:h-[40rem]">
          <Image
            src={imgcont}
            alt="Why Us Background Image"
            layout="responsive"
            width={1200} // Maintain original aspect ratio
            height={600}
            className="object-cover opacity-50 rounded-md"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-left text-white">
              Mastering Every <span className="block">Digital Move.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-40">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-left text-sm sm:text-lg md:text-xl text-gray-200">
              Where Aloo meets the Samosa
              <br /> <br />
              At Cribonix, we're the “Bahubali” of <br />
              digital marketing—always delivering <br />
              what your brand needs. With blockbuster strategies, superstar{" "}
              <br />
              solutions, and a script for success, we make sure your brand hits
              the spotlight.
              <br />
              Ready for a “Dhoom”
              <br /> of growth? We’ve got your back!
            </p>
          </div>

          {/* Right Content: Metrics */}
          <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-16">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Ads <br />
                Management
              </h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">
                +500K
              </h1>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Years of <br />
                Experience
              </h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">
                +10
              </h1>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Successful <br />
                Projects
              </h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">
                +400
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* How We Started */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left Description */}
          <div className="flex-1 space-y-4">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left px-4 sm:px-0">
              Where smart strategies meet creativity,
              <br /> we lift brands to new heights.
              <br /> Discover how knowledge drives
              <br /> our innovative solutions!
            </h2>
            <h2 className="text-white text-sm sm:text-md md:text-lg text-left px-4  py-5 sm:px-0">
              At Cribonix, we harness knowledge and industry insights to create
              <br />
              personalised digital marketing strategies. Our expert team stays
              <br />
              ahead of trends and customer behaviours to help brands stand out.
              <br />
              From SEO to social media, we craft methods that drive real
              <br />
              results, ensuring your brand connects with its audience and grows.
              <br />
              Let us turn our expertise into your brand's success!
            </h2>
            <Button
              text="View Portfolio"
              href="/Portfolio"
              variant="primary"
              ariaLabel="View Portfolio"
              className="w-full sm:w-48 p-3 mt-8"
            />
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-8 sm:mt-0">
            <Image
              src={team}
              alt="Team Image"
              width={600}
              height={500}
              className="object-cover opacity-100 rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            THE VALUES THAT DRIVE, <br />
            EVERYTHING WE DO
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-white font-light text-center px-4">
            - More than goals. We’re on a mission.
            <br />
            Our values are the fuel behind every campaign, strategy, and
            breakthrough.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-8">
          {/* Dynamic Image Section */}
          <div className="relative w-full lg:w-2/3 transition-opacity duration-500">
            <Image
              src={images[currentImageIndex]}
              alt={`Quality Image ${currentImageIndex + 1}`}
              layout="responsive"
              width={1500}
              height={900}
              className={`rounded-md shadow-lg ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-row lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors duration-100 focus:outline-none ${
                  currentImageIndex === index ? "bg-white text-black" : ""
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
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary">
        <div className="flex flex-col lg:flex-row sm:items-center sm:justify-center justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-left font-bold text-white lg:text-left px-4">
            OUR TRUSTED <br /> CLIENTS
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg text-white text-center lg:text-left px-4">
            Collaborating with the best to bring their visions to life.
            <br />
            From emerging startups to established brands, we’re
            <br />
            honoured to be the trusted digital partner that helps
            <br />
            them thrive in the modern market.
          </h2>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* ...Assuming testimonials content goes here... */}

      {/* Our Team */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          {/* Left Content */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center lg:text-left px-4 sm:px-0">
              MEET OUR TEAM
            </h1>
            <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-white text-center lg:text-left px-4 sm:px-0">
              The brains behind the brilliance, the faces behind the flair.
              <br />
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
              alt="Herman Defoe"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem2}
              alt="Herman Defoe"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem3}
              alt="Herman Defoe"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem4}
              alt="Herman Defoe"
              width={250}
              height={200}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-2">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-md">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary">
        <div className="flex justify-center mb-8">
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl text-center px-4">
            VISIT OUR OFFICE
          </h1>
        </div>
        <div className="relative flex justify-center transition-opacity duration-500">
          <Image
            src={office}
            alt="Office Background"
            width={1500}
            height={990}
            className="object-cover rounded-md shadow-lg opacity-80"
          />
        </div>
      </div>

      {/* Follow us on Instagram */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center px-4">
            FOLLOW OUR WORK <br /> ON INSTAGRAM
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-white text-center px-4">
            Behind Every Swipe, There’s a Story to Tell.
            <br />
            Join us on Instagram for a peek into our world!
          </h2>
          <div className="flex flex-row items-center justify-center space-x-4 mt-8">
            <Image src={circle} alt="Circle Icon" width={24} height={24} />
            <span className="text-white font-bold">@Productionx</span>
            <Image src={verified} alt="Verified Icon" width={24} height={24} />
            <Link
              href="https://www.instagram.com/cribonix/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border sm:text-sm  border-secondary rounded-full text-white hover:bg-white hover:text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-colors duration-300"
            >
              <FaInstagram />
              <span>Follow us</span>
            </Link>
          </div>
        </div>

        {/* Instagram Images */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-8">
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
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex flex-col sm:flex-row gap-4">
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
