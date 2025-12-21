/**
 * @file lib/constants/footer.constants.ts
 * @description Footer and navigation constants
 */

import { MapPin, Mail, Phone } from 'lucide-react'
import type { FooterSection, ContactInfo, SocialLink } from '@/lib/types'

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Bioreactors', href: '/services' },
      { label: 'Automation', href: '/services' },
      { label: 'Software', href: '/services' },
      { label: 'Consulting', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Privacy policy', href: '/privacy' },
    ],
  },
]

export const FOOTER_CONTACT_INFO: ContactInfo[] = [
  {
    icon: MapPin,
    value:
      'KH. NO. 134/10 & 134/11, Ground Floor Street No. 75, A Blk‑B Sant Nagar Village, Burari, Delhi 110084',
    href: '#',
  },
  {
    icon: Mail,
    value: 'official.bionex@gmail.com',
    href: 'mailto:official.bionex@gmail.com',
  },
  {
    icon: Phone,
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', href: '#', icon: '🔗' },
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'GitHub', href: '#', icon: '🐙' },
]
