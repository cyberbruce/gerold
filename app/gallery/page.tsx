'use client';

import React from 'react'
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from "motion/react";

const GalleryPage = () => {
  // Animation variants (copied from HeroSection for consistency)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, animate: "easeOut"}
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Slightly faster stagger for gallery items
        delayChildren: 0.1
      }
    }
  };

  // Placeholder image data for Gerold's gallery
  // Added width and height for a responsive masonry layout
  const galleryItems = [
    { src: '/gerold.jpeg', alt: 'Gerold posing proudly', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold enjoying the sun', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold with his championship ribbon',width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold taking a nap',width: 800, height: 1200},
    { src: '/gerold.jpeg', alt: 'Gerold exploring the farm', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold looking curious', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold at the livestock show', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold close-up portrait',width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold playing in the mud', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold with his owner, Savannah', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold showing off his posture', width: 800, height: 1200 },
    { src: '/gerold.jpeg', alt: 'Gerold enjoying a treat', width: 800, height: 1200 },
     
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-20 relative">
      <Link href="/" className="absolute top-8 left-8 z-10 flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg">
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="font-semibold">Back to Home</span>
      </Link>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Gerold&apos;s Photo Gallery
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            A collection of moments showcasing the life and achievements of a champion Yorkshire pig.
          </motion.p>
        </div>

        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 [column-fill:_balance]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-8 break-inside-avoid group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto rounded-lg shadow-lg transform-gpu"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-lg font-semibold transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default GalleryPage