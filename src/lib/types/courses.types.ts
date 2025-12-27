/**
 * @file courses.types.ts
 * @description Learning and course types
 */

import type { LucideIcon } from 'lucide-react'

export interface CourseItem {
  icon: LucideIcon
  bg: string
  title: string
  description: string
  list: Array<string>
}
