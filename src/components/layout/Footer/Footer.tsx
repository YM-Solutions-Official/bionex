/**
 * @file components/layout/Footer/Footer.tsx
 * @description Main footer component with links and contact info - Semantic HTML
 */

import { Link } from '@tanstack/react-router'
import {
  FOOTER_CONTACT_INFO,
  FOOTER_SECTIONS,
} from '@/lib/constants/footer.constants'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-800 font-sans">
      {/* Top label line -->
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
          <section className="space-y-4 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="Bionex company logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-200"
                width={48}
                height={48}
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
          </section>

          {/* Nav sections */}
          {FOOTER_SECTIONS.map((section: any) => (
            <nav key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {section.links.map((link: any) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-700 transition-colors hover:text-emerald-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
              Contact
            </h3>
            <address className="space-y-3 text-sm not-italic">
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
            </address>
          </section>
        </div>
      </div>
    </footer>
  )
}
