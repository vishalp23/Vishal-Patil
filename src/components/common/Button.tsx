/**
 * Button Component
 * A reusable button component with enhanced 3D/Glassmorphic variants, sizes, and icon support.
 */

import React from 'react';

// Use lucide-react for the spinner and general icons
import { Loader2 } from 'lucide-react'; 

// Define a type for a React component that can be used as an Icon
type IconType = React.ElementType<{ size?: number; className?: string }>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  Icon?: IconType; // New prop for a leading icon
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  isLoading = false,
  Icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  // Enhanced base styles for smooth transitions and accessibility
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Custom shadow styles for 3D effect
  const shadowStyles = 'shadow-lg hover:shadow-xl active:shadow-md active:scale-[0.98]';

  const variants = {
    // 1. Primary: Strong gradient with pronounced 3D effect
    primary: `${shadowStyles} bg-gradient-to-r from-fuchsia-600 to-teal-500 text-white border border-transparent hover:from-fuchsia-700 hover:to-teal-600 focus:ring-teal-300`,
    
    // 2. Secondary: Dark, solid, with 3D press effect
    secondary: `${shadowStyles} bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-400 border border-gray-700`,
    
    // 3. Outline: Subtle border, clean hover
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300 shadow-none',
    
    // 4. Ghost: Subtle, text-only
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-200 shadow-none',

    // 5. Glass: High-contrast glassmorphism
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-2xl shadow-black/10 hover:bg-white/30 focus:ring-white/50 active:scale-[0.98]',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-8 py-3.5 text-lg gap-2.5',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Determine text and spinner color based on variant
  const isDarkVariant = variant === 'primary' || variant === 'secondary' || variant === 'glass';
  const spinnerColorClass = isDarkVariant ? 'text-white/80' : 'text-gray-600';
  const iconColorClass = isDarkVariant ? 'text-white' : 'text-gray-700';
  
  const iconSize = size === 'sm' ? 16 : 20;

  // The content to be rendered, handling icon placement
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={iconSize} className={iconColorClass} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} className={iconColorClass} />}
    </>
  );

  // Loading state content
  const loadingContent = (
    <span className="flex items-center justify-center">
      <Loader2 
        className={`animate-spin h-5 w-5 ${spinnerColorClass}`}
      />
      {/* Only show "Loading..." if the button is medium or large */}
      {size !== 'sm' && <span className="ml-2 opacity-90">Loading...</span>}
    </span>
  );

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      aria-label={typeof children === 'string' ? children : undefined}
      {...props}
    >
      {isLoading ? loadingContent : content}
    </button>
  );
};

export default Button;