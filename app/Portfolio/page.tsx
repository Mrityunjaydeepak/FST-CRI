"use client";

import React from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import contImg from './Container.png'; // Ensure the path is correct
import Link from 'next/link';

// Define animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const textRevealVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useViewportScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="bg-[#040404]">
      {/* Image Section with Parallax Effect */}
      <motion.div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 1.1 },
          visible: { scale: 1, transition: { duration: 1 } },
        }}
        style={shouldReduceMotion ? {} : { y: yParallax }}
      >
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${contImg.src})` }}
          initial={{ y: 0 }}
          animate={
            shouldReduceMotion ? {} : { y: [0, -50, 0] }
          }
          transition={
            shouldReduceMotion
              ? {}
              : { duration: 10, repeat: Infinity, ease: 'linear' }
          }
        />

        {/* Overlay Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 bg-black bg-opacity-50"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight space-y-4"
            variants={itemVariants}
          >
            <motion.span
              className="block overflow-hidden"
              variants={textRevealVariants}
            >
              We don't believe in portfolios.
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              variants={textRevealVariants}
            >
              We believe every story is different,
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              variants={textRevealVariants}
            >
              and every brand's value is unique.
            </motion.span>
            <motion.span
              className="block mt-4"
              variants={itemVariants}
            >
              Let's discuss and help us understand your vision to create an initial strategy or an art for you.
            </motion.span>
            <motion.span
              className="block mt-2"
              variants={itemVariants}
            >
              Final decision is yours!
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Decorative Animated Elements */}
        {/* Bottom-Right Decorative Element */}
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Top-Left Decorative Element */}
        <motion.div
          className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          },
        }}
      >
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-3xl mx-auto"
          whileHover={{ scale: 1.6, color: '#FF7E5F' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/Contact">
            Ready to bring your vision to life? Let's connect and create something amazing together.
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
