/**
 * @file lib/constants/projects.constants.ts
 * @description Project portfolio constants
 */

import type { ProjectItem } from '@/lib/types'

export const PROJECTS_DATA: Array<ProjectItem> = [
  {
    title: 'Bioreact',
    description:
      'A smart bioreactor concept focused on controlled growth, monitoring, and process reliability.',
    image: '/icons/bioreactor-design.png',
    tags: ['Bioreactor', 'Automation', 'AI'],
    link: '#',
  },
  {
    title: 'Photo React',
    description:
      'A photobioreaction workflow for light-driven experiments and responsive lab control.',
    image: '/icons/bioprocess-analysis.png',
    tags: ['Photoreaction', 'Chemistry', 'Control'],
    link: '#',
  },
  {
    title: 'Click React',
    description:
      'A click-reaction project designed for faster synthesis planning and experiment tracking.',
    image: '/icons/automation.png',
    tags: ['Click Chemistry', 'Synthesis', 'Tracking'],
    link: '#',
  },
]
