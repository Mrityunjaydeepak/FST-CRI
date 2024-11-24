// Navbar.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "./images/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger icons

function Navbar() {
  const pathname = usePathname(); // Use usePathname for current path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu

  const navItems = [
    { name: 'Home', href: '/Home' },
    { name: 'Why Us', href: '/Whyus' },
    { name: 'Services', href: '/Services' },
    { name: 'Solutions', href: '/Solutions' },
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'New Project', href: '/Newproject' },
  ];

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#040404] text-white px-4 sm:px-8 md:px-16 lg:px-24 py-4 rounded-full relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/Home" className="flex items-center justify-center">
            <Image src={logo} alt='logo' width={150} height={100} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`cursor-pointer hover:text-blue-500 transition ${
                pathname === item.href ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link href="/Contact" className="inline-block">
            <span className='text-white px-6 py-3 border border-[#383838] rounded-full hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2]  hover:text-white transition cursor-pointer'>
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu" className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-[#040404] text-white z-30 transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-start p-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`text-lg hover:text-blue-500 transition ${
                pathname === item.href ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* Contact Us Button in Mobile Menu */}
          <Link href="/Contact" className="w-full">
            <span className='w-full text-white px-4 py-2 border border-[#383838] rounded-full hover:bg-white hover:text-black transition cursor-pointer text-center'>
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
