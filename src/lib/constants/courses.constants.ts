/**
 * @file lib/constants/courses.constants.ts
 * @description Learning and course constants
 */

import { BarChart3, Wrench, PenTool, Table } from 'lucide-react'
import type { CourseItem } from '@/lib/types'

export const COURSES_DATA: CourseItem[] = [
  {
    icon: BarChart3,
    bg: 'bg-blue-50',
    title: 'Statistical Thermodynamics',
    description:
      'The bridge between microscopic physics and macroscopic chemistry.',
    list: [
      'Entropy & Information Theory',
      'Boltzmann Distributions',
      'Molecular Heat Transfer',
    ],
  },
  {
    icon: Wrench,
    bg: 'bg-orange-50',
    title: 'Analytical Chemistry',
    description: 'Mastering the tools required to measure the material world.',
    list: [
      'Mass Spectrometry Basics',
      'Chromatographic Techniques',
      'pH & Titration Mastery',
    ],
  },
  {
    icon: PenTool,
    bg: 'bg-purple-50',
    title: 'Genomic Engineering',
    description: 'The physical manipulation of biological blueprints.',
    list: [
      'CRISPR-Cas9 Mechanics',
      'DNA Folding & Topology',
      'Synthetic Biology Design',
    ],
  },
  {
    icon: Table,
    bg: 'bg-emerald-50',
    title: 'Scientific Computing',
    description: 'Using Python and Julia to solve complex physical equations.',
    list: [
      'NumPy for Scientists',
      'Differential Equations in Bio',
      'Modeling Atomic Bonds',
    ],
  },
]
