"use client";

import React, { useEffect, useState, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Card from '../Components/Card';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

interface Cribonix {
  subheading?: string;
  description: string;
  height?: string;
  width?: string;
  image?: string;
  link?: string;
}

const Hero: React.FC = () => {
  const cribonix: Cribonix[] = [
    {
      subheading: 'CUSTOMER FIRST',
      description:
        "Customer hi Bhagwaan Hai! We prioritize our customers' needs and preferences, ensuring that every decision we make is driven by their satisfaction and loyalty.",
      height: 'h-64',
      width: 'w-full',
    },
    {
      subheading: 'COLLABORATIVE COMMUNICATION',
      description:
        'Hum Saath Saath Hai! We believe in open and transparent communication, fostering collaboration among teams and clients to achieve common goals effectively.',
      height: 'h-64',
      width: 'w-full',
    },
    {
      subheading: 'CREATIVE EXCELLENCE',
      description:
        'Yeh Apun ka Style Hai! Our approach focuses on creativity, providing innovative solutions that engage audiences and enhance brand storytelling.',
      height: 'h-64',
      width: 'w-full',
    },
    {
      subheading: 'COST VALUATION',
      description:
        'Ab Hoga Sabse Bada Rupaiya! We regularly review and adjust costs to ensure our strategies provide great value and support your business goals.',
      height: 'h-64',
      width: 'w-full',
    },
  ];

  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      defaultAnimation: {
        duration: 500,
      },
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
        '(min-width: 768px)': {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            perView: 2,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');
    const keenSliderPreviousMobile = document.getElementById('keen-slider-previous-mobile');
    const keenSliderNextMobile = document.getElementById('keen-slider-next-mobile');

    const handlePrev = () => {
      keenSlider.prev();
    };

    const handleNext = () => {
      keenSlider.next();
    };

    keenSliderPrevious?.addEventListener('click', handlePrev);
    keenSliderNext?.addEventListener('click', handleNext);
    keenSliderPreviousMobile?.addEventListener('click', handlePrev);
    keenSliderNextMobile?.addEventListener('click', handleNext);

    return () => {
      keenSliderPrevious?.removeEventListener('click', handlePrev);
      keenSliderNext?.removeEventListener('click', handleNext);
      keenSliderPreviousMobile?.removeEventListener('click', handlePrev);
      keenSliderNextMobile?.removeEventListener('click', handleNext);
      keenSlider.destroy();
    };
  }, []);

  const problems: string[] = [
    'Brand Value vs Brand Promotion',
    'Competitive Analysis',
    'Poor SEO Practices',
    'Ineffective Content Strategies',
    'Ad Fatigue',
    'Sustainable Growth',
    'Ineffective Influencer Collaborations',
    'Social Media Management Challenges',
    'Google Business Management',
    'Inability to Measure ROI',
    'Cross-Channel Integration Problems',
    'Growth on a Low Budget',

  ];

  const controlsProblems = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsProblems.start('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controlsProblems]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const problemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4 },
    }),
  };

  return (
    <div className="bg-[#040404]">
      {/* Our Story Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 border-t border-secondary pt-12">
          {/* Our Story Heading */}
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              The Art of<br /> Digital <br /> Marketing
            </h1>
            <Link href="/Contact">
              <button className="border border-secondary rounded-full px-6 py-3 text-white hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition">
                More About Us
              </button>
            </Link>
          </div>
          {/* Our Story Content */}
          <div className="lg:w-2/3 space-y-6">
            <p className="text-[#E9E9E9] text-lg leading-relaxed">
              In a world filled with noise, Cribonix stands out as a master creator, crafting digital stories that truly connect with audiences. We believe every brand has a unique tale to tell, and our mission is to help yours shine. Our passionate team blends innovation with artistry, transforming your vision into an engaging narrative that sparks connections and drives results.
            </p>
            <p className="text-[#E9E9E9] text-lg leading-relaxed">
              With strategies that push boundaries and creativity that knows no limits, we craft campaigns that not only speak but sing to your audience. Are you ready to unlock your brand's potential and start an exciting journey with us? Then let's create magic together!
            </p>
          </div>
        </div>
      </div>

      {/* 4 Cs of Cribonix */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            4 C's of Marketing
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl text-white">
            Unlocking New-Age Marketing: The 4 Pillars of Digital Success by Cribonix
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cribonix.map((item, index) => (
            <Card
              key={index}
              height={item.height}
              width={item.width}
              subheading={item.subheading}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Problems Section */}
      <motion.section
        ref={sectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={controlsProblems}
        className="py-16 bg-primary border-t border-secondary"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Problems
            </h2>
            <p className="mt-4 text-white max-w-2xl mx-auto text-lg">
              The digital realm is full of unwanted and unique problems, but hey! Cribonix turns them into growth opportunities with its smart and creative solutions.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid gap-8 sm:grid-cols-2  lg:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={problemVariants}
                className="bg-secondary rounded-lg shadow-md p-6   hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition duration-300"
              >
                <Link href="/Solutions">
                  <h3 className="text-xl font-semibold   hover:scale-105 cursor-pointer text-white text-center">
                    {problem}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Extended Services Section */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-white leading-tight">
              Building Strategies <br /> and Crafting <span className="text-[#A0A0A0]">Effective <br /> Ideas for Lasting Impressions</span>
            </h1>
          </div>

          {/* Features */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <h2 className="text-white text-2xl">
                <span className="text-[#009DD1] mr-2">|</span> Data-Driven Results
              </h2>
              <p className="text-gray-400 text leading-relaxed">
                We provide clear, actionable insights from every campaign to ensure measurable growth and success.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-white text-2xl">
                <span className="text-[#009DD1] mr-2">|</span> Fast, Result-Driven Execution
              </h2>
              <p className="text-gray-400 text leading-relaxed">
                With our agile approach, we deliver high-impact solutions and measurable results in record time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Statistic Item */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">50,000K+</h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">Spent on Ads</p>
          </div>
          {/* Statistic Item */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">5,000+</h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">Projects Onboarded</p>
          </div>
          {/* Statistic Item */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">500+</h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">
              Delivering an average<br /> 4x ROI for brands
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-primary border-t border-secondary py-16 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Testimonials Heading */}
            <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-bold text-white leading-tight">
                What They Say About Us...
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Discover the impact of our digital marketing strategies through the voices of those who matter most—our clients. Their success stories reflect our commitment to excellence and innovation in every project we undertake.
              </p>
              <div className="flex gap-4 mt-8">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="hidden lg:flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
                >
                  {/* Previous Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="hidden lg:flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
                >
                  {/* Next Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="lg:w-2/3">
              <div id="keen-slider" className="keen-slider">
                {/* Testimonial Slide */}
                <div className="keen-slider__slide">
                  <blockquote className="flex flex-col justify-between bg-[#040404] p-8 sm:p-10 lg:p-12 h-full rounded-lg">
                    <div>
                      <div className="flex gap-1 text-[#009DD1]">
                        {/* Stars */}
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-6">
                        <p className="text-2xl font-bold text-white">Great Service!</p>
                        <p className="mt-4 text-gray-400 leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate quaerat rerum, quas sunt labore perferendis!
                        </p>
                      </div>
                    </div>
                    <footer className="mt-6 text-base font-medium text-gray-400">
                      &mdash; John Doe
                    </footer>
                  </blockquote>
                </div>

                {/* Testimonial Slide */}
                <div className="keen-slider__slide">
                  <blockquote className="flex flex-col justify-between bg-[#040404] p-8 sm:p-10 lg:p-12 h-full rounded-lg">
                    <div>
                      <div className="flex gap-1 text-[#009DD1]">
                        {/* Stars */}
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-6">
                        <p className="text-2xl font-bold text-white">Wonderful Team!</p>
                        <p className="mt-4 text-gray-400 leading-relaxed">
                          Great experience from start to finish. The team was professional and very efficient in getting the project done.
                        </p>
                      </div>
                    </div>
                    <footer className="mt-6 text-base font-medium text-gray-400">
                      &mdash; Jane Smith
                    </footer>
                  </blockquote>
                </div>

                {/* Add more testimonial slides as needed */}
              </div>
            </div>

            {/* Mobile Slider Controls */}
            <div className="flex justify-center gap-4 mt-8 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-mobile"
                className="flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
              >
                {/* Previous Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 -rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                id="keen-slider-next-mobile"
                className="flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
              >
                {/* Next Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
