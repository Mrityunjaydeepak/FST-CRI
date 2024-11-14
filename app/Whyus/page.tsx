"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, FC } from "react";
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

// Define the structure of a metric
interface Metric {
  title: string;
  value: string;
}

const Whyus: FC = () => {
  const images: StaticImageData[] = [panel1, panel2, panel3];
  const metrics: Metric[] = [
    {
      title: "Ads Management",
      value: "+500K",
    },
    {
      title: "Years of Experience",
      value: "+10",
    },
    {
      title: "Successful Projects",
      value: "+400",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  const [currentMetricIndex, setCurrentMetricIndex] = useState<number>(0);
  const [isMetricVisible, setIsMetricVisible] = useState<boolean>(false);
  const metricsRef = useRef<HTMLDivElement | null>(null);

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

  // Metrics Animation Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsMetricVisible(true);
        } else {
          setIsMetricVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let metricInterval: NodeJS.Timeout;

    if (isMetricVisible) {
      metricInterval = setInterval(() => {
        setCurrentMetricIndex((prevIndex) =>
          prevIndex === metrics.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change metric every 3 seconds
    } else {
      clearInterval(metricInterval);
    }

    return () => clearInterval(metricInterval);
  }, [isMetricVisible, metrics.length]);

  return (
    <div className="bg-[#040404] scroll-smooth">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative w-full h-auto sm:h-96 lg:h-[40rem]">
          <Image
            src={imgcont}
            alt="Why Us Background Image"
            layout="fill"
            objectFit="cover"
            className="object-cover opacity-50 rounded-md"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Mastering Every <span className="block">Digital Move.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-left text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              <span className="font-semibold">Where Aloo meets the Samosa</span>

              <br className="hidden sm:block" />

              At Cribonix, we're the “Bahubali” of digital marketing—always delivering what your brand needs. With blockbuster strategies, superstar solutions, and a script for success, we make sure your brand hits the spotlight.

              <br className="hidden sm:block" />

              Ready for a “Dhoom” of growth? We’ve got your back!
            </p>
          </div>

          {/* Right Content: Metrics */}
          <div
            className="w-full lg:w-1/2 relative h-40 sm:h-48 md:h-56 lg:h-64 flex justify-center items-center overflow-hidden"
            ref={metricsRef}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  currentMetricIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                  {metric.title}
                </h2>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
                  {metric.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Started */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Description */}
          <div className="flex-1 space-y-6">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where smart strategies meet creativity, we lift brands to new heights. Discover how knowledge drives our innovative solutions!
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              At Cribonix, we harness knowledge and industry insights to create personalised digital marketing strategies. Our expert team stays ahead of trends and customer behaviours to help brands stand out. From SEO to social media, we craft methods that drive real results, ensuring your brand connects with its audience and grows. Let us turn our expertise into your brand's success!
            </p>
            <Link href="/Portfolio">
              <button className="border text-base sm:text-lg md:text-xl border-secondary rounded-full px-6 py-3 text-white hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition">
                Portfolio
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={team}
              alt="Team Image"
              width={600}
              height={500}
              className="object-cover rounded-md shadow-lg"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            THE VALUES THAT DRIVE, <br />
            EVERYTHING WE DO
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-white font-light text-center">
            - More than goals. We’re on a mission.
            <br />
            Our values are the fuel behind every campaign, strategy, and breakthrough.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 mt-12">
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
          <div className="flex flex-row lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base bg-black rounded-full hover:text-white transition-colors duration-300 focus:outline-none flex items-center justify-center ${
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              OUR TRUSTED <br /> CLIENTS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              Collaborating with the best to bring their visions to life. From emerging startups to established brands, we’re honoured to be the trusted digital partner that helps them thrive in the modern market.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              MEET OUR TEAM
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              The brains behind the brilliance, the faces behind the flair. Meet the dreamers, creators, and doers shaping Cribonix’s magic.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center items-center lg:items-start">
            <Button
              text="Join Us"
              href="/Contact"
              variant="primary"
              ariaLabel="Join Us"
              className="w-full sm:w-40 p-3 flex justify-center items-center hover:text-white hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition"
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
              layout="responsive"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Herman Defoe</h2>
            <h3 className="text-white text-md font-light">CEO & Founder</h3>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem2}
              alt="Jane Doe"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
              layout="responsive"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Jane Doe</h2>
            <h3 className="text-white text-md font-light">Marketing Head</h3>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem3}
              alt="John Smith"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
              layout="responsive"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">John Smith</h2>
            <h3 className="text-white text-md font-light">Creative Director</h3>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem4}
              alt="Emily Davis"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
              layout="responsive"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Emily Davis</h2>
            <h3 className="text-white text-md font-light">Lead Designer</h3>
          </div>
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex justify-center mb-8 sm:mb-12">
          <h1 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl text-center">
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
            layout="responsive"
          />
        </div>
      </div>

      {/* Follow us on Instagram */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center">
            FOLLOW OUR WORK <br /> ON INSTAGRAM
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-white text-center">
            Behind Every Swipe, There’s a Story to Tell.
            <br />
            Join us on Instagram for a peek into our world!
          </h2>
          <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
            <Image src={circle} alt="Circle Icon" width={24} height={24} />
            <span className="text-white font-bold">@Productionx</span>
            <Image src={verified} alt="Verified Icon" width={24} height={24} />
            <Link
              href="https://www.instagram.com/cribonix/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 border border-secondary rounded-full text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-colors duration-300"
            >
              <FaInstagram />
              <span>Follow us</span>
            </Link>
          </div>
        </div>

        {/* Instagram Images */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center mt-8 sm:mt-12">
          {/* Mountain Image */}
          <div className="flex w-full lg:w-1/2">
            <Image
              src={mountain}
              alt="Mountain"
              width={530}
              height={550}
              className="object-cover rounded-md shadow-lg"
              layout="responsive"
            />
          </div>

          {/* Grid of Images */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6 sm:gap-8">
            <div className="flex flex-row gap-4 sm:gap-6">
              <Image
                src={g1}
                alt="Gallery 1"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
                layout="responsive"
              />
              <Image
                src={g2}
                alt="Gallery 2"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
                layout="responsive"
              />
            </div>
            <div className="flex flex-row gap-4 sm:gap-6">
              <Image
                src={g3}
                alt="Gallery 3"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
                layout="responsive"
              />
              <Image
                src={g4}
                alt="Gallery 4"
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
