"use client";

import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import throttle from 'lodash/throttle';
import Hero from '../Hero/Hero';

// Initialize the Inter font with the correct weight
const inter = Inter({
  weight: ['900'],
  subsets: ['latin'],
});

// Define maxScale and maxScroll outside of useEffect
const maxScroll = 1000;
const maxScale = 1000;

const Homei: React.FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [showHero, setShowHero] = useState<boolean>(false);

  useEffect(() => {
    const throttledHandleScroll = throttle(() => {
      const scrollTop = window.scrollY;

      // Calculate the new scale based on scroll position
      const newScale = 1 + (scrollTop / maxScroll) * (maxScale - 1);

      // Clamp the scale between 1 and maxScale
      const clampedScale = Math.min(Math.max(newScale, 1), maxScale);

      if (clampedScale !== scale) {
        setScale(clampedScale);
      }

      // If the maximum scale is reached, show the Hero component
      if (clampedScale >= maxScale) {
        window.removeEventListener('scroll', throttledHandleScroll);
        throttledHandleScroll.cancel();
        setShowHero(true);
      }
    }, 100);

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [scale]);

  // Define fadeOutScale and calculate progress
  const fadeOutScale = 10; // Adjust this value as needed
  const progress = Math.min((scale - 1) / (fadeOutScale - 1), 1);

  return (
    <>
      {showHero ? (
        <Hero />
      ) : (
        <div className="relative flex justify-center items-center min-h-screen w-full bg-black overflow-hidden">
          {/* Background Text with Dynamic Scaling */}
          <div
            className={`${inter.className} absolute text-6xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-blue-500 font-bold text-center`}
            style={{
              top: '45%',
              transform: `scale(${scale}) scaleX(1.2)`,
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center',
            }}
          >
            CRIBONIX
          </div>

          {/* Overlayed Text (Responsive) */}
          <div className="absolute text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-bold text-center z-10">
            <div
              className="transition-all duration-500"
              style={{
                transform: `translateY(-${progress * 50}px)`,
                opacity: `${1 - progress}`,
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            >
              <h1>Your Vision</h1>
              <h1>Our Mastery.</h1>
              <div className="flex flex-col items-center space-y-2 mt-4">
                <p className="text-white text-base md:text-lg">
                  Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci
                </p>
                <p className="text-white text-base md:text-lg">
                  Enim erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
                </p>
                {/* Buttons */}
                <div className="flex space-x-4 mt-6">
                  <button
                    className="text-2xl border border-[#383838] text-white rounded-full py-3 px-6 hover:bg-white hover:text-black transition"
                    aria-label="Contact Us"
                  >
                    Contact Us
                  </button>
                  <button
                    className="text-2xl border border-[#383838] text-white rounded-full py-3 px-6 hover:bg-white hover:text-black transition"
                    aria-label="View Portfolio"
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homei;
