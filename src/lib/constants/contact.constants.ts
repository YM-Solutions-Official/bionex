/**
 * @file lib/constants/contact.constants.ts
 * @description Contact form and communication constants
 */

import type { ContactMethod, FormField } from '@/lib/types'

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: '📩',
    title: 'Email us at',
    detail: 'contact@projectbbionex.com',
  },
  {
    icon: '📞',
    title: 'Call us at',
    detail: '+91 99717 49689',
  },
]

export const CONTACT_REASONS = [
  'Precision-engineered bioreactors for optimal bioprocessing',
  'High-efficiency systems with advanced control and monitoring',
  'Scalable designs tailored for diverse bioprocess applications',
  'Rapid deployment and dependable ongoing maintenance',
]

export const FORM_FIELDS: FormField[] = [
  { placeholder: 'Enter your name', type: 'text', width: '45.5%' },
  { placeholder: 'Enter your last name', type: 'text', width: '45.5%' },
  { placeholder: 'Enter your email', type: 'text', width: '93.5%' },
  { placeholder: 'Enter your phone number', type: 'text', width: '93.5%' },
]

export const CONTACT_SERVICE_OPTIONS = [
  'Select a service',
  'Bioprocess Consulting',
  'Bioreactor System Design',
  'Automation & Control Integration',
  'System Validation & Testing',
  'Bioreactor Maintenance & Support',
  'Custom Bioreactor Development',
  'Process Optimization Solutions',
  'Other',
]
