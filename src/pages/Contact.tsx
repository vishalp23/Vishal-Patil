/**
 * Contact Component
 * Ultra-Transparent "Electric Crystal" Bento Grid Layout
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { MapPin, Phone, Copy, Check, Github, Linkedin, ArrowUpRight, Clock } from 'lucide-react';

// --- 1. Reusable 3D Tilt Card Component (Provided) ---
const TiltCard = ({ 
  children, 
  className = '', 
  onClick,
  noGlare = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  noGlare?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); // Reduced rotation for tighter feel
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  
  const shineX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const shineGradient = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.3), transparent 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = e.clientX - rect.left;
    const mouseYRel = e.clientY - rect.top;
    const xPct = mouseXRel / width - 0.5;
    const yPct = mouseYRel / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', perspective: 1000, rotateX, rotateY }}
      className={`relative group h-full ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-3xl transform-style-3d transition-shadow duration-300">
        {children}
        {!noGlare && (
          <motion.div
            style={{ background: shineGradient }}
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"
          />
        )}
      </div>
    </motion.div>
  );
};

// --- 2. Animated Paper Plane Graphic (Adapted for Crystal) ---
const PaperPlaneGraphic = () => {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl filter saturate-150">
      <defs>
        <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" /> // Violet-500
          <stop offset="100%" stopColor="#3B82F6" /> // Blue-500
        </linearGradient>
      </defs>

      {/* Background Orbit Rings (Cyan/White) */}
      <motion.circle
        cx="100" cy="100" r="60"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Plane Group */}
      <motion.g
        animate={{ y: [-8, 8, -8], rotateZ: [0, 5, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Wings (Use Violet/Blue Gradient) */}
        <path d="M100 60 L170 90 L100 140 L100 60 Z" fill="url(#planeGradient)" />
        <path d="M100 60 L30 90 L100 140" fill="#6366f1" /> {/* Indigo-500 */}
        <path d="M100 140 L170 90 L100 110 Z" fill="#818cf8" /> {/* Indigo-400 */}
        
        {/* Trailing Lines (Electric White) */}
        <motion.path
          d="M40 120 L80 130"
          stroke="white" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
      </motion.g>
    </svg>
  );
};

// --- 3. Main Contact Component ---
const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  // Live Time Updates
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Denver',
        hour: 'numeric',
        minute: '2-digit',
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText('vishalp2399@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 selection:bg-blue-200 overflow-hidden">
      
      {/* Background Atmosphere - Stronger Crystal Glow */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-200/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-3">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">cutting-edge.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              I'm currently available for freelance work and open to full-time opportunities.
            </p>
          </motion.div>
        </div>

        {/* --- Bento Grid Layout --- */}
        {/* SIZE CHANGE: md:auto-rows-[160px] -> md:auto-rows-[140px] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[140px]">
          
          {/* 1. Primary Hero Card (Email) - Spans 2 Cols, 2 Rows */}
          <div className="md:col-span-2 md:row-span-2">
            <TiltCard className="h-full">
              {/* STYLE CHANGE: Transparent Glass with Gradient Accent */}
              <div className="bg-white/40 backdrop-blur-lg border border-white/70 h-full p-6 sm:p-8 flex flex-col justify-between text-gray-900 relative overflow-hidden">
                
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-blue-500/20 to-violet-500/20" />
                <div className="absolute -right-10 -top-10 w-80 h-80 opacity-50 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                  <PaperPlaneGraphic />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-blue-900 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Open to Work
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-700">Drop me a line</h2>
                  <p className="text-gray-600 max-w-xs text-sm md:text-base">
                    Have a project idea or just want to say hi? I typically respond within 24 hours.
                  </p>
                </div>

                {/* Email Button */}
                <div className="relative z-10 mt-6">
                  <button
                    onClick={handleCopy}
                    className="group/btn flex items-center justify-between w-full sm:w-auto min-w-[280px] bg-gray-900 text-white pl-5 pr-2 py-2 rounded-xl shadow-lg hover:shadow-gray-900/30 transition-all active:scale-95"
                  >
                    <span className="font-semibold mr-4">vishalp2399@gmail.com</span>
                    <div className="bg-gray-700 p-2 rounded-lg group-hover/btn:bg-gray-800 transition-colors">
                      <AnimatePresence mode='wait'>
                        {copied ? (
                          <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Check size={18} className="text-green-400" />
                          </motion.div>
                        ) : (
                          <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Copy size={18} className="text-blue-400" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 2. Location Card */}
          <div className="md:col-span-1 md:row-span-1">
            <TiltCard>
              {/* STYLE CHANGE: Crystal White Glass */}
              <div className="bg-white/50 backdrop-blur-lg h-full p-6 flex flex-col justify-between border border-white/70 shadow-lg shadow-blue-100/30 relative overflow-hidden">
                <div className="absolute right-4 top-4 text-blue-200">
                  <MapPin size={80} strokeWidth={1} />
                </div>
                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider z-10">Location</h3>
                <div>
                  <p className="text-2xl font-bold text-gray-900 z-10 relative">Denver, CO</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Clock size={14} className="text-blue-500" />
                    <span>{time} Local Time</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 3. Phone Card */}
          <div className="md:col-span-1 md:row-span-1">
            <TiltCard onClick={() => window.location.href = 'tel:+17207429281'} className="cursor-pointer">
              {/* STYLE CHANGE: Frosted Dark Glass */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800/80 h-full p-6 flex flex-col justify-between text-white group/phone relative overflow-hidden">
                <div className="absolute right-4 top-4 p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover/phone:bg-white/20 transition-colors">
                   <ArrowUpRight size={20} className="text-gray-300 group-hover/phone:text-green-400 transition-colors" />
                </div>
                
                <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <Phone size={20} className="text-green-400" />
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-xl font-bold group-hover/phone:text-green-400 transition-colors">720-742-9281</p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 4. LinkedIn */}
          <div className="md:col-span-1 md:row-span-1">
            <TiltCard onClick={() => window.open('https://www.linkedin.com/in/vishalvp23/', '_blank')} className="cursor-pointer">
               {/* STYLE CHANGE: Transparent LinkedIn Blue Glass */}
               <div className="bg-[#0077b5]/80 backdrop-blur-sm h-full p-6 flex items-center justify-center gap-4 text-white relative overflow-hidden">
                 {/* Abstract bg shape */}
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl" />
                 <Linkedin size={32} />
                 <span className="text-lg font-bold">LinkedIn</span>
                 <ArrowUpRight size={16} className="opacity-50" />
               </div>
            </TiltCard>
          </div>

          {/* 5. GitHub */}
          <div className="md:col-span-1 md:row-span-1">
            <TiltCard onClick={() => window.open('https://github.com/vishalp23', '_blank')} className="cursor-pointer">
               {/* STYLE CHANGE: Transparent GitHub Dark Glass */}
               <div className="bg-[#24292e]/80 backdrop-blur-sm h-full p-6 flex items-center justify-center gap-4 text-white relative overflow-hidden">
                 <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                 <Github size={32} />
                 <span className="text-lg font-bold">GitHub</span>
                 <ArrowUpRight size={16} className="opacity-50" />
               </div>
            </TiltCard>
          </div>


        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
         
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;