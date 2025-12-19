import { createFileRoute } from '@tanstack/react-router'
import {
  Atom,
  FlaskConical,
  Microscope,
  BookOpen,
  BarChart3,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

function Services() {
  return (
    <div className="w-full bg-white pt-[120px] font-sans text-slate-900">
      {/* ============= SERVICES GRID ============= */}
      <section className="-mt-10 w-full bg-slate-50 px-4 pb-14 pt-12 sm:px-6 lg:px-12 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<FlaskConical className="h-7 w-7 text-emerald-600" />}
              title="Virtual chemistry labs"
              desc="Safe, cost‑effective 3D environments for organic and inorganic chemistry."
              features={[
                'Titration simulations',
                'Molecular modelling',
                'Reaction mechanisms',
              ]}
            />
            <ServiceCard
              icon={<Atom className="h-7 w-7 text-blue-600" />}
              title="Physics simulation engines"
              desc="Engines for mechanics, electromagnetism, and optics education."
              features={[
                'Circuit logic builders',
                'Kinematics sandboxes',
                'Quantum intros',
              ]}
            />
            <ServiceCard
              icon={<BookOpen className="h-7 w-7 text-purple-600" />}
              title="Scientific LMS platforms"
              desc="Custom LMS tuned for STEM content, grading, and assessments."
              features={[
                'LaTeX support',
                'Formula grading AI',
                'Progress tracking',
              ]}
            />
            <ServiceCard
              icon={<BarChart3 className="h-7 w-7 text-orange-500" />}
              title="Research data analytics"
              desc="No‑code tools to explore and share complex datasets."
              features={[
                'Real‑time graphs',
                'Stat exports',
                'Sensor integration',
              ]}
            />
            <ServiceCard
              icon={<Microscope className="h-7 w-7 text-teal-600" />}
              title="IoT lab instrumentation"
              desc="Bridging lab hardware with intuitive digital dashboards."
              features={[
                'Remote scope view',
                'Digital pH meters',
                'Automated logging',
              ]}
            />
            <ServiceCard
              icon={<Layers className="h-7 w-7 text-indigo-600" />}
              title="Custom edutech dev"
              desc="End‑to‑end platforms for institutes modernizing STEM delivery."
              features={[
                'Scalable architecture',
                'Web & mobile apps',
                'Secure cloud hosting',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============= CTA / WHY BIONEX ============= */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/services-process.jpg"
              alt="Students using Bionex tools"
              className="h-[340px] w-full rounded-2xl object-cover shadow-2xl sm:h-[380px] lg:h-[330px]"
            />
          </div>

          <div className="flex w-full flex-col gap-5 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
              Why partner with Bionex?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Our developers speak science. Many on the team are chemists and
              physicists, so every simulation and workflow respects real‑world
              constraints and pedagogy.
            </p>

            <ul className="mt-3 space-y-3">
              <ProcessItem text="Classroom‑tested, pedagogically sound simulations" />
              <ProcessItem text="Optimized for low bandwidth and shared devices" />
              <ProcessItem text="Aligned with NEP 2020 and STEM best practices" />
            </ul>

            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600">
              Get a consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---------- Sub components ---------- */

type ServiceCardProps = {
  icon: React.ReactNode
  title: string
  desc: string
  features: string[]
}

const ServiceCard = ({ icon, title, desc, features }: ServiceCardProps) => (
  <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-7">
    <div className="mb-5 inline-flex rounded-xl bg-slate-50 p-3 text-slate-800 group-hover:bg-slate-100">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-slate-900 sm:text-xl">
      {title}
    </h3>
    <p className="mb-5 text-sm leading-relaxed text-slate-600">{desc}</p>

    <div className="mt-auto border-t border-slate-100 pt-4">
      <ul className="space-y-2.5 text-sm text-slate-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
)

const ProcessItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-sm font-medium text-slate-800 sm:text-base">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
      <div className="h-2 w-2 rounded-full bg-emerald-600" />
    </div>
    <span>{text}</span>
  </li>
)

export const Route = createFileRoute('/services')({
  component: Services,
})
