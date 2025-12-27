/**
 * @file lib/constants/footer.constants.ts
 * @description Footer and navigation constants
 */

import { Mail, MapPin, Phone } from 'lucide-react'
import type { ContactInfo, FooterSection, SocialLink } from '@/lib/types'

export const FOOTER_SECTIONS: Array<FooterSection> = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Privacy policy', href: '/privacy' },
    ],
  },
]

export const FOOTER_CONTACT_INFO: Array<ContactInfo> = [
  {
    icon: MapPin,
    value:
      'KH. NO. 134/10 & 134/11, Ground Floor Street No. 75, A Blk‑B Sant Nagar Village, Burari, Delhi 110084',
    href: '#',
  },
  {
    icon: Mail,
    value: 'contact@projecctbionex.com',
    href: 'mailto:contact@projecctbionex.com',
  },
  {
    icon: Phone,
    value: '+91 99717 49689',
    href: 'tel:+9199717496890',
  },
]

export const SOCIAL_LINKS: Array<SocialLink> = [
  { name: 'LinkedIn', href: '#', icon: '🔗' },
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'GitHub', href: '#', icon: '🐙' },
]
