/**
 * Experience Page
 * Display work experience in a timeline format
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { experiences } from '../data/experiences';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey, work experience, and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-400" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              <div
                className={`md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    {/* Company and Position */}
                    <div className="mb-4">
                      <div className="flex items-start mb-2">
                        <Briefcase
                          className="text-primary-600 mr-2 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-primary-600 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Duration and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 mt-2">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.duration}
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="primary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 bg-gray-600 rounded-full border-4 border-white shadow-xl" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start mb-4">
                  <GraduationCap
                    className="text-primary-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Master of Science, Computer Science
                    </h3>
                    <p className="text-lg text-primary-600 font-semibold">
                      University of Colorado
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar size={16} className="mr-1" />
                  Aug 2022 - May 2024
                </div>
                <p className="text-gray-700">
                  Advanced studies in computer science with focus on software
                  engineering, distributed systems, and research in 3D medical
                  imaging and printing technologies.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start mb-4">
                  <GraduationCap
                    className="text-primary-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Bachelor of Engineering, Computer Science
                    </h3>
                    <p className="text-lg text-primary-600 font-semibold">
                      University of Pune
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar size={16} className="mr-1" />
                  Aug 2017 - May 2021
                </div>
                <p className="text-gray-700">
                  Comprehensive study of computer science fundamentals including
                  algorithms, data structures, software engineering, and web
                  development. Active member of Computer Society of India and
                  served as Soccer Team Captain.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default Experience;
