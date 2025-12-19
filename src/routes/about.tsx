import { createFileRoute } from '@tanstack/react-router'
import {
  FlaskConical,
  Leaf,
  Globe2,
  Cpu,
  Activity,
  Settings,
  ShoppingCart,
} from 'lucide-react'

function About() {
  return (
    <div className="w-full bg-white my-20 font-sans text-slate-900">
      {/* ============= HERO SECTION ============= */}
      <section className="relative w-full px-4 py-12 overflow-hidden sm:px-6 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-105 w-105 -translate-y-1/4 translate-x-1/3 rounded-full bg-emerald-100/50 opacity-70 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
                About Bionex
              </span>
              <h1 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Making frugal innovation a{' '}
                <span className="text-emerald-600">global success</span> story.
              </h1>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Bionex blends engineering, biology, and software to build
              sustainable and affordable systems. From next gen bioreactors to
              smart web platforms, we turn lab scale ideas into scalable
              products.
            </p>

            <div className="mt-2 space-y-5">
              <FeatureRow
                icon={<Activity className="h-4 w-4 text-emerald-600" />}
                title="Frugal innovation"
                desc="High performance, cost aware designs."
              />
              <FeatureRow
                icon={<Leaf className="h-4 w-4 text-emerald-600" />}
                title="Sustainability first"
                desc="Processes and hardware built for low waste."
              />
              <FeatureRow
                icon={<Globe2 className="h-4 w-4 text-emerald-600" />}
                title="Global collaboration"
                desc="Working with labs and partners worldwide."
              />
            </div>
          </div>

          {/* Right: image */}
          <div className="relative flex h-full min-h-80 w-full items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-105 sm:max-w-115">
              <img
                src="/images/bioaboutus.jpg"
                alt="Bionex lab team"
                className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============= PORTFOLIO SECTION ============= */}
      <section className="w-full bg-slate-50 px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Our portfolio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              A snapshot of how we apply bioprocess, instrumentation, and
              software expertise in real projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left: project cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
              <ProjectCard
                icon={<FlaskConical className="h-4 w-4" />}
                title="500 L automated fermentation"
                desc="Pilot‑scale bioreactor with live analytics and recipe control."
                meta="2025 · Biotech client"
                color="border-emerald-500"
              />
              <ProjectCard
                icon={<Cpu className="h-4 w-4" />}
                title="Industrial IoT platform"
                desc="Telemetry and predictive maintenance for 20+ units."
                meta="2024 · F&B industry"
                color="border-blue-500"
              />
              <ProjectCard
                icon={<Settings className="h-4 w-4" />}
                title="Instrumentation panel design"
                desc="Complete P&ID, PLC, and safety logic for pharma lines."
                meta="2024 · Pharma client"
                color="border-purple-500"
              />
              <ProjectCard
                icon={<ShoppingCart className="h-4 w-4" />}
                title="E‑commerce + analytics"
                desc="Commerce stack with automatic Excel‑to‑dashboard reporting."
                meta="2024 · Agri‑biotech"
                color="border-orange-500"
              />
            </div>

            {/* Right: sticky showcase */}
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="sticky top-10 h-115 w-full">
                <img
                  src="/images/getstarted.jpg"
                  alt="Portfolio showcase"
                  className="h-[80%] w-full rounded-2xl object-cover shadow-xl"
                />
                <img
                  src="/images/bioaboutus.jpg"
                  alt="Detail view"
                  className="absolute bottom-0 -right-5 h-[40%] w-3/5 rounded-xl border-4 border-white object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---------- Sub components ---------- */

type FeatureRowProps = {
  icon: React.ReactNode
  title: string
  desc: string
}

const FeatureRow = ({ icon, title, desc }: FeatureRowProps) => (
  <div className="flex items-start gap-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        {title}
      </h3>
      <p className="mt-0.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
        {desc}
      </p>
    </div>
  </div>
)

type ProjectCardProps = {
  icon: React.ReactNode
  title: string
  desc: string
  meta: string
  color: string
}

const ProjectCard = ({ icon, title, desc, meta, color }: ProjectCardProps) => (
  <article
    className={`flex h-fit gap-3 flex-col justify-between rounded-xl border-t-4 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${color}`}
  >
    <div>
      <div className="mb-3 text-slate-400">{icon}</div>
      <h3 className="mb-2 text-sm font-semibold leading-tight text-slate-900 sm:text-base">
        {title}
      </h3>
      <p className="mb-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
        {desc}
      </p>
    </div>
    <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
      {meta}
    </span>
  </article>
)

export const Route = createFileRoute('/about')({
  component: About,
})
