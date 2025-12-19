import ProjectCard from './Project-Card'
import { Link } from '@tanstack/react-router'
import { projectsData } from '@/lib/projects'

export default function Project() {
  return (
    <section
      id="projects"
      className="bg-white py-16 font-sans text-slate-900 sm:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Featured <span className="text-[#00A676]">Projects</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            A snapshot of recent work that reflects our focus on clean user
            experience, performance, and measurable outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full flex-wrap items-stretch justify-center gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/projects"
          className="inline-flex items-center rounded-xl bg-[#00A676] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,166,118,0.6)]"
        >
          View all projects
        </Link>
      </div>
    </section>
  )
}
