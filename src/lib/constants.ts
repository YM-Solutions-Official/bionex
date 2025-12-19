import type { LucideIcon } from 'lucide-react'
import { Lightbulb, Users, Rocket, Cpu, FlaskConical } from 'lucide-react'

export interface ApproachStep {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface WayAheadCard {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const approachSteps: ApproachStep[] = [
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

export const wayAheadCards: WayAheadCard[] = [
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

export const ctaButtonsData = [
  {
    text: 'Schedule a demo',
    primary: true,
    iconName: 'ArrowRight' as const,
    href: '/contact',
  },
  {
    text: 'Contact Us',
    primary: false,
    iconName: 'Phone' as const,
    href: '/contact',
  },
]
