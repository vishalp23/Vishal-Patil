import type { Experience } from '../types';

/**
 * Sample work experience data
 * Replace with your actual experience
 */
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovators Inc.',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    startDate: 'Jan 2022',
    endDate: 'Present',
    current: true,
    responsibilities: [
      'Lead development of microservices architecture serving 1M+ daily active users',
      'Mentor team of 5 junior developers and conduct code reviews',
      'Implement CI/CD pipelines reducing deployment time by 60%',
      'Architected real-time data processing system handling 100K events/second',
      'Collaborate with product managers to define technical requirements',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: '2',
    company: 'Digital Solutions LLC',
    position: 'Full Stack Developer',
    location: 'Austin, TX',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    current: false,
    responsibilities: [
      'Developed and maintained 10+ client-facing web applications',
      'Integrated third-party APIs and payment gateways (Stripe, PayPal)',
      'Improved application performance by 40% through code optimization',
      'Participated in agile ceremonies and sprint planning',
      'Created comprehensive technical documentation',
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Redis', 'Git'],
  },
  {
    id: '3',
    company: 'StartUp Ventures',
    position: 'Frontend Developer',
    location: 'Remote',
    startDate: 'Jan 2019',
    endDate: 'May 2020',
    current: false,
    responsibilities: [
      'Built responsive web applications using modern JavaScript frameworks',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Implemented state management solutions using Redux and Context API',
      'Wrote unit and integration tests achieving 85% code coverage',
      'Optimized bundle size reducing initial load time by 50%',
    ],
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'SASS', 'Jest', 'Webpack'],
  },
  {
    id: '4',
    company: 'Web Development Agency',
    position: 'Junior Web Developer',
    location: 'New York, NY',
    startDate: 'Jun 2017',
    endDate: 'Dec 2018',
    current: false,
    responsibilities: [
      'Developed responsive websites for small to medium-sized businesses',
      'Maintained and updated existing client websites',
      'Implemented SEO best practices improving search rankings',
      'Provided technical support and troubleshooting',
      'Learned best practices in web development and version control',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'PHP'],
  },
];
