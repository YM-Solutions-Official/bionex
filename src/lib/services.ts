import { FlaskConical, Globe2, PanelsTopLeft, ShoppingBag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  title: string
  description: string
  bgColor: string
  icon: string
}

export interface ServiceListItem {
  title: string
  desc: string
  icon: LucideIcon
  bg: string
}

// Services from Header.tsx
export const headerServices = [
  'Bio reactors & Fermentation Systems',
  'Website Design & Development',
  'UI/UX Design',
  'E‑commerce Solutions',
  'Custom Web Applications',
  'SEO & Performance Optimization',
]

// Services from Services.tsx component
export const servicesList: ServiceListItem[] = [
  {
    title: 'Bio Reactors',
    desc: 'Advanced fermentation systems.',
    icon: FlaskConical,
    bg: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Web Development',
    desc: 'Scalable full‑stack apps.',
    icon: Globe2,
    bg: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'UI/UX Design',
    desc: 'Clean, user‑first interfaces.',
    icon: PanelsTopLeft,
    bg: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'E‑commerce',
    desc: 'Shopify and custom stores.',
    icon: ShoppingBag,
    bg: 'bg-orange-50 text-orange-600',
  },
]

// Services from header.tsx (old lib file)
export const servicesData: Service[] = [
  {
    title: 'Bioprocess Consulting',
    description:
      'Tailored analysis of your bioprocessing needs to optimize bioreactor system design.',
    bgColor: '#EDE8FF',
    icon: '/icons/bioprocess-analysis.png',
  },
  {
    title: 'Bioreactor Design',
    description:
      'Custom-engineered bioreactor systems for precise microbial or cell culture applications.',
    bgColor: '#FFE3E3',
    icon: '/icons/bioreactor-design.png',
  },
  {
    title: 'Automation Integration',
    description:
      'Advanced control systems to enhance bioreactor efficiency and data monitoring.',
    bgColor: '#E4F1FF',
    icon: '/icons/automation.png',
  },
  {
    title: 'System Validation',
    description:
      'Comprehensive testing and validation to ensure compliance with industry standards.',
    bgColor: '#FFF0E1',
    icon: '/icons/validation.png',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing support and upgrades to keep your bioreactor systems reliable and scalable.',
    bgColor: '#F1E4FF',
    icon: '/icons/maintenance.png ',
  },
]
