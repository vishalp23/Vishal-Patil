import type { Skill } from '../types';

/**
 * Sample skills data organized by category
 * Replace with your actual skills
 */
export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', level: 95 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 90 },
  { id: '3', name: 'JavaScript', category: 'frontend', level: 95 },
  { id: '4', name: 'Next.js', category: 'frontend', level: 85 },
  { id: '5', name: 'Vue.js', category: 'frontend', level: 80 },
  { id: '6', name: 'HTML/CSS', category: 'frontend', level: 95 },
  { id: '7', name: 'Tailwind CSS', category: 'frontend', level: 90 },
  { id: '8', name: 'SASS/SCSS', category: 'frontend', level: 85 },
  { id: '9', name: 'Redux', category: 'frontend', level: 85 },
  { id: '10', name: 'React Native', category: 'frontend', level: 75 },

  // Backend
  { id: '11', name: 'Node.js', category: 'backend', level: 90 },
  { id: '12', name: 'Express', category: 'backend', level: 88 },
  { id: '13', name: 'Python', category: 'backend', level: 85 },
  { id: '14', name: 'Django', category: 'backend', level: 80 },
  { id: '15', name: 'PostgreSQL', category: 'backend', level: 85 },
  { id: '16', name: 'MongoDB', category: 'backend', level: 88 },
  { id: '17', name: 'GraphQL', category: 'backend', level: 80 },
  { id: '18', name: 'REST APIs', category: 'backend', level: 95 },
  { id: '19', name: 'Firebase', category: 'backend', level: 85 },

  // Tools & Others
  { id: '20', name: 'Git', category: 'tools', level: 95 },
  { id: '21', name: 'Docker', category: 'tools', level: 80 },
  { id: '22', name: 'AWS', category: 'tools', level: 75 },
  { id: '23', name: 'CI/CD', category: 'tools', level: 85 },
  { id: '24', name: 'Jest', category: 'tools', level: 85 },
  { id: '25', name: 'Webpack', category: 'tools', level: 80 },
  { id: '26', name: 'Vite', category: 'tools', level: 85 },
  { id: '27', name: 'Figma', category: 'tools', level: 75 },
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};
