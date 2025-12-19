/**
 * @file lib/constants/approach.constants.ts
 * @description Approach steps and strategy constants
 */

import { Lightbulb, Users, Rocket, Cpu, FlaskConical } from 'lucide-react'
import type { ApproachStep, WayAheadCard, CTAButton } from '@/lib/types'

export const APPROACH_STEPS: ApproachStep[] = [
  {
    icon: Users,
    title: 'Collaborate',
    description:
      'Work side‑by‑side with your team to understand goals and constraints.',
    color: 'bg-blue-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description:
      'Apply frugal innovation to design smart, cost‑effective solutions.',
    color: 'bg-emerald-500',
  },
  {
    icon: Rocket,
    title: 'Execute',
    description: 'Prototype fast, iterate quickly, and launch with confidence.',
    color: 'bg-purple-500',
  },
]

export const WAY_AHEAD_CARDS: WayAheadCard[] = [
  {
    icon: Cpu,
    title: 'Lithography',
    description: 'High-precision processes for next‑gen semiconductors.',
    color: 'text-purple-500',
  },
  {
    icon: FlaskConical,
    title: 'Bio Reactor',
    description: 'AI‑driven bioreactors for cleaner, scalable production.',
    color: 'text-teal-500',
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
