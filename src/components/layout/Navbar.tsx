/**
 * Navbar Component
 * Floating Ethereal Blend Island with scroll-hide functionality - blends with page
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

// --- Configuration ---
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

// --- Components ---

/**
 * Custom VP Logo Component (Vivid Blue/Violet)
 */
const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
    <defs>
      {/* Primary Blue/Violet Gradient */}
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" /> {/* Blue-500 */}
        <stop offset="100%" stopColor="#8B5CF6" /> {/* Violet-500 */}
      </linearGradient>
    </defs>
    {/* Crystal white background with subtle shadow */}
    <circle cx="32" cy="32" r="30" fill="white" />
    <ellipse cx="20" cy="18" rx="12" ry="8" fill="#3B82F6" fillOpacity="0.3" transform="rotate(-45 20 18)" />
    <text 
      x="50%" y="54%" 
      dominantBaseline="middle" textAnchor="middle" 
      fontFamily="sans-serif" fontSize="24" fontWeight="800" fill="url(#logoGradient)"
    >
      VP
    </text>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Handle Scroll to hide/show navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 
          flex justify-center
          pt-4 px-4
        `}
      >
        {/* The "Floating Island" Container (Ethereal Blend)
        */}
        <div className="
          w-full md:w-auto md:min-w-[600px] max-w-5xl
          // KEY CHANGES: bg-white/0 (fully transparent), no border, reduced shadow
          bg-white/0 backdrop-blur-3xl 
          border-none shadow-sm shadow-blue-500/5 
          rounded-2xl md:rounded-full
          px-4 py-2 md:py-3 md:pr-3
        ">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 pl-2 group"
              onClick={() => setIsOpen(false)}
            >
              <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Logo />
              </motion.div>
              <span className="md:hidden font-bold text-gray-800 tracking-tight">Vishal Patil</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors
                      ${active ? 'text-white' : 'text-gray-700 hover:text-gray-900'} // Adjusted text for better blending
                    `}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Active Background Pill Animation (Electric Glow) */}
                    {active && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        // Electric Blue Pill with a strong glow
                        className="absolute inset-0 bg-blue-600 rounded-full -z-0 shadow-lg shadow-blue-500/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* "Hire Me" Action Button (Gradient Primary) */}
              <Link 
                 to="/contact" 
                 className="ml-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-transform active:scale-95 shadow-md shadow-blue-500/30"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            {/* White Crystal Mobile Menu (retained for readability on mobile) */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 overflow-hidden">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-4 py-4 rounded-2xl text-lg font-medium transition-all
                      ${isActive(link.path) 
                        ? 'bg-blue-100 text-blue-600 translate-x-2' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                        {link.name}
                        {isActive(link.path) && (
                            <motion.div 
                                layoutId="mobile-indicator"
                                className="w-2 h-2 bg-blue-600 rounded-full" 
                            />
                        )}
                    </div>
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-center w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 rounded-2xl font-semibold active:scale-95 transition-transform"
                >
                    Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;