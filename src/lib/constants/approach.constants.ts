/**
 * @file lib/constants/approach.constants.ts
 * @description Approach steps and strategy constants
 */

import { Lightbulb, Users, Rocket, Cpu, FlaskConical } from 'lucide-react'
import type { ApproachStep, WayAheadCard, CTAButton } from '@/lib/types'

export const APPROACH_STEPS: ApproachStep[] = [
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

export const WAY_AHEAD_CARDS: WayAheadCard[] = [
  {
    icon: Cpu,
    title: 'Nanobiotechnology',
    description: 'Atomic-scale engineering of medical delivery systems.',
    color: 'text-purple-600',
  },
  {
    icon: FlaskConical,
    title: 'Exobiology',
    description:
      'Searching for the chemical and physical signatures of life beyond Earth.',
    color: 'text-teal-600',
  },
]
export const CTA_BUTTONS: CTAButton[] = [
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
