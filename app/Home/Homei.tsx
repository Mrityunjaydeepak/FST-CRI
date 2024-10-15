// components/Homei.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import throttle from 'lodash/throttle';
import { useRouter } from 'next/navigation';

// Initialize the Inter font with the correct weight
const inter = Inter({
  weight: ['900'], // Changed to an array for type safety
  subsets: ['latin'],
});

const Homei: React.FC = () => {
  const [scale, setScale] = useState<number>(1); // Initial scale
  const router = useRouter();

  useEffect(() => {
    const maxScroll = 1000; // Scroll value at which scaling stops
    const maxScale = 1000; // Maximum scale factor for the text

    // Throttled scroll handler to optimize performance
    const throttledHandleScroll = throttle(() => {
      const scrollTop = window.scrollY;

      // Calculate the new scale based on scroll position
      const newScale = 1 + (scrollTop / maxScroll) * (maxScale - 1);

      // Clamp the scale between 1 and maxScale
      const clampedScale = Math.min(Math.max(newScale, 1), maxScale);

      setScale(clampedScale);

      // If the maximum scale is reached, navigate to the next page/component
      if (clampedScale >= maxScale) {
        // Remove the scroll listener to prevent multiple navigations
        window.removeEventListener('scroll', throttledHandleScroll);
        // Navigate to the target route
        router.push('/anotherPage'); // Replace '/anotherPage' with your desired route
      }
    }, 100); // Throttle interval set to 100ms

    // Add the scroll event listener
    window.addEventListener('scroll', throttledHandleScroll);

    // Cleanup function to remove the event listener and cancel throttling
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [router]);

  // Calculate progress based on scale
  const progress = (scale - 1) / (3 - 1); // (scale -1)/(maxScale -1), maxScale=3

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full bg-black overflow-hidden">
      {/* Background Text with Dynamic Scaling */}
      <div
        className={`${inter.className} absolute text-6xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-blue-500 font-bold text-center`}
        style={{
          top: '45%',
          transform: `scale(${scale}) scaleX(1.2)`, // Apply dynamic scale and scaleX
          transition: 'transform 0.2s ease-out', // Smooth transition
          transformOrigin: 'center',
        }}
      >
        CRIBONIX
      </div>

      {/* Overlayed Text (Responsive) */}
      <div className="absolute text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-bold text-center z-10">
        {/* Existing Text */}
        <div
          className="transition-all duration-200"
          style={{
            transform: `translateY(-${progress * 50}px)`,
            opacity: `${1 - progress}`,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
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

        {/* New Text */}
        <div
          className="mt-10 transition-all duration-200"
          style={{
            transform: `translateY(${progress * 50}px)`,
            opacity: `${1 - progress}`,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          }}
        >
          
        </div>
      </div>
    </div>
  );
};

export default Homei;
