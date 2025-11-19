/**
 * Projects Page
 * Display all projects in a grid with filtering options
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  );

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            {allTechnologies.slice(0, 6).map((tech) => (
              <Button
                key={tech}
                variant="outline"
                size="sm"
                onClick={() => setFilter(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card hover className="h-full flex flex-col">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={18} className="mr-1" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No projects found with the selected filter.
            </p>
            <Button
              variant="outline"
              onClick={() => setFilter('all')}
              className="mt-4"
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
