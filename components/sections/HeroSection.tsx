'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from '@/public/assets/logo.png';
import CourseApplyModal from '@/components/ui/CourseApplyModal';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='min-h-[90vh] flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center space-y-10 max-w-5xl mx-auto pt-[40px]'>
      {/* Logo */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={Logo}
          alt="TDevSpace Logo"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {t('home.title')} <span className="inline-block animate-bounce" role="img" aria-label="rocket">🚀</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p className="text-lg md:text-xl text-dark animate-fade-in delay-200">
        {t('home.subtitle')}
      </motion.p>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-base p-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        >
          {t('apply.submit')}
        </button>
      </motion.div>
      {isModalOpen && <CourseApplyModal onClose={() => setIsModalOpen(false)} />}

    </div>
  );
};

export default HeroSection;
