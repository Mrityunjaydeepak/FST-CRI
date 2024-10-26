"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "./Logo.png"
// Remove unnecessary imports
// import Whyus from '../Pages/Whyus/page';
// import Services from '../Pages/Services/page';

// Option 1: If using the public directory for the logo
// No need to import the logo
// If you choose Option 2, uncomment the import below and adjust accordingly
// import logo from './Logo.png'; // Adjust if necessary

function Navbar() {
  const pathname = usePathname(); // Use usePathname for current path

  const navItems = [

    { name: 'Home', href: '/Home' },
    { name: 'Why Us', href: '/Whyus' },
    { name: 'Services', href: '/Services' },
    { name: 'Solutions', href: '/Solutions' },
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'New Project', href: '/Newproject' },
  ];

  return (
    <div className='bg-[#040404] text-white p-3 mx-4 w-full rounded-full flex justify-between items-center'>
      <div>
        {/* Option 1: Using the public directory */}
        <Image src={logo} alt='logo' width={100} height={100} />
        
        {/* Option 2: Importing the logo */}
        {/* <Image src={logo} alt='logo' width={100} height={100} /> */}
      </div>

      <nav className='flex space-x-4'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`cursor-pointer hover:text-blue-500 ${
              pathname === item.href ? 'text-blue-500 font-semibold' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div>
        <button 
        
        className='text-white p-3 border border-[#383838] rounded-full hover:bg-white hover:text-black'>
          
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
