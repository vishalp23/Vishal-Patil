/**
 * Projects data
 */

import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Distributed Version Control System',
    description: 'Engineered Git-inspired version control system with content-addressable storage, delta compression, and merkle tree-based integrity verification. Implemented distributed synchronization protocol for multi-node collaboration with conflict resolution.',
    technologies: ['Go', 'Protocol Buffers', 'LevelDB'],
    githubUrl: 'https://github.com/vishalp23',
    featured: true,
  },
  {
    id: '2',
    title: 'LLM-RL Agent Framework',
    description: 'Explored feasibility of using out-of-the-box LLMs as reinforcement learning policy generators. Built base, memory, and reflection agents with structured prompting and evaluated across MiniGrid tasks against traditional RL baselines.',
    technologies: ['Python', 'Ollama', 'Llama 3.2', 'MiniGrid'],
    githubUrl: 'https://github.com/vishalp23',
    featured: true,
  },
  {
    id: '3',
    title: 'Copilot Orchestrator',
    description: 'Engineered AI agent orchestration platform integrating LangChain and Azure OpenAI. Implemented automated workflow triage with intelligent error handling, and built React dashboard visualizing agent states and telemetry in real time.',
    technologies: ['TypeScript', 'Azure', 'LangChain', 'Generative AI', 'React'],
    githubUrl: 'https://github.com/vishalp23',
    featured: true,
  },
  {
    id: '4',
    title: 'Code-Agent',
    description: 'AI-powered code generation and assistance agent built with TypeScript.',
    technologies: ['TypeScript'],
    githubUrl: 'https://github.com/vishalp23/Code-Agent',
  },
  {
    id: '5',
    title: 'Job Application Agent',
    description: 'Automated job application agent built with Python to streamline the application process.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/vishalp23/Job_application_agent',
  },
  {
    id: '6',
    title: 'To-Do List Agent',
    description: 'Intelligent task management agent with AI capabilities for organizing and prioritizing tasks.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/vishalp23/TO_DO_LIST_AGENT',
  },
  {
    id: '7',
    title: 'React Tutorial',
    description: 'Comprehensive React.js tutorial repository for learning modern React development patterns.',
    technologies: ['JavaScript', 'React'],
    githubUrl: 'https://github.com/vishalp23/React-Tutorial',
  },
];
