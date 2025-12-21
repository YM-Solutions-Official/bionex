/**
 * @file features/home/components/HeroSection.tsx
 * @description Hero section with headline and CTA buttons
 */

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { Link } from '@tanstack/react-router'

/**
 * Hero section - main landing headline with call-to-action
 */
export function HeroSection() {
  return (
    <header className="relative flex h-screen min-h-155 w-full items-center justify-center overflow-hidden font-sans">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ourapproach.jpg')" }}
      />

      {/* Edge vignette */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,transparent_0,#020617_70%)]" />

      {/* Color wash + bottom fade */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-6 inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1 text-sm font-medium uppercase tracking-[0.22em] text-emerald-200 backdrop-blur">
          Next‑gen bioprocessing
        </span>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
          Innovate Bioprocessing with{' '}
          <span className="text-emerald-400">Precision Technology</span>
        </h1>

        <p className="mt-6 max-w-3xl text-sm text-slate-200 sm:text-base lg:text-lg">
          Optimize your bioprocess with cutting edge bioreactor solutions and
          intelligent automation systems engineered for the future.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Link to={'/services'}>
            <Button
              variant="primary"
              size="md"
              className="rounded-full bg-emerald-500 px-8 py-3 shadow-[0_0_45px_rgba(16,185,129,0.55)] hover:bg-emerald-400 cursor-pointer"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              Explore solutions
            </Button>
          </Link>
          <Link to={'/projects'}>
            <Button
              variant="outline"
              size="md"
              className="rounded-full border-slate-500/60 bg-slate-900/60 text-slate-50 backdrop-blur-sm cursor-pointer hover:border-emerald-400 hover:text-emerald-200"
            >
              View our work
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
