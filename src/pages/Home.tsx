import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate 
} from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu, Globe, Mail } from 'lucide-react';

// --- Components ---

/**
 * 1. 3D Tilt Card
 * A reusable wrapper that calculates mouse position to rotate the card
 * and apply a glare effect.
 */
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the rotation
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse values to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  
  // Glare effect calculation
  const shineX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const shineGradient = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.4), transparent 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate percentages (-0.5 to 0.5)
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: 1000, 
        rotateX, 
        rotateY 
      }}
      className={`relative group z-10 ${className}`}
    >
      <div style={{ transformStyle: 'preserve-3d' }} className="relative h-full">
        {children}
        
        {/* Glare Overlay */}
        <motion.div
          style={{ background: shineGradient }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-50 mix-blend-soft-light"
        />
      </div>
    </motion.div>
  );
};

/**
 * 2. Main Home Component
 */
const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Grid Content
  const capabilities = [
    {
      icon: Code,
      title: "Frontend Mastery",
      desc: "Building responsive, pixel-perfect UIs with React & Tailwind.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Cpu,
      title: "Backend Systems",
      desc: "Scalable APIs and microservices ensuring robust performance.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Terminal,
      title: "Clean Code",
      desc: "Writing maintainable, self-documenting, and tested software.",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: Globe,
      title: "Modern Web",
      desc: "Always exploring new tech like Next.js, Three.js, and WebGL.",
      color: "text-orange-600 bg-orange-50"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center bg-gray-50 selection:bg-blue-200 overflow-hidden font-sans">
      
      {/* --- Animated Background Blobs --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Column: Typography & Content --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-8"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600">Open to work</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Vishal Patil
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-500 mb-10 max-w-lg leading-relaxed">
              A <span className="font-bold text-gray-800">Full Stack Engineer</span> turning complex problems into elegant, scalable solutions.
            </h2>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.8)' }}
                    className="p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${item.color}`}>
                            <Icon size={18} />
                        </div>
                        <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="flex items-center px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95">
                  <Mail className="mr-2" size={18} /> Contact Me
                </button>
              </Link>
            </div>
          </motion.div>

          {/* --- Right Column: 3D Profile Card --- */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000">
            <TiltCard className="w-full max-w-[380px] aspect-[4/4]">
                
              {/* The Actual Card Container */}
              <div className="relative w-full h-full bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-white/50 overflow-hidden">
                
                {/* Background Header inside Card */}
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-br from-blue-500 to-cyan-400" />
                
                {/* Profile Image Wrapper */}
                <div 
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 p-1 bg-white rounded-full shadow-xl z-20"
                    style={{ transform: "translateZ(50px)" }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 relative">
                    {(!imageLoaded || imageError) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-bold text-3xl">
                        VP
                      </div>
                    )}
                    <img
                      src={`${import.meta.env.BASE_URL}vishal.jpeg`}
                      alt="Vishal Patil"
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        imageLoaded && !imageError ? "opacity-100" : "opacity-0"
                      }`}
                      onError={() => { setImageError(true); setImageLoaded(false); }}
                      onLoad={() => { setImageLoaded(true); setImageError(false); }}
                    />
                  </div>
                  {/* Online Dot */}
                  <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full" />
                </div>

                {/* Card Body Text */}
                <div className="absolute inset-x-0 bottom-0 top-40 pt-16 px-8 bg-white/80 backdrop-blur-xl flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Vishal Patil</h3>
                  <p className="text-cyan-600 font-medium mb-6">@vishalvp23</p>
                  
             
                    <div className="flex justify-between text-sm text-gray-600 py-2 border-b border-gray-100">
                        <span>Experience</span>
                        <span className="font-bold text-gray-900">3+ Years</span>
                    </div>
                    
            
                </div>

                {/* Floating 3D Elements (Parallax Decoration) */}
                <motion.div 
                  className="absolute top-10 right-8 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-2xl shadow-lg z-10"
                  style={{ transform: "translateZ(80px)" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code className="text-white" size={24} />
                </motion.div>
                
                <motion.div 
                  className="absolute top-24 left-6 bg-white p-3 rounded-2xl shadow-lg z-10"
                  style={{ transform: "translateZ(60px)" }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Terminal className="text-blue-600" size={24} />
                </motion.div>

              </div>
              
              {/* Decoration behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-[3rem] blur-2xl opacity-40 -z-10" />
            </TiltCard>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
