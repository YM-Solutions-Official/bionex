/**
 * @file features/about/components/AboutHero.tsx
 * @description About page hero section - Proper heading hierarchy
 */

import { CheckCircle2 } from 'lucide-react'
import { HEADER_SERVICES } from '@/lib/constants/services.constants'
import { Card } from '@/components/ui'

/**
 * About page hero and feature section
 * Uses h1 for main title (only on about page)
 */
export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-105 w-105 -translate-y-1/4 translate-x-1/3 rounded-full bg-emerald-100/50 opacity-70 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-14 lg:grid-cols-2 lg:px-8">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
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
            smart web platforms, we turn lab scale ideas into scalable products.
          </p>

          <Card variant="ghost" hover={false}>
            <h2 className="mb-4 text-base font-semibold text-slate-900 sm:text-lg">
              What we do
            </h2>
            <ul className="grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {HEADER_SERVICES.map((service: string) => (
                <li key={service} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right: Images */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-85 w-full max-w-md sm:h-100 lg:h-110">
            <img
              src="/images/bio.jpg"
              alt="Laboratory automation and bioreactor equipment setup"
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl"
              width={500}
              height={500}
            />
            <img
              src="/images/bioaboutus.jpg"
              alt="Bionex team working with precision bioprocessing equipment"
              className="absolute bottom-4 left-1/2 z-20 h-32 w-3/4 -translate-x-1/2 rounded-xl border-4 border-white object-cover shadow-[0_18px_45px_rgba(15,23,42,0.35)] sm:bottom-6 sm:left-6 sm:h-46 sm:w-2/3 sm:translate-x-0 lg:bottom-8 lg:-left-6"
              width={400}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
