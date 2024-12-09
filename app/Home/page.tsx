// Homei.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { Inter } from "next/font/google";
import throttle from "lodash/throttle";
import Hero from "../Hero/Hero";
import Link from "next/link";
// Initialize the Inter font with the correct weight
const inter = Inter({
  weight: ["900"], // Using array for type safety
  subsets: ["latin"],
  display: "swap",
});

const Homei: React.FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementHeight = containerRef.current.offsetHeight;
        const elementTop = containerRef.current.offsetTop;

        // Adjust this multiplier to control the scroll distance
        const scrollMultiplier = 5; // Can be adjusted if needed

        const maxScroll =
          (elementTop + elementHeight - windowHeight) * scrollMultiplier;

        // Calculate progress from 0 to 1 over the adjusted scroll range
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        setProgress(progress);

        // Calculate scale to make the text fill the screen
        const maxScale = 100; // Reduced from 100 to prevent overflow
        const newScale = 1 + progress * (maxScale - 1);
        setScale(newScale);
      }
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call handleScroll once to set initial state
    handleScroll();

    // Cleanup function to remove the event listener and cancel throttling
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex flex-col md:mt-16 mt-32 items-center min-h-screen w-full px-4 bg-black overflow-hidden"
      >
        {/* Background Text with Dynamic Scaling */}
        <div
          className={`${inter.className} absolute text-[4rem] sm:text-[3rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] text-transparent bg-clip-text bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] font-bold text-center`}
          style={{
            top: "28%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${scale})`,
            transition: "transform 0.6s ease-out", // Increased transition duration for smoother effect
            transformOrigin: "center",
            whiteSpace: "nowrap", // Prevent text from wrapping
          }}
        >
          CRIBONIX
        </div>

        {/* Overlayed Text (Responsive) */}
        <div
          className="absolute flex flex-col items-center text-center z-10 px-4"
          style={{
            opacity: `${1 - progress * 2}`,
            transition: "opacity 0.4s ease-out", // Increased transition duration for smoother effect
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold">
            Your Story
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold">
            Our Influence
          </h1>
          <div className="flex flex-col items-center space-y-2 mt-6">
            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
              Want your brand's story to echo through time? Let Cribonix weave
              your narrative into an unforgettable legacy!
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              <Link href="/Contact">
                <button
                  className="text-lg sm:text-xl border border-[#383838] bg-white text-black rounded-full py-3 px-8 hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] hover:text-white transition duration-300 w-52"
                  aria-label="Contact Us"
                >
                  Contact Us
                </button>
              </Link>
              <Link href="/Portfolio">
                <button
                  className="text-lg sm:text-xl border border-[#383838] text-white rounded-full py-3 px-8 hover:bg-white hover:text-black transition duration-300 w-52"
                  aria-label="View Portfolio"
                >
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Component Always Present, but opacity adjusted based on progress */}
      <Hero />
    </>
  );
};

export default Homei;
