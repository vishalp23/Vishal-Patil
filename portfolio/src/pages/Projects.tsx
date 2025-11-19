import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { projects } from '../data/projects';

/**
 * Projects page displaying portfolio projects in a grid
 */
export const Projects: React.FC = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      <Section
        title="My Projects"
        subtitle="Here are some of the projects I've worked on recently"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card hover padding="none" className="h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="warning">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary">+{project.tech.length - 4}</Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" fullWidth>
                        <Github size={16} />
                        Code
                      </Button>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="primary" size="sm" fullWidth>
                          <ExternalLink size={16} />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more? Check out my GitHub profile!
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github size={20} />
              View GitHub Profile
            </Button>
          </a>
        </motion.div>
      </Section>
    </div>
  );
};
