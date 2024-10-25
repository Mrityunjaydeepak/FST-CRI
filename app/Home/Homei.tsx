<<<<<<< Updated upstream
// components/Homei.tsx

=======
// Homei.tsx
>>>>>>> Stashed changes
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Inter } from 'next/font/google';
import throttle from 'lodash/throttle';
import { useRouter } from 'next/navigation';

// Initialize the Inter font with the correct weight
const inter = Inter({
  weight: ['900'], // Changed to an array for type safety
  subsets: ['latin'],
});

const Homei: React.FC = () => {
<<<<<<< Updated upstream
  const [scale, setScale] = useState<number>(1); // Initial scale
  const router = useRouter();

  useEffect(() => {
    const maxScroll = 1000; // Scroll value at which scaling stops
    const maxScale = 1000; // Maximum scale factor for the text

    // Throttled scroll handler to optimize performance
    const throttledHandleScroll = throttle(() => {
      const scrollTop = window.scrollY;
=======
  const [scale, setScale] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showHero, setShowHero] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementHeight = containerRef.current.offsetHeight;
        const elementTop = containerRef.current.offsetTop;
>>>>>>> Stashed changes

        // Adjust this multiplier to control the scroll distance
        const scrollMultiplier = 2; // Keep at 1 for now

        const maxScroll = (elementTop + elementHeight - windowHeight) * scrollMultiplier;

<<<<<<< Updated upstream
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
=======
        // Calculate progress from 0 to 1 over the adjusted scroll range
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        setProgress(progress);

        // Calculate scale to make the text fill the screen
        const maxScale = 100; // Adjust this value as needed
        const newScale = 1 + progress * (maxScale - 1);
        setScale(newScale);

        // Show Hero component when progress reaches 1
        if (progress >= 1) {
          setShowHero(true);
        } else {
          setShowHero(false);
        }
      }
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handleScroll once to set initial state
    handleScroll();
>>>>>>> Stashed changes

    // Cleanup function to remove the event listener and cancel throttling
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
<<<<<<< Updated upstream
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
=======
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex flex-col justify-center items-center min-h-screen w-full bg-black overflow-hidden"
      >
        {/* Background Text with Dynamic Scaling */}
        <div
          className={`${inter.className} absolute text-6xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] font-bold text-center`}
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${scale})`,
            transition: 'transform 0.1s linear',
            transformOrigin: 'center',
          }}
        >
          CRIBONIX
        </div>

        {/* Overlayed Text (Responsive) */}
        <div
          className="absolute text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-bold text-center z-10"
          style={{
            opacity: `${1 - progress * 2}`,
            transition: 'opacity 0.1s linear',
          }}
        >
          <h1>.Your Vision</h1>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
      </div>

      {/* Hero Component */}
      {showHero && <Hero />}
    </>
>>>>>>> Stashed changes
  );
};

export default Homei;
