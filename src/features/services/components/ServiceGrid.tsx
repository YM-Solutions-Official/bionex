/**
 * @file features/services/components/ServiceGrid.tsx
 * @description Service offerings grid with individual service cards
 */

import { SERVICES_LIST } from '@/lib/constants/services.constants'
import { Card, Button } from '@/components/ui'

/**
 * Grid displaying main service offerings
 */
export function ServiceGrid() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          {SERVICES_LIST.map(({ title, desc, icon: Icon, bg }: any) => (
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
          {/* CTA Card */}
          <Card
            variant="default"
            hover={false}
            className="relative flex flex-col items-center justify-center rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-emerald-50 to-emerald-100/60 p-8 text-center shadow-sm"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/40" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-semibold text-emerald-900">
                Need custom services?
              </h3>
              <p className="text-sm text-emerald-900/70">
                Tell us what you need and we will craft a plan for you.
              </p>
              <a href="/contact">
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-full bg-emerald-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition-colors hover:bg-emerald-500"
                >
                  Contact us
                </Button>
              </a>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
