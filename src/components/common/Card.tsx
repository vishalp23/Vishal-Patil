/**
 * Card Component
 * A reusable card component with Glassmorphic design and 3D hover effects
 */

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  // Enhanced base styles for Glassmorphism and Depth
  const baseStyles = 'bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl overflow-hidden text-gray-900';
  
  // Custom 3D-like hover styles
  const hoverStyles = hover 
    ? 'transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-0.5 hover:rotate-z-1 cursor-pointer' 
    : '';
  
  // Custom Framer Motion variants for subtle lift/press effect
  const cardVariants = {
    rest: { 
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      y: 0,
      scale: 1,
    },
    hover: { 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)',
      y: -2, // Subtle lift
      scale: 1.005, // Very slight expansion
    },
    tap: {
      scale: 0.99, // Simulate button press
      y: 0,
      boxShadow: '0 5px 10px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Shadow shrinks
    }
  };

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      variants={cardVariants}
      initial="rest"
      whileHover={hover ? "hover" : "rest"}
      whileTap={onClick ? "tap" : "rest"} // Add tap feedback when clickable
      transition={{ duration: 0.3 }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          onClick();
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;