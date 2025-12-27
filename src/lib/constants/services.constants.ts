/**
 * @file lib/constants/services.constants.ts
 * @description Services domain constants
 */

import { FlaskConical, Globe2, PanelsTopLeft, ShoppingBag } from 'lucide-react'
import type { Service, ServiceListItem } from '@/lib/types'

/** Header section services list */
export const HEADER_SERVICES = [
  'Molecular Dynamics & Biophysics',
  'Chemical Synthesis & Analysis',
  'Advanced Genomic Sequencing',
  'Quantum Chemical Modeling',
  'Biological Systems Simulation',
  'Laboratory Automation Solutions',
]

/** Main services grid items */
export const SERVICES_LIST: Array<ServiceListItem> = [
  {
    title: 'Biophysics Nexus',
    desc: 'Studying biological systems through physics.',
    icon: FlaskConical,
    bg: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Chemical Intel',
    desc: 'Predictive molecular synthesis & reactivity.',
    icon: Globe2,
    bg: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Quantum Biology',
    desc: 'Analyzing subatomic biological interactions.',
    icon: PanelsTopLeft,
    bg: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Bio-Automation',
    desc: 'Smart labs with integrated AI diagnostics.',
    icon: ShoppingBag,
    bg: 'bg-orange-50 text-orange-600',
  },
]

/** Detailed services data for Bionex */
export const SERVICES_DATA: Array<Service> = [
  {
    title: 'Spectroscopic Analysis',
    description:
      'Utilizing advanced light-matter interaction to identify chemical signatures and molecular structures.',
    bgColor: '#EDE8FF',
    icon: '/icons/spectroscopy.png',
  },
  {
    title: 'Kinetic Modeling',
    description:
      'Physics-based simulations of chemical reaction rates and metabolic pathways.',
    bgColor: '#FFE3E3',
    icon: '/icons/kinetics.png',
  },
  {
    title: 'Neuro-Physics Research',
    description:
      'Exploring the electrical impulses and physical properties of neural networks.',
    bgColor: '#E4F1FF',
    icon: '/icons/neuro-physics.png',
  },
  {
    title: 'Sustainability Chemistry',
    description:
      'Developing eco-friendly chemical processes through catalytic innovation.',
    bgColor: '#FFF0E1',
    icon: '/icons/green-chem.png',
  },
]
