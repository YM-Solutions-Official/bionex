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
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden font-sans">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Left */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              Way Ahead
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              Pioneering frugal innovation.
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Smart partnerships and focused R&amp;D in lithography and
              bioreactors to build better, more affordable solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WAY_AHEAD_CARDS.map((card: any) => {
                const Icon = card.icon
                return (
                  <Card
                    key={card.title}
                    variant="ghost"
                    hover={false}
                    className="p-4"
                  >
                    <div className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-900">
                      <Icon className={`h-4 w-4 ${card.color}`} />
                      <span>{card.title}</span>
                    </div>
                    <p className="text-xs text-slate-500">{card.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: Image composition */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-80 w-full max-w-md sm:h-95 lg:h-115">
            <img
              src="/images/bioaboutus.jpg"
              alt="Lab equipment"
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl"
            />
            <img
              src="/images/getstarted.jpg"
              alt="Optics experiment"
              className="absolute bottom-4 left-1/2 z-20 h-32 w-3/4 -translate-x-1/2 rounded-xl border-4 border-white object-cover shadow-[0_18px_45px_rgba(15,23,42,0.4)] sm:bottom-6 sm:left-6 sm:h-46 sm:w-2/3 sm:translate-x-0 lg:bottom-8 lg:-left-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
