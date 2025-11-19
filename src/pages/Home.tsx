/**
 * Home Page
 * Landing page with hero section and featured projects
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
// import Card from '../components/common/Card';
// import Badge from '../components/common/Badge';
// import { projects } from '../data/projects';

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  // const featuredProjects = projects.filter(p => p.featured);

  // const features = [
  //   {
  //     icon: Code,
  //     title: 'Clean Code',
  //     description: 'Writing maintainable and scalable code following best practices',
  //   },
  //   {
  //     icon: Rocket,
  //     title: 'Fast Performance',
  //     description: 'Optimized applications for the best user experience',
  //   },
  //   {
  //     icon: Zap,
  //     title: 'Modern Stack',
  //     description: 'Using cutting-edge technologies and frameworks',
  //   },
  // ];

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I am
                <br />
                <span className="text-primary-600">Vishal</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
                I'm a...
              </h2>

              <div className="space-y-3 mb-8">
                <p className="text-lg text-gray-600">
                  Software developer passionate about solving real problems
                </p>
                <p className="text-lg text-gray-600">
                  Building intelligent systems that scale
                </p>
                <p className="text-lg text-gray-600">
                  Focused on writing clean, maintainable code
                </p>
                <p className="text-lg text-gray-600">
                  Always learning and exploring new solutions
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button variant="outline" size="lg">
                    View My Work <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Me <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 shadow-xl ring-4 ring-primary-100">
                {/* Fallback initials - shown if image doesn't exist or fails to load */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-7xl font-bold">
                    VP
                  </div>
                )}
                <img
                  src="/public/vishal.jpeg"
                  alt="Vishal Patil"
                  className={`w-full h-full object-cover relative z-10 ${
                    imageLoaded && !imageError ? "block" : "hidden"
                  }`}
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
          </motion.div>
        </div>
      </section>

      {/* Features Section
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full text-center" hover>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary-100 rounded-full">
                        <Icon className="text-primary-600" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Featured Projects Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card hover className="h-full">
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/projects">
                <Button variant="outline" size="lg" className="shadow-sm">
                  View All Projects <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              I'm always open to discussing new projects and opportunities
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
