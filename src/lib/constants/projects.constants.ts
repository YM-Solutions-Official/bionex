/**
 * @file lib/constants/projects.constants.ts
 * @description Project portfolio constants
 */

import type { ProjectItem } from '@/lib/types'

export const PROJECTS_DATA: Array<ProjectItem> = [
  {
    title: 'Project Photosynthesis 2.0',
    description:
      'Applying quantum physics to increase photon absorption efficiency in synthetic chloroplasts.',
    image: '/images/project-1.webp',
    tags: ['Biophysics', 'Quantum Science', 'Botany'],
    link: '#',
  },
  {
    title: 'ChemiCompute Alpha',
    description:
      'A cloud platform for simulating complex organic chemical reactions before wet-lab testing.',
    image: '/images/project-2.webp',
    tags: ['Chemistry', 'SaaS', 'Computation'],
    link: '#',
  },
  {
    title: 'Bio-Crystal X-Ray',
    description:
      'Advanced crystallography imaging to map the physical structure of unknown viral proteins.',
    image: '/images/project-3.webp',
    tags: ['Physics', 'Virology', 'Imaging'],
    link: '#',
  },
]
