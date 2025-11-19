import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { personalInfo } from '../data/personal';

/**
 * Home page with hero section and call-to-action buttons
 */
export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
            <Sparkles size={16} />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
        >
          <span className="inline-flex items-center gap-2">
            <Code size={28} />
            {personalInfo.title}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/projects">
            <Button size="lg" variant="primary">
              View My Work
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </Link>
          <a href={personalInfo.resumeUrl} download>
            <Button size="lg" variant="ghost">
              <Download size={20} />
              Download Resume
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {personalInfo.yearsOfExperience}+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
          <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              50+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              100%
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
