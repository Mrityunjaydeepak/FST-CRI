import React from 'react';
import Image from 'next/image';
import logo from './Logo.png';

function Navbar() {
  return (
    <div className='bg-[#040404] text-white p-3 mx-4 w-full rounded-full flex justify-between items-center'>
      <div>
        <Image src={logo} alt='logo' width={100} height={100} />
      </div>

      <nav className='flex space-x-4'>
        {['Home', 'Why Us', 'Services', 'Solutions', 'Portfolio', 'New Project'].map((item) => (
          <div key={item} className='cursor-pointer'>
            {item}
          </div>
        ))}
      </nav>

      <div>
        <button className='text-white p-3 border border-[#383838] rounded-full'>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
