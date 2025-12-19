import type { LucideIcon } from 'lucide-react'
import { BarChart3, Wrench, PenTool, Table } from 'lucide-react'

export interface CourseItem {
  icon: LucideIcon
  bg: string
  title: string
  description: string
  list: string[]
}

export const coursesData: CourseItem[] = [
  {
    icon: BarChart3,
    bg: 'bg-blue-50',
    title: 'Data Analysis',
    description: 'Hands-on analytics with Python, R, and real datasets.',
    list: [
      'Google Data Analytics Certificate',
      'Data Analysis with Python',
      'IBM Data Analyst Certificate',
    ],
  },
  {
    icon: Wrench,
    bg: 'bg-orange-50',
    title: 'Technical Awareness',
    description: 'Core engineering trends, tools, and communication.',
    list: [
      'Career Dev for Mechanical Engineers',
      'Technical Writing Essentials',
      'Best Engineering Certificates',
    ],
  },
  {
    icon: PenTool,
    bg: 'bg-purple-50',
    title: 'Instrument Designing',
    description: 'Design principles from schematics to safety.',
    list: [
      'Design Criteria in Instrumentation',
      'Electrical Instrumentation Design',
      'Instrumentation Courses',
    ],
  },
  {
    icon: Table,
    bg: 'bg-emerald-50',
    title: 'Excel Analytics',
    description: 'Excel for fast data work and clear insights.',
    list: [
      'Excel Basics for Data Analysis',
      'Data Analysis in Excel',
      'Visualization Specialization',
    ],
  },
]
