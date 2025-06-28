'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, User, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { z } from 'zod';
import { sendEmail } from '@/app/utils/email'; // Adjust the import path as necessary


// Define the Zod schema for form validation
const supportSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

//type SupportFormData = z.infer<typeof supportSchema>;

const SupportPage = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendEmail(
      'cybruce.martin@gmail.com',
      'Support Request from Gerold Fan Club',
      `New support request from ${e.currentTarget.fullName.value} (${e.currentTarget.email.value}):\n\nThank you for your support!`
    );

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const validatedData = supportSchema.parse(data);
      console.log('Form Submitted:', validatedData);
      alert('Thank you for your support, ' + validatedData.fullName + '!');
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(err => err.message).join('\n');
        alert('Validation Error:\n' + errorMessages);
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 flex items-center justify-center p-4 relative">
      <Link
        href="/"
        className="absolute top-8 left-8 z-10 flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="font-semibold">Back to Home</span>
      </Link>

      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <motion.div
            className="mx-auto w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-6 shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart className="w-10 h-10 text-white" fill="white" />
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-800 mb-3">Support Gerold</h1>
          <p className="text-gray-600 mb-8">
            Join Gerold&apos;s fan club! Sign up to receive updates on his journey and show your support.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show Your Support
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SupportPage;