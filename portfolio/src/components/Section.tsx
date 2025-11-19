import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
}

/**
 * Section wrapper component with optional title and animations
 * Provides consistent spacing and container sizing
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle,
  containerSize = 'xl',
  animate = true,
}) => {
  const { ref, isInView } = useScrollAnimation();

  const containerSizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const containerClass = `${containerSizes[containerSize]} mx-auto px-4 sm:px-6 lg:px-8`;

  const content = (
    <>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </>
  );

  if (animate) {
    return (
      <section id={id} className={`py-16 md:py-24 ${className}`}>
        <motion.div
          ref={ref}
          className={containerClass}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {content}
        </motion.div>
      </section>
    );
  }

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={containerClass}>{content}</div>
    </section>
  );
};
