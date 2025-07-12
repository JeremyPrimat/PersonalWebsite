import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin } from 'lucide-react';
import TypewriterText from './TypewriterText';
import ParticleBackground from './ParticleBackground';
import { profile } from '../data/mockData';

const Hero: React.FC = () => {
  const scrollToThoughtsInsights = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = profile.roles;
  const profileImage =
    profile.profileImage?.url;
  const name = profile.name;
  const bio =
    profile.bio;
  const linkedinUrl =
    profile.linkedinUrl;

  return (
    <section className="min-h-screen mesh-gradient-center bg-square-pattern bg-50 bg-repeat flex items-center justify-center relative overflow-hidden border-b border-gray-200 dark:border-gray-700">
      <ParticleBackground />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile and Name Section - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-8">
            <motion.div
              className="flex-shrink-0 order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt={profile.profileImage?.alternativeText || name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center lg:text-left order-2 lg:order-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white">
                <div className="mb-2">Hi !</div>
                <div>
                  I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {name}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Roles under profile content */}
          <motion.div
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed h-12 md:h-16 flex items-center justify-center "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <TypewriterText
              texts={roles}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
              className="font-medium"
            />
          </motion.div>

          {/* Centered paragraph */}
          <motion.p
            className="text-base md:text-lg text-black-500 dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            {bio.split(' ').map((word, index) => {
              const boldWords = [
                'design',
                'build',
                'modern',
                'digital',
                'platforms',
              ];
              const isBold = boldWords.some((boldWord) =>
                word.toLowerCase().includes(boldWord.toLowerCase())
              );
              return (
                <span key={index} className={isBold ? 'font-bold' : ''}>
                  {word}{' '}
                </span>
              );
            })}
          </motion.p>

          {/* LinkedIn Button - Centered */}
          <motion.div
            className="flex justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          >
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-purple-700 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              <span>Let's connect on LinkedIn</span>
            </motion.a>
          </motion.div>

          <motion.button
            onClick={scrollToThoughtsInsights}
            className="animate-bounce text-blue-600 dark:text-blue-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
