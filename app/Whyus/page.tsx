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
  const images = [panel1, panel2, panel3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleButtonClick = (index: number) => {
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
    <div className="bg-[#040404] scroll-smooth">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="relative w-full h-auto sm:h-96 lg:h-[40rem]">
          <Image
            src={imgcont}
            alt="Why Us Background Image"
            layout="responsive"
            width={1200}
            height={600}
            className="object-cover opacity-50 rounded-md"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Mastering Every <span className="block">Digital Move.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0 lg:space-x-24">
          {/* Left Content */}
          <div className="flex">
            <p className="text-left text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
              Where Aloo meets the Samosa
              <br /> <br />
              At Cribonix, we're the “Bahubali” of digital marketing—always delivering what your brand needs. With blockbuster strategies, superstar solutions, and a script for success, we make sure your brand hits the spotlight.
              <br />
              Ready for a “Dhoom” of growth? We’ve got your back!
            </p>
          </div>

          {/* Right Content: Metrics */}
          <div className="flex flex-col sm:flex-row justify-between space-y-12 sm:space-y-0 sm:space-x-12">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
                Ads Management
              </h2>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mt-4">
                +500K
              </h1>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
                Years of Experience
              </h2>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mt-4">
                +10
              </h1>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
                Successful Projects
              </h2>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mt-4">
                +400
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* How We Started */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left Description */}
          <div className="flex-1 space-y-6">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Where smart strategies meet creativity, we lift brands to new heights. Discover how knowledge drives our innovative solutions!
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
              At Cribonix, we harness knowledge and industry insights to create personalised digital marketing strategies. Our expert team stays ahead of trends and customer behaviours to help brands stand out. From SEO to social media, we craft methods that drive real results, ensuring your brand connects with its audience and grows. Let us turn our expertise into your brand's success!
            </p>
            <Link href="/Portfolio">
              <button className="border text-xl line-through border-secondary rounded-full px-6 py-3 text-white hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition">
                Portfolio
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <Image
              src={team}
              alt="Team Image"
              width={600}
              height={500}
              className="object-cover rounded-md shadow-lg flex justify-center items-center"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
            THE VALUES THAT DRIVE, <br />
            EVERYTHING WE DO
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white font-light text-center">
            - More than goals. We’re on a mission.
            <br />
            Our values are the fuel behind every campaign, strategy, and breakthrough.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12 mt-12">
          {/* Dynamic Image Section */}
          <div className="relative w-full lg:w-2/3 transition-opacity duration-500">
            <Image
              src={images[currentImageIndex]}
              alt={`Quality Image ${currentImageIndex + 1}`}
              layout="responsive"
              width={1550}
              height={1000}
              className={`rounded-md shadow-lg ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-row lg:flex-col justify-center items-center space-x-6 lg:space-x-0 lg:space-y-6">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-12 h-12 sm:w-14 sm:h-14 text-lg sm:text-xl bg-black rounded-full  hover:text-white transition-colors duration-300 focus:outline-none ${
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
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              OUR TRUSTED <br /> CLIENTS
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Collaborating with the best to bring their visions to life. From emerging startups to established brands, we’re honoured to be the trusted digital partner that helps them thrive in the modern market.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              MEET OUR TEAM
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              The brains behind the brilliance, the faces behind the flair. Meet the dreamers, creators, and doers shaping Cribonix’s magic.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 justify-center items-center">
            <Button
              text="Join Us"
              href="/Contact"
              variant="primary"
              ariaLabel="Join Us"
              className="w-full sm:w-48 p-3 flex justify-center items-center hover:text-white hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2]"
            />
           
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem1}
              alt="Herman Defoe"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg">Herman Defoe</h2>
            <h2 className="text-white text-md font-light">CEO & Founder</h2>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem2}
              alt="Team Member"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg">Jane Doe</h2>
            <h2 className="text-white text-md font-light">Marketing Head</h2>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem3}
              alt="Team Member"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg">John Smith</h2>
            <h2 className="text-white text-md font-light">Creative Director</h2>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem4}
              alt="Team Member"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg">Emily Davis</h2>
            <h2 className="text-white text-md font-light">Lead Designer</h2>
          </div>
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex justify-center mb-12">
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl text-center">
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
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center">
            FOLLOW OUR WORK <br /> ON INSTAGRAM
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white text-center">
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
              className="flex items-center space-x-2 px-6 py-2 border border-secondary rounded-full text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-colors duration-300"
            >
              <FaInstagram />
              <span>Follow us</span>
            </Link>
          </div>
        </div>

        {/* Instagram Images */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center mt-12">
          {/* Mountain Image */}
          <div className="flex">
            <Image
              src={mountain}
              alt="Mountain"
              width={530}
              height={550}
              className="object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Grid of Images */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-8">
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
            <div className="flex flex-row gap-8">
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
