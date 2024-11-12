"use client";

import React from 'react';
import { motion, useViewportScroll, useTransform, useReducedMotion } from 'framer-motion';

import office from './Container.png'; // Ensure the path is correct
import Link from 'next/link';

// Define animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const textRevealVariants = {
  hidden: { width: 0 },
  visible: { 
    width: "100%",
    transition: { 
      duration: 1,
      ease: "easeInOut"
    }
  },
};

export default function Newproject() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useViewportScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className='flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 my-28 justify-center space-y-8'>

      {/* Image Section with Parallax Effect */}
      <motion.div
        className="relative min-h-[400px] sm:h-128 md:h-160 flex items-center justify-center overflow-hidden "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { scale: 1.1 },
          visible: { scale: 1, transition: { duration: 1 } },
        }}
        style={shouldReduceMotion ? {} : { y: yParallax }}
      >

        {/* Overlay Content with Optional Dark Overlay for Readability */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-4 sm:p-8 md:p-16 bg-black bg-opacity-30"
          variants={containerVariants}
        >
          <motion.h2
            className="relative overflow-hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-center sm:text-left text-white shadow-lg"
            variants={itemVariants}
          >
            <motion.span
              style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap' }}
              variants={textRevealVariants}
            >
              Launching a revolutionizing website to change the marketing industry
            </motion.span>
            <br />
            <motion.span
              className="block"
              variants={itemVariants}
            >
              wait for the big <span className="text-[#FF7E5F]">DHAMAKA!!</span>
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Decorative Animated Elements */}
        {/* Bottom-Right Decorative Element */}
        <motion.div
          className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] rounded-full opacity-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Top-Left Decorative Element */}
        <motion.div
          className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] rounded-full opacity-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />

        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${office.src})`, zIndex: -1 }}
          initial={{ y: 0 }}
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0] }}
          transition={shouldReduceMotion ? {} : { duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Description Section with Interactive Elements */}
      <motion.div
        className="px-4 sm:px-8 md:px-16 lg:px-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 cursor-pointer text-center max-w-2xl mx-auto"
          whileHover={{ scale: 1.05, color: '#FF7E5F' }} // Updated color to complement gradient
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/Contact">Ready to bring your vision to life? Let's connect and create something amazing together.</Link>
          
        </motion.p>
      </motion.div>
    </div>
  );
}
