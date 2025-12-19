interface FooterLinkSection {
  title: string
  links: { label: string; href: string }[]
}

interface FooterContactInfo {
  icon: React.ReactNode
  value: string
  href: string
}

export const footerSections: FooterLinkSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: '🧪 Bioprocess Solutions', href: '/#services' },
      { label: '👩‍🔬 Our Expertise', href: '/#aboutus' },
      { label: '📁 Case Studies', href: '/#projects' },
      { label: '📞 Get in Touch', href: '/#contact' },
    ],
  },
  {
    title: 'Bioreactor Services',
    links: [
      { label: '⚗️ Bioreactor Design', href: '/#services' },
      { label: '⚙️ Automation Integration', href: '/#services' },
      { label: '🔬 System Validation', href: '/#services' },
      { label: '🛠️ Maintenance & Support', href: '/#services' },
    ],
  },
]

export const contactInfo: FooterContactInfo[] = [
  {
    icon: <span className="text-lg">📧</span>,
    value: 'contact@BioNex.com',
    href: 'mailto:contact@BioNex.com',
  },
  {
    icon: <span className="text-lg">📞</span>,
    value: '+91 9xxxx 56xxx1',
    href: 'tel:+91xxxxxxx',
  },
]
