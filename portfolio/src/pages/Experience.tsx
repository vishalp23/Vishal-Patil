import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { experiences } from '../data/experience';

/**
 * Experience page with vertical timeline
 */
export const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      <Section
        title="Work Experience"
        subtitle="My professional journey and career highlights"
      >
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full transform md:-translate-x-1/2 ring-4 ring-white dark:ring-gray-900"></div>

                {/* Content */}
                <div className="flex-1 ml-20 md:ml-0">
                  <Card hover padding="lg" className="h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <Badge variant="success">Current</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1.5">
                              •
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};
