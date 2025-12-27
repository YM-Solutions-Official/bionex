/**
 * @file features/home/components/WayAheadSection.tsx
 * @description Way ahead section with future vision and strategic cards
 */

import { WAY_AHEAD_CARDS } from '@/lib/constants/approach.constants'
import { Card } from '@/components/ui'

/**
 * Displays the company's future direction and strategic initiatives
 */
export function WayAheadSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        {/* Left */}
        <div className="space-y-8">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
              Way Ahead
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl xl:text-4xl">
              Pioneering frugal innovation.
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base max-w-xl">
              Smart partnerships and focused R&amp;D in lithography and
              bioreactors to build better, more affordable solutions.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WAY_AHEAD_CARDS.map((card: any) => {
                const Icon = card.icon
                return (
                  <Card
                    key={card.title}
                    variant="ghost"
                    hover={false}
                    className="h-full rounded-xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5"
                  >
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-900">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon className={`h-4 w-4 ${card.color}`} />
                      </span>
                      <span>{card.title}</span>
                    </div>
                    <p className="text-sm text-slate-500 sm:text-sm">
                      {card.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: Image composition */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg">
            {/* Main image */}
            <div className="aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/bioaboutus.jpg"
                alt="Advanced laboratory bioprocessing equipment and research facilities"
                className="h-full w-full object-cover"
                width={500}
                height={375}
              />
            </div>

            {/* Floating card image */}
            <div className="absolute -bottom-10 left-1/2 w-11/12 max-w-sm -translate-x-1/2 sm:-bottom-8 sm:left-8 sm:w-2/3 sm:translate-x-0 lg:-bottom-10 lg:-left-6">
              <div className="overflow-hidden rounded-xl border-4 border-white shadow-[0_18px_45px_rgba(15,23,42,0.4)]">
                <img
                  src="/images/getstarted.jpg"
                  alt="Precision optical instrumentation for bioprocessing analysis"
                  className="h-32 w-full object-cover sm:h-40 md:h-44"
                  width={400}
                  height={175}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
