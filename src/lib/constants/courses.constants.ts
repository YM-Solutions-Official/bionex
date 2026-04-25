/**
 * @file lib/constants/courses.constants.ts
 * @description Learning and course constants
 */

import { Bot, Code2, Dna, Wrench } from 'lucide-react'
import type { CourseItem } from '@/lib/types'

export const COURSES_DATA: Array<CourseItem> = [
  {
    icon: Code2,
    bg: 'bg-blue-50',
    title: 'Python',
    description: 'Practical programming for scientific and biotech workflows.',
    list: [
      'Python fundamentals',
      'Data handling for labs',
      'Automation-ready scripts',
    ],
  },
  {
    icon: Wrench,
    bg: 'bg-orange-50',
    title: 'Analytics Chemistry',
    description: 'Mastering the tools required to measure the material world.',
    list: [
      'Mass Spectrometry Basics',
      'Chromatographic Techniques',
      'pH & Titration Mastery',
    ],
  },
  {
    icon: Dna,
    bg: 'bg-purple-50',
    title: 'Synthetic Biology',
    description: 'Connecting biological systems with practical lab design.',
    list: [
      'Biological system basics',
      'Cell culture concepts',
      'Bioprocess design links',
    ],
  },
  {
    icon: Bot,
    bg: 'bg-emerald-50',
    title: 'AI Integration',
    description: 'Applying AI tools to speed up research and operations.',
    list: [
      'Prompting for research',
      'AI-assisted data review',
      'Workflow integration',
    ],
  },
]
