/**
 * Sample data for projects
 */

import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, shopping cart, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather and forecasts using multiple weather APIs.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Social Media Clone',
    description: 'A social media application with posts, comments, likes, and user authentication.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, categories, tags, and search functionality.',
    technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Styled Components'],
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    demoUrl: 'https://example.com',
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'A fitness tracking application with workout logging, progress charts, and goal setting.',
    technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
  },
];
