/**
 * @file footer.types.ts
 * @description Footer and global navigation types
 */

import type { LucideIcon } from 'lucide-react'

export interface FooterSection {
  title: string
  links: Array<{ label: string; href: string }>
}

export interface ContactInfo {
  icon: LucideIcon
  value: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}
