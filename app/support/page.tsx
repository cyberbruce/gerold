'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, User, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '@/app/utils/email'; // Adjust the import path as necessary
import { StoreSupportEmail } from '@/app/utils/support'; // Adjust the import path as necessary
import CelebrateSupport from '../components/CelebrateSupport';
import { useRouter } from 'next/navigation';

// Define the Zod schema for form validation
const supportSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

type SupportFormData = z.infer<typeof supportSchema>;

const SupportPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
  });

  const fullName = watch('fullName');

  const onSubmit = async (data: SupportFormData) => {
    try {
      const sendMailPromise = sendEmail(        
        'Support for Gerold Fan Club',
        `New support for Gerold from ${data.fullName} (${data.email}):\n\nThank you for your support!`
      );
      console.log('Support registered for:', data);

      const storeEmailPromise = StoreSupportEmail(data.email, data.fullName);

      await Promise.all([sendMailPromise, storeEmailPromise]);
       
      router.replace('/');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('An unexpected error occurred while sending your support request.');
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
        <AnimatePresence mode="wait">
          {!isSubmitting ? (
            <motion.div
              key="form"
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-center"
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-left text-sm mt-1 ml-2">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="Email Address"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-left text-sm mt-1 ml-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Your Support
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <CelebrateSupport fullName={fullName} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SupportPage;