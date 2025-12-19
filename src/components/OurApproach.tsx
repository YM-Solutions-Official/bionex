import { Lightbulb, Users, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaborate',
    description:
      'Work side‑by‑side with your team to understand goals and constraints.',
    color: 'bg-blue-500',
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Innovate',
    description:
      'Apply frugal innovation to design smart, cost‑effective solutions.',
    color: 'bg-emerald-500',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Execute',
    description: 'Prototype fast, iterate quickly, and launch with confidence.',
    color: 'bg-purple-500',
  },
]

export default function OurApproach() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/ourapproach.jpg"
          alt="Background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900/95 to-slate-900" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            How we work
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Our approach
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            A collaborative, innovation first process that keeps every project
            focused and on track.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg shadow-black/30 ${step.color}`}
              >
                {step.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
