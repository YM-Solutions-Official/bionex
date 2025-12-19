import { servicesList } from '@/lib/services'
import { Card, Button } from './ui'

export default function Services() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-lg">
            End‑to‑end web and biotech solutions to help your business grow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map(({ title, desc, icon: Icon, bg }) => (
            <Card
              key={title}
              variant="default"
              hover
              className="group flex h-full flex-col justify-between"
            >
              <div>
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${bg} transition-transform group-hover:scale-105`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            </Card>
          ))}

          {/* CTA Card */}
          <Card
            variant="default"
            hover={false}
            className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-900 p-8 text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-emerald-500/20 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Need custom services?
              </h3>
              <p className="text-sm text-slate-300">
                Tell us what you need and we will craft a plan for you.
              </p>
              <Button
                variant="primary"
                size="sm"
                className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400"
              >
                Contact us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
