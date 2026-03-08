import type { Service } from './types';

/**
 * IT Services and Offerings
 *
 * Edit this file to update IT service descriptions.
 * Icon names reference lucide-react icon library.
 */
export const offerings: Service[] = [
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    icon: 'Cloud',
    description: 'Comprehensive cloud solutions to modernize your infrastructure and optimize costs.',
    details: [
      'Cloud migration and architecture design',
      'Infrastructure as Code (IaC) implementation',
      'Cost optimization and resource management',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: 'Code',
    description: 'Tailored software solutions built to meet your specific business requirements.',
    details: [
      'Web and mobile application development',
      'Enterprise software solutions',
      'API design and integration',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data and Analytics',
    icon: 'Database',
    description: 'Transform your data into actionable insights with our analytics expertise.',
    details: [
      'Data warehouse design and implementation',
      'Business intelligence dashboards',
      'ETL pipeline development',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'Shield',
    description: 'Protect your business with comprehensive security solutions and best practices.',
    details: [
      'Security audits and assessments',
      'Compliance and governance frameworks',
      'Threat detection and response',
    ],
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    icon: 'Lightbulb',
    description: 'Strategic technology guidance to drive your digital transformation initiatives.',
    details: [
      'Digital strategy and planning',
      'Technology roadmaps and assessments',
      'Process optimization and automation',
    ],
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    icon: 'Settings',
    description: 'Reliable IT support and maintenance to keep your systems running smoothly.',
    details: [
      '24/7 monitoring and support',
      'Help desk and user support',
      'System maintenance and updates',
    ],
  },
];