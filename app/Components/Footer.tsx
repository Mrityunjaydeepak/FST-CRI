// Footer.tsx

import React from 'react';
import Image from 'next/image';
import footerbg from './footerbg.png';
import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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
                        <div className='flex flex-col mt-8 mb-8 text-center'>
                            <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold mb-4">
                                Let's Work
                            </h2>
                            <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold">
                                Together!
                            </h2>
                        </div>

                        {/* Social Icons, Email, and Get in Touch */}
                        <div className='flex flex-col sm:flex-row justify-center items-center mt-8 mb-8 space-y-4 sm:space-y-0 sm:space-x-5'>
                            {/* Social Icons */}
                            <div className='flex justify-center space-x-5'>
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/yourprofile" // Replace with your Facebook URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white text-2xl hover:text-green-500 transition'
                                >
                                    <FaFacebook />
                                </a>
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/yourprofile" // Replace with your Instagram URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white text-2xl hover:text-green-500 transition'
                                >
                                    <FaInstagram />
                                </a>
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white text-2xl hover:text-green-500 transition'
                                >
                                    <FaLinkedin />
                                </a>
                            </div>

                            {/* Email Address */}
                            <div className='flex items-center border border-white border-t-0 border-b-0 px-4 py-2'>
                                <h1 className='text-white text-lg sm:text-xl'>Cribonix@gmail.com</h1>
                            </div>

                            {/* Get in Touch */}
                            <div className='flex items-center'>
                                <h1 className='text-white text-lg sm:text-xl flex items-center'>
                                    Get in touch 
                                    <FaArrowAltCircleRight className='ml-2 text-xl sm:text-2xl' />
                                </h1>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className='flex justify-center w-full'>
                            <div className='flex flex-wrap justify-center space-x-2 sm:space-x-4 border border-[#303030] border-t-2 pt-3 pb-3 w-full'>
                                <nav className='flex flex-wrap justify-center space-x-2 sm:space-x-4'>
                                    {[
                                        { name: 'Home', href: '/' },
                                        { name: 'Why Us', href: '/Whyus' },
                                        { name: 'Services', href: '/Services' },
                                        { name: 'Solutions', href: '/Solutions' },
                                        { name: 'Portfolio', href: '/Portfolio' },
                                        { name: 'New Project', href: '/Newproject' },
                                    ].map(({ name, href }) => (
                                        <Link key={name} href={href} className='cursor-pointer hover:text-green-500 transition text-center'>
                                            {name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Additional Text */}
                        <div className='flex flex-col mt-8 px-4 sm:px-8 text-center'>
                            <h1 className='text-white text-sm sm:text-base'>
                                At Cribonix, we blend creativity with strategy to craft compelling digital marketing solutions. 
                                <br /> Our passion is transforming brands into influential stories that resonate with audiences and drive results.
                            </h1>
                        </div>
                    </div>
                </footer>

                {/* Large "CRIBONIX" Text */}
                <div className='flex justify-center items-center bg-black px-4 sm:px-8 md:px-16 lg:px-24 py-8 overflow-hidden'>
                    <h1 
                        className='font-bold text-white text-6xl sm:text-8xl md:text-10xl lg:text-[10rem] max-w-full'
                    >
                        CRIBONIX
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Footer;
