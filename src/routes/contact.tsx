import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react'

function Contact() {
  return (
    <div className="w-full min-h-screen bg-slate-50 px-4 pt-27.5 pb-12 font-sans text-slate-900 sm:px-5 lg:px-8 lg:pt-30">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:flex-row">
        {/* LEFT: FORM */}
        <div className="w-full border-b border-slate-100 p-5 sm:p-6 lg:w-3/5 lg:border-b-0 lg:border-r lg:p-8">
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Get in touch
          </h1>
          <p className="mt-2 mb-6 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Share a few details and the team will respond within one business
            day.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <InputGroup label="First name" placeholder="Jane" />
              <InputGroup label="Last name" placeholder="Doe" />
            </div>

            <InputGroup
              label="Email address"
              type="email"
              placeholder="jane@university.edu"
            />

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm">
                Topic
              </label>
              <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 sm:text-sm">
                <option>General inquiry</option>
                <option>Request a demo</option>
                <option>Partnership proposal</option>
                <option>Technical support</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full resize-none rounded-md border border-slate-200 px-3 py-2.5 text-xs text-slate-800 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 sm:text-sm"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-600 sm:w-auto sm:text-sm"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* RIGHT: INFO */}
        <div className="relative flex w-full flex-col justify-between bg-slate-950 px-5 py-6 text-white sm:px-6 lg:w-2/5 lg:p-8">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/3 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative z-10 space-y-6">
            <h3 className="text-base font-semibold text-emerald-400 sm:text-lg">
              Contact information
            </h3>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="h-4 w-4 text-emerald-400" />}
                title="Email us"
                content="official.bionex@gmail.com"
              />
              <ContactItem
                icon={<Phone className="h-4 w-4 text-emerald-400" />}
                title="Call us"
                content="+91 98765 43210"
              />
              <ContactItem
                icon={<MapPin className="h-4 w-4 text-emerald-400" />}
                title="Visit HQ"
                content={`KH. NO. 134/10 & 134/11
GROUND FLOOR STREET NO. 75, A BLK-B SANT NAGAR
BURARI, DELHI 110084`}
              />
              <ContactItem
                icon={<Clock className="h-4 w-4 text-emerald-400" />}
                title="Working hours"
                content="Mon – Fri: 9:00 am – 6:00 pm"
              />
            </div>
          </div>

          <div className="relative z-10 mt-8 border-t border-slate-800 pt-4 text-[0.7rem] text-slate-400 sm:text-xs">
            Trusted by 50+ educational institutions across India.
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Sub components ---------- */

type InputGroupProps = {
  label: string
  type?: string
  placeholder?: string
}

const InputGroup = ({ label, type = 'text', placeholder }: InputGroupProps) => (
  <div className="w-full">
    <label className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs text-slate-800 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 sm:text-sm"
    />
  </div>
)

type ContactItemProps = {
  icon: React.ReactNode
  title: string
  content: string
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => (
  <div className="flex items-start gap-3">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5">
      {icon}
    </div>
    <div>
      <h4 className="text-xs font-semibold text-white sm:text-sm">{title}</h4>
      <p className="mt-1 whitespace-pre-line text-[0.7rem] text-slate-300 sm:text-xs">
        {content}
      </p>
    </div>
  </div>
)

export const Route = createFileRoute('/contact')({
  component: Contact,
})
