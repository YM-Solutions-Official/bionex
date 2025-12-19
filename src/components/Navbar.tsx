'use client'

import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 shadow font-sans transition-all duration-300 bg-white`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm text-slate-100 sm:px-6 lg:px-8 lg:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/logo.jpeg"
            alt="Bionex logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-emerald-400/60 bg-slate-900"
          />
        </Link>

        {/* Desktop nav */}
        <div className="max-md:hidden items-center gap-1 flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                className:
                  '!text-white bg-slate-900/70 border border-emerald-500/40',
              }}
              inactiveProps={{
                className:
                  'text-black hover:text-white hover:bg-slate-900/60 border border-transparent',
              }}
              className="rounded-full px-4 py-2 font-normal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className=" items-center rounded-md p-2 text-black hover:bg-slate-100 hidden max-md:flex"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-slate-800 bg-white transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              activeProps={{
                className:
                  'border-l-4 border-emerald-500 bg-slate-900 text-white',
              }}
              inactiveProps={{
                className:
                  'border-l-4 border-transparent text-black hover:bg-slate-900 hover:text-white',
              }}
              className="block rounded-md px-4 py-3 text-sm font-normal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
