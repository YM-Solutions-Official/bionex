import type { LucideIcon } from 'lucide-react'
import { MapPin, Mail, Phone } from 'lucide-react'

export interface FooterSection {
  title: string
  links: Array<{ label: string; href: string }>
}

export interface ContactInfo {
  icon: LucideIcon
  value: string
  href: string
}

export const footerSections: FooterSection[] = [
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
      { label: 'Privacy policy', href: '/' },
    ],
  },
]

export const contactInfo: ContactInfo[] = [
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

export const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: '🔗' },
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'GitHub', href: '#', icon: '🐙' },
]
