import { ArrowRight, Phone } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const ctaButtons = [
  {
    text: 'Schedule a demo',
    primary: true,
    icon: ArrowRight,
    href: '/contact',
  },
  {
    text: 'Contact Us',
    primary: false,
    icon: Phone,
    href: '/contact',
  },
]

export default function GetStarted() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-slate-50 py-16 lg:py-24 font-sans">
      {/* Soft background accent (optional) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-emerald-50/60 via-white to-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <span className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">
          Let&apos;s build the future
        </span>

        <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Ready to revolutionize your{' '}
          <span className="text-emerald-600">bioprocessing?</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Transform concepts into high‑efficiency bioreactor systems and scale
          with the precision trusted by industry leaders.
        </p>

        <div className="mt-7 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          {ctaButtons.map(({ text, primary, icon: Icon, href }) => (
            <Link
              key={text}
              to={href}
              className={[
                'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200',
                primary
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 hover:bg-emerald-500'
                  : 'border border-slate-200 bg-white text-slate-800 hover:border-emerald-400 hover:text-emerald-600',
              ].join(' ')}
            >
              <span>{text}</span>
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
