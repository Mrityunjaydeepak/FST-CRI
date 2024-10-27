// Footer.tsx
import React from 'react';
import Image from 'next/image';
import footerbg from './footerbg.png';
import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            {/* Parent Container with Responsive Margins */}
            <div className="mx-30 sm:mx-8 md:mx-16 lg:mx-24">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#040404] via-10% to-transparent opacity-90 z-10"></div>

                    {/* Content over the Image */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                        {/* Heading Section */}
                        <div className='flex flex-col mt-8 mb-8 text-center'>
                            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Let's Work</h2>
                            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Together!</h2>
                        </div>

                        {/* Social Icons, Email, and Get in Touch */}
                        <div className='flex flex-col sm:flex-row justify-center items-center mt-8 mb-8 space-y-4 sm:space-y-0 sm:space-x-5'>
                            {/* Social Icons */}
                            <div className='flex justify-center space-x-5'>
                                <button className='text-white text-2xl hover:text-green-500 transition'>
                                    <FaTwitter />
                                </button>
                                <button className='text-white text-2xl hover:text-green-500 transition'>
                                    <FaFacebook />
                                </button>
                                <button className='text-white text-2xl hover:text-green-500 transition'>
                                    <FaInstagram />
                                </button>
                                <button className='text-white text-2xl hover:text-green-500 transition'>
                                    <FaLinkedin />
                                </button>
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
                                    {['Home', 'Why Us', 'Services', 'Solutions', 'Portfolio', 'New Project'].map((item) => (
                                        <div key={item} className='cursor-pointer hover:text-green-500 transition text-center'>
                                            {item}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Additional Text */}
                        <div className='flex flex-col mt-8 px-4 sm:px-8 text-center'>
                            <h1 className='text-white text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere augue vestibulum eget turpis.
                            </h1>
                            <h1 className='text-white text-sm sm:text-base'>
                                Lobortis donec sapien integer phasellus quisque aenean porttitor senectus tempor hac turpis ut morbi.
                            </h1>
                        </div>
                    </div>
                </footer>

                {/* Large "CRIBONIX" Text */}
                <div className='flex justify-center items-center bg-black px-4 sm:px-8 md:px-16 lg:px-24 py-8 overflow-hidden'>
                    <h1 
                        className='font-bold text-white text-center text-6xl sm:text-2xl md:text-4xl lg:text-[10rem] max-w-full'
                    >
                        {/* CRIBONIX */}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Footer;
