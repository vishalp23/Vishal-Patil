/**
 * About Page
 * 3D Bio and Skills Visualization
 */

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Database, Cpu, Terminal, Layers, Cloud } from 'lucide-react';

// --- 1. Reusable 3D Tilt Card ---
const TiltCard = ({ children, className = '', noGlare = false }: { children: React.ReactNode; className?: string, noGlare?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  
  const shineX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const shineGradient = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.4), transparent 60%)`;

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', perspective: 1000, rotateX, rotateY }}
      className={`relative group h-full ${className}`}
    >
      <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl overflow-hidden transform-style-3d transition-all duration-300">
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

// --- 2. Main About Component ---
const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const skills = {
    languages: ['Go', 'Python', 'TypeScript', 'Rust', 'C/C++', 'Java', 'JavaScript'],
    backend: ['RESTful APIs', 'gRPC', 'Microservices', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    cloud: ['AWS', 'Terraform', 'Nginx', 'Git', 'CI/CD', 'GitHub Actions', 'Prometheus'],
    frontend: ['React', 'React Native', 'TypeScript', 'HTML5', 'CSS', 'Three.js'],
  };

  const skillCategories = [
    { 
      title: 'Languages', 
      icon: Terminal, 
      skills: skills.languages, 
      bg: 'bg-blue-50', 
      text: 'text-blue-600',
      border: 'border-blue-100'
    },
    { 
      title: 'Backend & DB', 
      icon: Database, 
      skills: skills.backend, 
      bg: 'bg-emerald-50', 
      text: 'text-emerald-600',
      border: 'border-emerald-100'
    },
    { 
      title: 'Cloud & DevOps', 
      icon: Cloud, 
      skills: skills.cloud, 
      bg: 'bg-sky-50', 
      text: 'text-sky-600',
      border: 'border-sky-100'
    },
    { 
      title: 'Frontend', 
      icon: Layers, 
      skills: skills.frontend, 
      bg: 'bg-orange-50', 
      text: 'text-orange-600',
      border: 'border-orange-100'
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 py-20 overflow-hidden selection:bg-primary-200">
      
      {/* --- Atmospheric Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
        <motion.div 
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems.
            Here's a glimpse into my background and technical toolkit.
          </p>
        </motion.div>

        {/* --- Bio Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Left: 3D Profile Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <TiltCard className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white p-3">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-gray-200">
                  {(!imageLoaded || imageError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                      <span className="text-6xl font-bold mb-2">VP</span>
                      <span className="text-sm">Vishal Patil</span>
                    </div>
                  )}
                  <img 
                    src={`${import.meta.env.BASE_URL}vishal1.png`} 
                    alt="Vishal Patil" 
                    className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}
                    onError={() => { setImageError(true); setImageLoaded(false); }}
                    onLoad={() => { setImageLoaded(true); setImageError(false); }}
                  />
                  
                  {/* Floating Overlay Badge */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900">Vishal Patil</p>
                        <p className="text-xs text-gray-500">Full Stack Engineer</p>
                      </div>
                      <Cpu className="text-blue-500" size={24} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </TiltCard>

            {/* Decorative Elements behind image */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl -z-10" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="lg:col-span-7"
          >
            <TiltCard noGlare>
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Hello! <span className="wave inline-block origin-[70%_70%] hover:animate-pulse">👋</span>
                </h2>
                
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  <p>
                    I'm a Software Engineer driven by the challenge of building <span className="font-semibold text-blue-600">scalable systems</span> and intuitive digital experiences. With a strong foundation in full-stack development, cloud architecture, and AI/ML, I bridge the gap between complex backend logic and seamless frontend interactions.
                  </p>
                  <p>
                    My engineering philosophy revolves around writing <span className="font-semibold text-purple-600">clean, maintainable code</span>. Whether I'm architecting multi-tenant SaaS platforms or optimizing distributed systems, I focus on robustness and performance. I'm particularly fascinated by the intersection of traditional software engineering and emerging tech like LLMs.
                  </p>
                  <p>
                    Beyond the terminal, I'm an avid explorer of new technologies and a contributor to the open-source ecosystem. I believe the best software is built through collaboration, continuous learning, and a bit of coffee.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                  {['Problem Solver', 'Tech Enthusiast', 'Lifelong Learner'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* --- Skills Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Technical Arsenal</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 rounded-xl ${category.bg} ${category.text}`}>
                          <Icon size={24} />
                        </div>
                        <div className={`w-2 h-2 rounded-full ${category.text.replace('text', 'bg')}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className={`px-2.5 py-1 text-xs font-semibold rounded-md border bg-white text-gray-600 shadow-sm hover:shadow-md transition-shadow cursor-default`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="h-20" />
      </div>
    </div>
  );
};

export default About;