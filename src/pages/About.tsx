/**
 * About Page
 * Information about skills, background, and interests
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const skills = {
    languages: ['Go', 'Python', 'TypeScript', 'Rust', 'C/C++', 'Java', 'JavaScript'],
    backend: ['RESTful APIs', 'gRPC', 'Microservices', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'GORM', 'Prisma'],
    cloud: ['AWS', 'Terraform', 'Nginx', 'Git', 'CI/CD', 'GitHub Actions', 'Prometheus', 'Playwright'],
    frontend: ['React', 'React Native', 'TypeScript', 'HTML5', 'CSS', 'Three.js'],
  };

  const skillCategories = [
    { title: 'Languages', icon: Code2, skills: skills.languages, color: 'primary' },
    { title: 'Backend & Database', icon: Database, skills: skills.backend, color: 'info' },
    { title: 'Cloud & DevOps', icon: Smartphone, skills: skills.cloud, color: 'success' },
    { title: 'Frontend', icon: Globe, skills: skills.frontend, color: 'warning' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating elegant solutions to complex problems
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 shadow-xl ring-4 ring-primary-100">
                  {/* Fallback initials - shown if image doesn't exist or fails to load */}
                  {(!imageLoaded || imageError) && (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                      VP
                    </div>
                  )}
                  <img 
                    src={`${import.meta.env.BASE_URL}vishal1.png`} 
                    alt="Vishal Patil" 
                    className={`w-full h-full object-cover relative z-10 ${imageLoaded && !imageError ? 'block' : 'hidden'}`}
                    onError={() => {
                      setImageError(true);
                      setImageLoaded(false);
                    }}
                    onLoad={() => {
                      setImageLoaded(true);
                      setImageError(false);
                    }}
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Hello! I'm Vishal Patil</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I'm a Software Engineer with a passion for building scalable, high-performance 
                    systems and exceptional digital experiences. With experience in full-stack 
                    development, cloud architecture, and AI/ML, I've worked on diverse projects 
                    from healthcare SaaS platforms to research applications in medical imaging.
                  </p>
                  <p>
                    My journey in software development started with a curiosity about how systems 
                    work, and it has evolved into a career where I architect multi-tenant platforms, 
                    build distributed systems, and explore cutting-edge technologies like LLMs and 
                    reinforcement learning. I believe in writing clean, maintainable code and 
                    following best practices to ensure the longevity and scalability of the 
                    applications I build.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or working on personal projects that push the boundaries
                    of what's possible. I'm always excited to take on new challenges and collaborate 
                    with talented individuals to create amazing digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 bg-${category.color}-100 rounded-lg mr-3`}>
                        <Icon className={`text-${category.color}-600`} size={24} />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
