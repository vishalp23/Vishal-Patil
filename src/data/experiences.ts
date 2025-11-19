/**
 * Sample data for work experience
 */

import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Full Stack Developer',
    duration: 'Jan 2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored team of 5 junior developers and conducted code reviews',
      'Improved application performance by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: '2',
    company: 'Digital Solutions LLC',
    position: 'Full Stack Developer',
    duration: 'Jun 2020 - Dec 2021',
    location: 'New York, NY',
    description: [
      'Developed and maintained e-commerce platform handling $5M+ in transactions',
      'Collaborated with cross-functional teams to deliver features on time',
      'Implemented responsive UI components using React and Tailwind CSS',
      'Integrated third-party APIs for payment processing and analytics',
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS'],
  },
  {
    id: '3',
    company: 'StartUp Ventures',
    position: 'Frontend Developer',
    duration: 'Jan 2019 - May 2020',
    location: 'Austin, TX',
    description: [
      'Built modern web applications from scratch using React and TypeScript',
      'Worked closely with designers to implement pixel-perfect UIs',
      'Optimized web performance achieving 90+ Lighthouse scores',
      'Contributed to open-source projects and internal component library',
    ],
    technologies: ['React', 'TypeScript', 'Styled Components', 'Jest', 'Storybook'],
  },
  {
    id: '4',
    company: 'Web Agency Co.',
    position: 'Junior Developer',
    duration: 'Jun 2017 - Dec 2018',
    location: 'Remote',
    description: [
      'Developed responsive websites for various clients',
      'Maintained and updated existing web applications',
      'Participated in agile development processes',
      'Learned best practices in software development',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
  },
];
