import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Github, Layers, Cpu, Beaker, Code2 } from 'lucide-react'

function Projects() {
  return (
    <div className="w-full bg-slate-50 pt-[120px] font-sans text-slate-900">
      {/* ============= HERO ============= */}
      <section className="w-full border-b border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 sm:text-sm">
              Our work
            </span>
            <h1 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Engineering the future of{' '}
              <span className="text-emerald-600">education</span>.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
              A glimpse into how we help universities, research labs, and
              startups turn complex scientific ideas into intuitive digital
              products.
            </p>
          </div>
        </div>
      </section>

      {/* ============= PROJECT GRID ============= */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            image="/images/project-chem.jpg"
            category="Virtual lab"
            title="ChemSim Pro: organic synthesis"
            desc="WebGL simulator for running high‑risk organic reactions safely in the browser."
            tags={['React', 'Three.js', 'WebGL']}
            icon={<Beaker className="h-5 w-5 text-emerald-600" />}
          />
          <ProjectCard
            image="/images/project-physics.jpg"
            category="Simulation engine"
            title="Newtonian physics sandbox"
            desc="Real‑time 2D engine to explore kinematics, collisions, and conservation laws."
            tags={['TypeScript', 'Canvas API', 'Math.js']}
            icon={<Layers className="h-5 w-5 text-blue-600" />}
          />
          <ProjectCard
            image="/images/project-iot.jpg"
            category="IoT dashboard"
            title="LabMonitor Connect"
            desc="Sensor dashboard for biology labs to track incubator conditions remotely."
            tags={['Node.js', 'MQTT', 'WebSockets']}
            icon={<Cpu className="h-5 w-5 text-purple-600" />}
          />
          <ProjectCard
            image="/images/project-lms.jpg"
            category="LMS platform"
            title="EduStream: science edition"
            desc="Low‑bandwidth learning platform with auto‑generated scientific subtitles."
            tags={['Next.js', 'AWS', 'AI Transcribe']}
            icon={<Code2 className="h-5 w-5 text-orange-600" />}
          />
          <ProjectCard
            image="/images/project-data.jpg"
            category="Data tool"
            title="SpectroAnalysis Suite"
            desc="SaaS app to upload spectroscopy data and export publication‑ready plots."
            tags={['Python', 'D3.js', 'Flask']}
            icon={<Code2 className="h-5 w-5 text-teal-600" />}
          />
        </div>
      </section>

      {/* ============= CTA BANNER ============= */}
      <section className="w-full px-4 py-14 sm:px-6 lg:px-12 lg:py-16">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-xl sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="pointer-events-none absolute right-0 top-0 h-[360px] w-[360px] translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-500/12 blur-3xl" />
          <div className="relative z-10 max-w-xl space-y-3">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Have a similar project in mind?
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Let&apos;s design tools that make complex science easier to teach,
              learn, and explore.
            </p>
          </div>
          <div className="relative z-10">
            <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/20 transition-colors hover:bg-emerald-400">
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---------- Sub component ---------- */

type ProjectCardProps = {
  image: string
  category: string
  title: string
  desc: string
  tags: string[]
  icon: React.ReactNode
}

const ProjectCard = ({
  image,
  category,
  title,
  desc,
  tags,
  icon,
}: ProjectCardProps) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
    {/* image */}
    <div className="relative h-44 w-full overflow-hidden bg-slate-200 sm:h-48">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-slate-900/0 transition-colors group-hover:bg-slate-900/10" />
      <div className="absolute right-4 top-4 rounded-lg bg-white/90 p-2 text-slate-900 shadow-sm backdrop-blur-sm">
        {icon}
      </div>
    </div>

    {/* body */}
    <div className="flex flex-grow flex-col p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
          {category}
        </span>
        <div className="flex gap-2 text-slate-400">
          <Github className="h-4 w-4 cursor-pointer hover:text-slate-900" />
          <ArrowUpRight className="h-4 w-4 cursor-pointer hover:text-emerald-600" />
        </div>
      </div>

      <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-900 sm:text-base group-hover:text-emerald-700">
        {title}
      </h3>
      <p className="mb-5 flex-grow text-xs leading-relaxed text-slate-600 sm:text-sm">
        {desc}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-[0.7rem] font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
)

export const Route = createFileRoute('/projects')({
  component: Projects,
})
