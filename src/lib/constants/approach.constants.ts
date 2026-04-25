/**
 * @file lib/constants/approach.constants.ts
 * @description Approach steps and strategy constants
 */

import {
  Bot,
  Cpu,
  Lightbulb,
  Rocket,
  ScanLine,
  Users,
} from 'lucide-react'
import type { ApproachStep, CTAButton, WayAheadCard } from '@/lib/types'

export const APPROACH_STEPS: Array<ApproachStep> = [
  {
    icon: Users,
    title: 'Hypothesize',
    description:
      'Identifying variables and establishing scientific questions through interdisciplinary peer review.',
    color: 'bg-blue-600',
  },
  {
    icon: Lightbulb,
    title: 'Synthesize',
    description:
      'Merging Physics, Chemistry, and Biology to create a unified experimental model.',
    color: 'bg-emerald-600',
  },
  {
    icon: Rocket,
    title: 'Discover',
    description:
      'Finalizing peer-reviewed data and publishing breakthroughs for the global scientific community.',
    color: 'bg-purple-600',
  },
]

export const WAY_AHEAD_CARDS: Array<WayAheadCard> = [
  {
    icon: Bot,
    title: 'AI Bioreactors',
    description:
      'AI-guided bioreactor workflows for smarter monitoring and process decisions.',
    color: 'text-emerald-600',
  },
  {
    icon: Cpu,
    title: 'Bioprocess Software',
    description:
      'Software tools for lab automation, data tracking, and smarter bioprocess control.',
    color: 'text-purple-600',
  },
  {
    icon: ScanLine,
    title: 'Photo React',
    description:
      'Laser-enabled photoreaction technology for precision semiconductor fabrication.',
    color: 'text-teal-600',
  },
]
export const CTA_BUTTONS: Array<CTAButton> = [
  {
    text: 'Schedule a demo',
    primary: true,
    iconName: 'ArrowRight',
    href: '/contact',
  },
  {
    text: 'Contact Us',
    primary: false,
    iconName: 'Phone',
    href: '/contact',
  },
]
