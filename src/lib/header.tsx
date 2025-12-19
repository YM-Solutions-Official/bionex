export const buttons = [
  {
    text: '✨ View Demos',
    className:
      'px-7 py-4 max-sm:text-[15px] max-sm:px-5 rounded-xl transition-all duration-700 bg-[#3468E9] text-white text-xl hover:drop-shadow-[0_0_10px_#3468E9]',
  },
  {
    text: '🎨 Explore Features',
    className:
      'px-3  py-4 max-sm:text-[14px] rounded-xl max-sm:px-2 hover:bg-white hover:text-black transition-all duration-700 text-white text-xl border-[1px] border-white hover:drop-shadow-[0_0_10px_white]',
  },
]

export interface Service {
  title: string
  description: string
  bgColor: string
  icon: string
}

export const services: Service[] = [
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
