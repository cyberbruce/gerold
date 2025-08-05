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
    { src: '/gerold/IMG_1453.jpg', alt: '', width: 800, height: 1200 },
    { src: '/gerold/IMG_1594.jpg', alt: '', width: 800, height: 1200 },
    { src: '/gerold/IMG_1596.jpg', alt: '',width: 800, height: 1200 },
    { src: '/gerold/IMG_7983.jpg', alt: '',width: 800, height: 1200 },
     
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-12 relative">
      <Link href="/" className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl border border-white/20">
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="font-semibold">Back to Home</span>
      </Link>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 pt-16">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Gerold&apos;s Photo Gallery
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            A collection of moments showcasing the journey and training of Gerold.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
         
        </motion.div>
      </div>
    </div>
  )
}

export default GalleryPage