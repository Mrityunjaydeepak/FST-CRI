// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { Inter } from "next/font/google";
// import throttle from "lodash/throttle";
// import Hero from "../Hero/Hero";
// import Link from "next/link";

// const inter = Inter({
//   weight: ["900"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const Homei: React.FC = () => {
//   const [scale, setScale] = useState<number>(1);
//   const [progress, setProgress] = useState<number>(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = throttle(() => {
//       if (containerRef.current) {
//         const scrollY = window.scrollY;
//         const windowHeight = window.innerHeight;
//         const elementHeight = containerRef.current.offsetHeight;
//         const elementTop = containerRef.current.offsetTop;

//         const scrollMultiplier = 5;

//         const maxScroll =
//           (elementTop + elementHeight - windowHeight) * scrollMultiplier;

//         const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
//         setProgress(progress);

//         const maxScale = 100;
//         const newScale = 1 + progress * (maxScale - 1);
//         setScale(newScale);
//       }
//     }, 10);

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       handleScroll.cancel();
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="relative flex flex-col md:mt-16  items-center min-h-screen w-full px-4 bg-black overflow-hidden"
//       >
//         {/* Background Text */}
//         <div
//           className={`${inter.className} absolute z-0 text-[4rem] sm:text-[3rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] text-transparent bg-clip-text bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] font-bold text-center`}
//           style={{
//             top: "32%",
//             left: "50%",
//             transform: `translate(-50%, -50%) scale(${scale})`,
//             transition: "transform 0.4s ease-out",
//             transformOrigin: "center",
//             whiteSpace: "nowrap",
//             opacity: 0.7, // Adjust this value to control the dullness
//           }}
//         >
//           CRIBONIX
//         </div>

//         {/* Overlayed Content */}
//         <div
//           className="absolute z-10 flex flex-col items-center text-center px-4"
//           style={{
//             top: "40%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <h1
//             className="text-xl sm:text-xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold"
//             style={{
//               transform: `translateY(-${progress * 50}px)`,
//               opacity: 1 - progress,
//               transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
//             }}
//           >
//             Your Story, Our Influence.
//           </h1>
//           <p
//             className="text-white text-base sm:text-sm md:text-xl mt-4 sm:mt-6 px-4 sm:px-6 md:px-0 max-w-full sm:max-w-3xl md:max-w-2xl"
//             style={{
//               transform: `translateY(${progress * 90}px)`,
//               opacity: 1 - progress,
//               transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
//             }}
//           >
//             Want your brand's story to echo through time? Let Cribonix weave
//             your narrative into an unforgettable legacy!
//           </p>

//           {/* Buttons */}
//           <div
//             className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
//             style={{
//               transform: `translateY(${progress * 60}px)`,
//               opacity: 1 - progress,
//               transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
//             }}
//           >
//             <Link href="/Contact">
//               <button
//                 className="text-sm sm:text-lg border border-[#383838] bg-white text-black rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] hover:text-white transition duration-300 w-40 sm:w-52"
//                 aria-label="Contact Us"
//               >
//                 Contact Us
//               </button>
//             </Link>
//             <Link href="/Portfolio">
//               <button
//                 className="text-sm sm:text-lg border border-[#383838] text-white rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:bg-white hover:text-black transition duration-300 w-40 sm:w-52"
//                 aria-label="View Portfolio"
//               >
//                 View Portfolio
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Hero />
//     </>
//   );
// };

// export default Homei;


"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import throttle from "lodash/throttle";
import Link from "next/link";
import Hero from "../Hero/Hero";
import logo from "./images/Mask group.png";

// You can keep Inter if you use it elsewhere, or remove if not needed:
const inter = Inter({
  weight: ["900"],
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

        // Adjust "scrollMultiplier" and "maxScale" as you like
        const scrollMultiplier = 5;
        const maxScale = 100; // used below to create a big scaling effect

        const maxScroll =
          (elementTop + elementHeight - windowHeight) * scrollMultiplier;

        const progressVal = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        setProgress(progressVal);

        // Scale from 1 up to maxScale:
        const newScale = 1 + progressVal * (maxScale - 1);
        setScale(newScale);
      }
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount to set initial values

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
       className="relative flex flex-col md:mt-16 items-center min-h-screen w-full px-0 sm:px-4 bg-black overflow-hidden"
      >
        {/* 
          Absolute container for the image. 
          "w-full" + "max-w-[1000px]" => ensures it shrinks on smaller screens.
        */}
        <div
          className="absolute z-0 w-full max-w-[1000px]"
          style={{
            top: "29%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${scale})`,
            transformOrigin: "52% 60%",
            transition: "transform 0.4s ease-out",
            opacity: 0.9, // Adjust if you want the image more/less transparent
          }}
        >
          <Image
            src={logo}
            alt="Your Brand Logo"
            width={2000}
            height={1000}
            priority
            // Ensure the image scales proportionally:
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
          />
        </div>

        {/* Overlayed Content (Heading, Subheading, Buttons) */}
        <div
          className="absolute z-10 flex flex-col items-center text-center px-4"
          style={{
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Centering container for text */}
          <div className="mx-auto w-screen sm:w-auto max-w-xl md:max-w-2xl">
  <h1
    className="text-xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center"
    style={{
      transform: `translateY(-${progress * 50}px)`,
      opacity: 1 - progress,
      transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
    }}
  >
    Your Story, Our Influence.
  </h1>
  <p
     className="text-white text-base sm:text-lg md:text-xl mt-16 sm:mt-12 leading-relaxed text-center w-screen sm:w-auto px-0 sm:px-6 md:px-0  sm:text-center"
     style={{
       transform: `translateY(${progress * 90}px)`,
       opacity: 1 - progress,
       transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
     }}
  >
    Want your brand&apos;s story to echo through time? Let Cribonix weave your 
    narrative into an unforgettable legacy!
  </p>
</div>


          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
            style={{
              transform: `translateY(${progress * 60}px)`,
              opacity: 1 - progress,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <Link href="/Contact">
              <button
                className="text-sm sm:text-lg border border-[#383838] bg-white text-black rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] hover:text-white transition duration-300 w-40 sm:w-52"
                aria-label="Contact Us"
              >
                Contact Us
              </button>
            </Link>
            <Link href="/Portfolio">
              <button
                className="text-sm sm:text-lg border border-[#383838] text-white rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:bg-white hover:text-black transition duration-300 w-40 sm:w-52"
                aria-label="View Portfolio"
              >
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero component below */}
      <Hero />
    </>
  );
};

export default Homei;

