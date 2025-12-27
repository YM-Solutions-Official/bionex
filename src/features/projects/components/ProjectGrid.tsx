/**
 * @file features/projects/components/ProjectGrid.tsx
 * @description Project portfolio grid display with semantic HTML
 */

import ProjectCard from './ProjectCard'
import { PROJECTS_DATA } from '@/lib/constants/projects.constants'

/**
 * Displays project portfolio in a responsive grid
 * Uses semantic section and proper heading hierarchy
 */
export function ProjectGrid() {
  return (
    <section className="bg-white py-16 font-sans text-slate-900 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-4xl">
            Featured <span className="text-[#00A676]">Projects</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            A snapshot of recent work that reflects our focus on clean user
            experience, performance, and measurable outcomes.
          </p>
        </header>

        {/* Cards */}
        <div className="flex w-full flex-wrap items-stretch justify-center gap-6 lg:gap-8">
          {PROJECTS_DATA.map((project: any) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
