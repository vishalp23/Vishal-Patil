import type { Project } from '../types';

/**
 * Sample project data for the portfolio
 * Replace with your actual projects
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.',
    longDescription: 'Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, order management, and payment integration using Stripe. Implemented real-time updates with WebSockets.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Socket.io', 'Redux'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    longDescription: 'Developed a Trello-like task management system with Kanban boards, real-time collaboration, file attachments, comments, and activity tracking.',
    tech: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS', 'React Beautiful DnD'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://taskmanager-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '3',
    title: 'AI-Powered Content Generator',
    description: 'An intelligent content generation tool using OpenAI API for creating blog posts, social media content, and marketing copy.',
    longDescription: 'Created a SaaS platform that leverages AI to generate high-quality content. Features include template selection, tone adjustment, SEO optimization, and content history.',
    tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'NextAuth'],
    github: 'https://github.com/yourusername/ai-content-generator',
    demo: 'https://ai-content-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with real-time forecasts, interactive maps, and personalized weather alerts.',
    longDescription: 'Built a comprehensive weather dashboard that displays current conditions, 7-day forecasts, radar maps, and severe weather alerts using multiple weather APIs.',
    tech: ['React', 'TypeScript', 'OpenWeather API', 'Mapbox', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics platform for tracking social media performance across multiple platforms with detailed insights.',
    longDescription: 'Developed an analytics dashboard that aggregates data from Twitter, Instagram, and Facebook. Provides engagement metrics, audience insights, and content performance analysis.',
    tech: ['Vue.js', 'Node.js', 'Express', 'MySQL', 'D3.js', 'Social Media APIs'],
    github: 'https://github.com/yourusername/social-analytics',
    demo: 'https://social-analytics-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '6',
    title: 'Fitness Tracker Mobile App',
    description: 'A cross-platform mobile fitness application with workout tracking, progress analytics, and personalized training plans.',
    longDescription: 'Built a comprehensive fitness tracking app with exercise library, custom workout builder, progress tracking, nutrition logging, and social features.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Expo'],
    github: 'https://github.com/yourusername/fitness-tracker',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
  },
];
