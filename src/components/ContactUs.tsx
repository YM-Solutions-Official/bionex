import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'

export default function ContactUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 font-sans">
        {/* Left */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              Get in touch
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-lg">
              Share a few details and the team will reply within 24 hours.
            </p>
          </div>

          <div className="space-y-5">
            <ContactItem
              icon={Mail}
              title="Email us"
              detail="hello@bionex.com"
            />
            <ContactItem
              icon={Phone}
              title="Call us"
              detail="+91 98765 43210"
            />
            <ContactItem
              icon={MapPin}
              title="Visit us"
              detail="Research Park, IIT Delhi"
            />
          </div>

          <div className="mt-4 rounded-2xl border shadow-md border-slate-100 bg-slate-50 p-5 sm:p-6">
            <h4 className="mb-3 text-sm font-semibold text-slate-900 sm:text-base">
              Why choose us
            </h4>
            <ul className="space-y-2">
              {['24/7 support', 'Expert team', 'Frugal innovation'].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-3xl h-full border border-slate-100 bg-white p-4 shadow-xl sm:p-8 lg:p-9 ">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>

            <Input type="email" placeholder="Email address" />

            <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
              <option>Select a service</option>
              <option>Bioreactors</option>
              <option>Web development</option>
            </select>

            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

type ContactItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  detail: string
}

const ContactItem = ({ icon: Icon, title, detail }: ContactItemProps) => (
  <div className="flex items-center gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500 sm:text-sm">{detail}</p>
    </div>
  </div>
)

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => (
  <input
    {...props}
    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
  />
)
