import React from "react";
import Image from "next/image";
import footerbg from "./images/footerbg.png";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Parent Container with Responsive Margins */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24">
        <footer className="relative min-h-[600px] w-auto mt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={footerbg} // Replace with your image path
              alt="Footer Background"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#040404] via-10% to-transparent opacity-90 z-10"></div>

          {/* Content over the Image */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            {/* Heading Section */}
            <div className="flex flex-col mt-8 mb-8 text-center">
              <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold mb-4">
                Let's Work
              </h2>
              <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold">
                Together!
              </h2>
            </div>

            {/* Social Icons, Email, and Get in Touch */}
            <div className="flex flex-col sm:flex-row justify-center items-center mt-8 mb-8 space-y-4 sm:space-y-0 sm:space-x-5">
              {/* Social Icons */}
              <div className="flex justify-center space-x-5">
                <a
                  href="https://www.facebook.com/cribonix0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-500 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/cribonix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>
              </div>

              {/* Email Address */}
              <div className="flex items-center border border-white border-t-0 border-b-0 px-4 py-2">
                <h1 className="text-white text-lg sm:text-xl">
                  Collab@Cribonix.com
                </h1>
              </div>

              {/* Get in Touch */}
              <div className="flex items-center">
                <Link href="/Contact">
                  <h1 className="text-white text-lg sm:text-xl flex items-center cursor-pointer">
                    Get in touch
                    <FaArrowAltCircleRight className="ml-2 text-xl sm:text-2xl" />
                  </h1>
                </Link>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex justify-center w-full">
              <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border mx-32 border-secondary border-b-2 border-l-0 border-r-0 border-t-2 pt-3 pb-3 w-full">
                <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Why Us", href: "/Whyus" },
                    { name: "Services", href: "/Services" },
                    { name: "Solutions", href: "/Solutions" },
                    { name: "Portfolio", href: "/Portfolio" },
                    { name: "Blogs", href: "/Blogs" },
                    { name: "New Project", href: "/Newproject" },
                  ].map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="cursor-pointer hover:text-blue-500 transition text-center"
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Additional Text */}
            <div className="flex flex-col mt-8 px-4 sm:px-8 text-center">
              <h1 className="text-white text-sm sm:text-base">
                At Cribonix, we blend creativity with strategy to craft
                compelling digital marketing solutions.
                <br /> Our passion is transforming brands into influential
                stories that resonate with audiences and drive results.
              </h1>
            </div>

            {/* Copyright and Links */}
            <div className="flex justify-between items-center w-full mt-4 px-4 sm:px-8">
              {/* Left: Copyright */}
              <h1 className="text-white text-sm">
                © 2024. All rights reserved.
              </h1>

              {/* Right: Links */}
              <div className="flex space-x-4">
                <Link
                  href="/privacy-policy"
                  className="text-white text-sm hover:text-blue-500 transition"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="text-white text-sm hover:text-blue-500 transition"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Large "CRIBONIX" Text */}
        <div className="flex justify-center items-center bg-black px-4 sm:px-8 md:px-16 lg:px-24 py-8 overflow-hidden">
          <h1 className="font-bold text-white text-6xl sm:text-8xl md:text-7xl lg:text-[8rem]">
            CRIBONIX
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
