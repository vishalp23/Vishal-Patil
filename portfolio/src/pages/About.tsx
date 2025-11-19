import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Coffee, Users } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { personalInfo } from '../data/personal';
import { getSkillsByCategory } from '../data/skills';

/**
 * About page with profile, bio, and skills
 */
export const About: React.FC = () => {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const toolsSkills = getSkillsByCategory('tools');

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Section title="About Me" subtitle="Get to know more about who I am and what I do">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl transform rotate-6"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.title}
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
                {personalInfo.aboutLong}
              </p>
            </div>
            <a href={personalInfo.resumeUrl} download>
              <Button variant="primary" className="mt-6">
                <Download size={20} />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Quick Stats */}
      <Section containerSize="lg" className="bg-gray-50 dark:bg-gray-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover padding="lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                <Award className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.yearsOfExperience}+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
            </div>
          </Card>

          <Card hover padding="lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <Coffee className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                1000+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Cups of Coffee</p>
            </div>
          </Card>

          <Card hover padding="lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <Users className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                25+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Skills & Technologies" subtitle="Tools and technologies I work with">
        <div className="space-y-8">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <Badge key={skill.id} variant="primary">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <Badge key={skill.id} variant="info">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolsSkills.map((skill) => (
                <Badge key={skill.id} variant="secondary">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
