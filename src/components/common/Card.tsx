/**
 * Card Component
 * A reusable card component for displaying content in a contained box
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
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hover ? 'transition-transform hover:shadow-lg cursor-pointer' : '';
  
  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
  };

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      variants={cardVariants}
      initial="rest"
      whileHover={hover ? "hover" : "rest"}
      transition={{ duration: 0.2 }}
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
