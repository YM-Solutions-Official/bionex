export interface ApproachStep {
  icon: string
  title: string
  description: string
  bgColor: string
}

export const steps: ApproachStep[] = [
  {
    icon: '🧪',
    title: 'Process Analysis',
    description:
      'We start by analyzing your bioprocessing needs and research goals to design a tailored bioreactor solution.',
    bgColor: '#7cdff8bf',
  },
  {
    icon: '⚙️',
    title: 'Engineering & Fabrication',
    description:
      'Our team designs and builds high-precision bioreactors with advanced control systems for optimal performance.',
    bgColor: '#bd3dce9b',
  },
  {
    icon: '🛠️',
    title: 'Deployment & Maintenance',
    description:
      'We install your bioreactor system and provide ongoing support to ensure reliability, scalability, and compliance.',
    bgColor: '#eca542cb',
  },
]
