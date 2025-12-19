import { Link } from '@tanstack/react-router'
import { footerSections, contactInfo } from '@/lib/footer'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-800 font-sans">
      {/* Top label line */}
      <div className="border-b border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs text-slate-500 sm:px-6">
          <span className="uppercase tracking-[0.22em] text-slate-600">
            Bionex Systems
          </span>
          <span className="hidden sm:inline text-slate-500">
            High‑efficiency bioprocessing, built in India.
          </span>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {/* Brand */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Bionex logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-200"
            />
            <div className="leading-tight">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-600">
                Bionex
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Bioprocess innovation
              </p>
            </div>
          </Link>
          <p className="max-w-xs text-sm text-slate-600 leading-relaxed">
            High‑efficiency bioreactor systems and precision‑engineered
            solutions for the next generation of scientists.
          </p>
        </div>

        {/* Nav sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
              {section.title}
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              {section.links.map((link) => (
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
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
            Contact
          </h3>
          <div className="space-y-3 text-sm">
            {contactInfo.map(({ icon: Icon, value, href }) => (
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

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© {year} BioNex Systems. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="transition-colors hover:text-emerald-600">
              Terms of service
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/" className="transition-colors hover:text-emerald-600">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
