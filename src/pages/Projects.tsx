/**
 * Projects Page
 * 3D Grid of work with interactive filtering
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ExternalLink, Github, Folder, Code, Layers } from 'lucide-react';
import { projects } from '../data/projects';

// --- 1. Reusable 3D Tilt Card ---
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); // Subtle tilt for grid items
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  
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
      <div className="relative h-full bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden transform-style-3d transition-all duration-300 hover:shadow-2xl hover:border-primary-200">
        {children}
        <motion.div
          style={{ background: shineGradient }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"
        />
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  // Get unique technologies for filter buttons (Limit to top 6 for UI cleanliness + 'All')
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).slice(0, 6);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <div className="relative min-h-screen bg-gray-50 py-20 overflow-hidden selection:bg-primary-200">
      
      {/* --- Atmospheric Background --- */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
            animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
         />
         <motion.div 
            animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects aimed at solving real-world problems, experimenting with new tech, and building cool things.
          </p>
        </motion.div>

        {/* --- Filter Dock --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-white/80 hover:text-gray-900'
              }`}
            >
              All Projects
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-white/80 hover:text-gray-900'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full">
                  <div className="flex flex-col h-full">
                    
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden border-b border-gray-100 group-hover:border-gray-200">
                      {project.imageUrl ? (
                        <div className="w-full h-full overflow-hidden">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>
                      ) : (
                        // Fallback Pattern
                        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                          <Folder size={48} className="text-gray-300" />
                        </div>
                      )}
                      
                      {/* Floating Tech Badges (Absolute) */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                         {project.githubUrl && (
                           <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-700">
                             <Github size={16} />
                           </div>
                         )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow bg-white/60 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 rounded-md border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-[10px] font-bold text-gray-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-gray-900/40"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                           <a
                           href={project.githubUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 hover:text-black transition-colors ${!project.demoUrl ? 'w-full' : ''}`}
                         >
                           <Code size={16} />
                           Source
                         </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- No Results State --- */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any projects with that technology.</p>
            <button
              onClick={() => setFilter('all')}
              className="text-primary-600 font-medium hover:text-primary-700 hover:underline"
            >
              Clear filter
            </button>
          </motion.div>
        )}
        
        <div className="h-20" />
      </div>
    </div>
  );
};

export default Projects;