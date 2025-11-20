/**
 * Work experience data
 */

import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Pragmatrix Technology',
    position: 'Software Engineer — React / TypeScript / AWS / Go',
    duration: 'Jul 2024 - Present',
    location: 'Denver, CO',
    description: [
      'Architected full-stack multi-tenant SaaS platform using React 18, Go microservices, and AWS CDK, serving 100+ providers with 99.95% API availability and horizontal scaling to handle 10K+ concurrent requests',
      'Built responsive React UI with Tailwind CSS and TypeScript, integrated with scalable Go APIs (Gin, GORM) via React Query, achieving sub-200ms latency through optimized backend queries and frontend caching',
      'Implemented event-driven backend architecture with AWS Lambda auto-scaling and SQS/SNS messaging, while developing dynamic frontend forms with real-time validation across 15+ field types',
      'Developed Zero Trust security spanning full stack: AWS Cognito OAuth 2.0 with MFA on backend, dynamic RBAC-based UI rendering with role-specific components on frontend',
      'Built JSON-driven form engine with React component generation and backend microservices for validation, reducing client onboarding from 4 weeks to 3 days',
      'Created CI/CD pipelines with GitHub Actions for automated frontend builds, backend deployments, and Playwright E2E testing, reducing defects by 70% and accelerating delivery by 40%',
    ],
    technologies: ['React', 'TypeScript', 'Go', 'AWS', 'AWS CDK', 'Lambda', 'API Gateway', 'SQS', 'SNS', 'Cognito', 'Playwright', 'GitHub Actions'],
  },
  {
    id: '2',
    company: 'University of Colorado Denver',
    position: 'Graduate Research & Software Developer',
    duration: 'Oct 2022 - May 2024',
    location: 'Denver, CO',
    description: [
      'Developed 3D voxel-based printing pipeline for Stratasys J5 printer, converting 2D DICOM medical scans into multi-material anatomical models for surgical planning and visualization',
      'Built real-time collaboration platform with WebSocket integration, enabling medical teams to review and annotate 3D voxel data concurrently',
      'Deployed on AWS EC2 with Nginx load balancing and PostgreSQL database replication for model storage, achieving 99.9% uptime',
      'Optimized voxel reconstruction algorithms with parallel processing and multi-threading, reducing print preparation time by 60%',
      'Automated infrastructure provisioning and deployment workflows with Docker, Terraform, and GitHub Actions CI/CD pipelines',
    ],
    technologies: ['Python', 'WebSocket', 'AWS EC2', 'Nginx', 'PostgreSQL', 'Docker', 'Terraform', 'GitHub Actions', 'Three.js'],
  },
  {
    id: '3',
    company: 'Tata Consultancy Services (TCS)',
    position: 'Associate System Engineer',
    duration: 'Jan 2022 - Jun 2022',
    location: 'Pune, India',
    description: [
      'Built modular React components integrated with Spring Boot APIs, improving UI consistency and frontend performance',
      'Collaborated in Agile sprints, contributing to CI/CD pipeline automation and peer code reviews for faster, reliable releases',
    ],
    technologies: ['React', 'Spring Boot', 'Java', 'CI/CD', 'Agile'],
  },
];
