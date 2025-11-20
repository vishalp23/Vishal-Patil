/**
 * Experience Page
 * 3D Timeline of work history and education
 */

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Briefcase, MapPin, GraduationCap, Building2, Award } from 'lucide-react';
import { experiences } from '../data/experiences';

// --- Reusable 3D Tilt Card ---
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
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
      <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl overflow-hidden transform-style-3d">
        {children}
        <motion.div
          style={{ background: shineGradient }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"
        />
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  // Education Data
  const education = [
    {
      degree: "Master of Science, Computer Science",
      school: "University of Colorado",
      year: "Aug 2022 - May 2024",
      desc: "Advanced studies in software engineering, distributed systems, and 3D medical imaging.",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600"
    },
    {
      degree: "Bachelor of Engineering, CS",
      school: "University of Pune",
      year: "Aug 2017 - May 2021",
      desc: "Fundamentals of algorithms, data structures, and web development. Soccer Team Captain.",
      icon: Award,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 py-20 overflow-hidden selection:bg-primary-200">
      
      {/* --- 3D Background Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl mix-blend-multiply"
         />
         <motion.div 
            animate={{ y: [0, -40, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl mix-blend-multiply"
         />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Milestones</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional growth, technical challenges, and educational background.
          </p>
        </motion.div>

        {/* --- Timeline Section --- */}
        <div className="relative">
          
          {/* Central Timeline Line (Gradient) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-purple-200 to-gray-200 rounded-full opacity-50" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative md:flex items-center ${isLeft ? '' : 'flex-row-reverse'}`}>
                  
                  {/* Timeline Dot (Center) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-primary-100 shadow-lg z-20"
                  >
                    <Briefcase size={20} className="text-primary-600" />
                  </motion.div>

                  {/* Card Content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <TiltCard>
                        <div className="p-6 md:p-8">
                          {/* Header */}
                          <div className="flex flex-col gap-2 mb-6">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <h3 className="text-2xl font-bold text-gray-800">{exp.position}</h3>
                              <span className="text-xs font-bold px-3 py-1 bg-primary-50 text-primary-700 rounded-full uppercase tracking-wide border border-primary-100">
                                {exp.duration}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-600 font-medium">
                              <Building2 size={18} className="text-purple-500" />
                              <span className="text-lg">{exp.company}</span>
                              <span className="text-gray-300 mx-1">•</span>
                              <span className="text-sm text-gray-500 flex items-center gap-1">
                                <MapPin size={14} /> {exp.location}
                              </span>
                            </div>
                          </div>

                          {/* Description List */}
                          <ul className="space-y-3 mb-6">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                            {exp.technologies.map((tech) => (
                              <span 
                                key={tech} 
                                className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Education Grid --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Academic Background</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <TiltCard key={index} className="h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl ${edu.color}`}>
                        <Icon size={28} />
                      </div>
                      <div className="text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                        {edu.year}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-purple-600 font-medium mb-4">{edu.school}</p>
                    
                    <p className="text-gray-600 leading-relaxed mt-auto">
                      {edu.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </motion.div>
        
        {/* Bottom Spacer */}
        <div className="h-20" />
        
      </div>
    </div>
  );
};

export default Experience;