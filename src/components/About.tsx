import { CheckCircle2 } from 'lucide-react'
import { headerServices } from '@/lib/services'
import { Card } from './ui/Card'

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 font-sans">
        {/* Left */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              Who we are
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              Making frugal innovation a{' '}
              <span className="text-emerald-600">success story.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-lg">
              We build practical, affordable solutions that help teams scale,
              stay independent, and move faster.
            </p>
          </div>

          <Card variant="ghost" hover={false}>
            <h3 className="mb-4 text-base font-semibold text-slate-900 sm:text-lg">
              What we do
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {headerServices.map((service) => (
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
              alt="Automation setup"
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl"
            />
            <img
              src="/images/bioaboutus.jpg"
              alt="Team at work"
              className="absolute bottom-4 left-1/2 z-20 h-32 w-3/4 -translate-x-1/2 rounded-xl border-4 border-white object-cover shadow-[0_18px_45px_rgba(15,23,42,0.35)] sm:bottom-6 sm:left-6 sm:h-46 sm:w-2/3 sm:translate-x-0 lg:bottom-8 lg:-left-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
