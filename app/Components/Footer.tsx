import React from 'react';
import Image from 'next/image';
import footerbg from './footerbg.png'
import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="relative min-h-[600px] w-auto mt-20 ml-24 mr-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={footerbg} // Replace with your image path
                        alt="Footer Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70" // Add some opacity to the image
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[#040404] via-10% to-transparent opacity-90 z-10"></div>

                {/* Content over the Image */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mt-8 ">
                    <div className='flex flex-col mt-8 mb-8'>
                        <h2 className="text-9xl font-bold items-center text-start">Let's Work</h2>
                        <h2 className="text-9xl font-bold items-center text-center">Together !</h2>

                    </div>

                    <div className='flex justify-center mt-8 mb-8'>
                        <div className='flex justify-between space-x-5 pr-7'>
                            <button className='text-white text-xl'> <FaTwitter /> </button>
                            <button className='text-white text-xl'> <FaFacebook /> </button>
                            <button className='text-white text-xl'> <FaInstagram /> </button>
                            <button className='text-white text-xl '> <FaLinkedin /> </button>
                        </div>

                        <div className='flex border border-white border-t-0 border-b-0 pr-7 pl-7'>
                            <h1 className='text-white text-xl '> Cribonix@gmail.com</h1>
                        </div>

                        <div className='pl-7 '>
                            <h1 className='text-white text-xl'>Get in touch <button className='items-center '> <FaArrowAltCircleRight />  </button></h1>
                        </div>

                    </div>
                    <div className='flex justify-center border border-[#303030] border-t-2 pt-3 pb-3 border-l-0 border-r-0 w-full'>
                        <nav className='flex space-x-4 '>
                            {['      Home       ', '      Why Us      ', '      Services      ', '      Solutions      ', '      Portfolio      ', '      New Project'].map((item) => (
                                <div key={item} className='cursor-pointer'>
                                    {item}
                                </div>
                            ))}
                        </nav>

                    </div>

                            <div className='flex flex-col mt-8'>
                                <h1 className='text-white text-center'>
                                Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere augue vestibulum eget turpis
                                </h1>
                                <h1 className='text-white text-center'>
                                lobortis donec sapien integer phasellus quisque aenean porttitor senectus tempor hac turpis ut morbi.
                                </h1>
                            </div>

                </div>
            </footer>

            <div>
                <h1 className='text-[250px] text-center items-center font-bold text-white'>CRIBONIX</h1>
            </div>

        </>

    );
};

export default Footer;
