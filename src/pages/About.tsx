/**
 * About Page
 * Information about skills, background, and interests
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const About: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
  };

  const skillCategories = [
    { title: 'Frontend', icon: Globe, skills: skills.frontend, color: 'primary' },
    { title: 'Backend', icon: Code2, skills: skills.backend, color: 'info' },
    { title: 'Database', icon: Database, skills: skills.database, color: 'success' },
    { title: 'Tools & DevOps', icon: Smartphone, skills: skills.tools, color: 'warning' },
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
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  VP
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Hello! I'm Vishal Patil</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I'm a Full Stack Developer with a passion for building modern, responsive,
                    and user-friendly web applications. With several years of experience in the
                    industry, I've had the opportunity to work on a diverse range of projects,
                    from small business websites to large-scale enterprise applications.
                  </p>
                  <p>
                    My journey in web development started with a curiosity about how websites work,
                    and it has evolved into a career where I get to solve complex problems and
                    bring creative ideas to life. I believe in writing clean, maintainable code
                    and following best practices to ensure the longevity and scalability of the
                    applications I build.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or sharing my knowledge with the developer community.
                    I'm always excited to take on new challenges and collaborate with talented
                    individuals to create amazing digital experiences.
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

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 mb-2">University Name</p>
              <p className="text-gray-500">2013 - 2017</p>
              <p className="mt-4 text-gray-700">
                Studied software engineering, algorithms, data structures, and web development.
                Graduated with honors.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  AWS Certified Solutions Architect
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Professional Scrum Master I
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  React Developer Certification
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
