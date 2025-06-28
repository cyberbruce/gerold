import React from 'react';
import { motion } from 'motion/react';

interface CelebrateSupportProps {
  fullName?: string;
}

const CelebrateSupport: React.FC<CelebrateSupportProps> = ({ fullName }) => {
  return (
    <motion.div
      key="celebration"
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="mx-auto w-32 h-32 flex items-center justify-center rounded-full mb-6"
        style={{
          background: 'radial-gradient(circle, #FFD700 20%, #FFC107 80%)',
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.span
          className="text-6xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          🎉
        </motion.span>
      </motion.div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Thank You, {fullName || 'Supporter'}!
      </h1>
      <p className="text-gray-600 mb-6">
        Gerold feels the love! We&apos;re processing your show of support.
      </p>
      <div className="flex justify-center items-center space-x-2">
        <motion.div className="w-3 h-3 bg-yellow-400 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
        <motion.div className="w-3 h-3 bg-yellow-400 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
        <motion.div className="w-3 h-3 bg-yellow-400 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
      </div>
    </motion.div>
  );
};

export default CelebrateSupport;