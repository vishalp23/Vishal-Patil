/**
 * Badge Component
 * A reusable badge component styled as a Glassmorphic chip for tags and indicators
 */

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'glass'; // Added 'glass'
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  // Enhanced base styles for depth and sharper rounding
  const baseStyles = 'inline-flex items-center font-bold rounded-xl transition-all duration-300 uppercase tracking-wider shadow-sm';
  
  const variants = {
    // 1. Default: Subtle, gray glass/outline
    default: 'bg-white/40 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white/60',
    
    // 2. Primary: Accent color with slightly darker text for readability
    primary: 'bg-primary-50/70 backdrop-blur-sm text-primary-800 border border-primary-100 hover:bg-primary-100/80',
    
    // 3. Success:
    success: 'bg-green-50/70 backdrop-blur-sm text-green-800 border border-green-100 hover:bg-green-100/80',
    
    // 4. Warning:
    warning: 'bg-yellow-50/70 backdrop-blur-sm text-yellow-800 border border-yellow-100 hover:bg-yellow-100/80',
    
    // 5. Danger:
    danger: 'bg-red-50/70 backdrop-blur-sm text-red-800 border border-red-100 hover:bg-red-100/80',
    
    // 6. Info:
    info: 'bg-blue-50/70 backdrop-blur-sm text-blue-800 border border-blue-100 hover:bg-blue-100/80',
    
    // 7. Glass: High-contrast pure white glass for a floating label
    glass: 'bg-white/50 backdrop-blur-md text-gray-900 border border-white/80 hover:bg-white/70 shadow-lg shadow-gray-200/50',
  };
  
  const sizes = {
    // Smaller padding and text size for tags
    sm: 'px-2 py-0.5 text-[10px]',
    // Standard size
    md: 'px-2.5 py-1 text-xs',
    // Larger size for status indicators
    lg: 'px-3 py-1.5 text-sm',
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;