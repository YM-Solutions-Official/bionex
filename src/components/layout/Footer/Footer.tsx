/**
 * @file components/layout/Footer/Footer.tsx
 * @description Main footer component with links and contact info
 */

import { Link } from '@tanstack/react-router'
import {
  FOOTER_SECTIONS,
  FOOTER_CONTACT_INFO,
} from '@/lib/constants/footer.constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-800 font-sans">
      {/* Top label line */}
      <div className="border-b border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm text-slate-500 sm:px-6">
          <span className="uppercase tracking-[0.22em] text-slate-600">
            Bionex Systems
          </span>
          <span className="hidden sm:inline text-slate-500">
            High‑efficiency bioprocessing, built in India.
          </span>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="Bionex logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-200"
              />
              <div className="leading-tight">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-600">
                  Bionex
                </p>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              High‑efficiency bioreactor systems and precision‑engineered
              solutions for the next generation of scientists.
            </p>
          </div>

          {/* Nav sections */}
          {FOOTER_SECTIONS.map((section: any) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                {section.title}
              </h3>
              <nav className="flex flex-col gap-2 text-sm">
                {section.links.map((link: any) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-slate-700 transition-colors hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              {FOOTER_CONTACT_INFO.map(({ icon: Icon, value, href }: any) => (
                <a
                  key={value}
                  href={href}
                  className="flex items-start gap-3 text-slate-700 transition-colors hover:text-emerald-600"
                >
                  <span className="mt-0.5 rounded-full bg-emerald-50 p-1.5 text-emerald-600">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
            {/* 1. Copyright - Left */}
            <div className="text-center text-xs text-slate-400 md:text-left">
              © {year} <span className="text-slate-600">BioNex Systems</span>
            </div>

            {/* 2. Agency Credit - Center */}
            <div className="flex justify-center items-center gap-2">
              <div className="h-px w-4 bg-slate-200" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Designed by{' '}
                <Link
                  to="https://www.ymsolutions.in/"
                  target="_blank"
                  className="text-slate-900"
                >
                  YM Solutions
                </Link>
              </p>
              <div className="h-px w-4 bg-slate-200" />
            </div>

            {/* 3. Legal Links - Right */}
            <div className="flex justify-center gap-6 text-xs font-medium text-slate-500 md:justify-end">
              <Link
                to="/service"
                className="transition-all hover:text-emerald-600"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="transition-all hover:text-emerald-600"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
