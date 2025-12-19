/**
 * @file lib/constants/projects.constants.ts
 * @description Project portfolio constants
 */

import type { ProjectItem } from '@/lib/types'

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'TRYST 2025 – cultural fest website',
    description:
      "Event platform with live updates and smooth registrations for Delhi University's annual fest.",
    image: '/images/tryst-fest-website.png',
    tags: ['Event Tech', 'University Fest', 'UI/UX'],
    link: 'https://tryst-website.vercel.app/',
  },
  {
    title: 'SkillsYard – learning platform',
    description:
      'Skill‑based learning platform with course support, payments, and fully responsive design.',
    image: '/images/skillsyard-website.png',
    tags: ['EdTech', 'Online Learning', 'Payments'],
    link: 'https://skillsyard.com/',
  },
  {
    title: 'Cancer Heal – medical website',
    description:
      'Trust‑centred site highlighting services, team, and milestones with clear calls‑to‑action.',
    image: '/images/cancerheal-website.png',
    tags: ['Healthcare', 'Company Profile', 'Professional'],
    link: 'https://cancerheal.co.in/',
  },
]
