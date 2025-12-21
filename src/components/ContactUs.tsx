import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT_REASONS } from '@/lib/constants/contact.constants'
import { Card, ContactItem } from './ui'
import { ContactForm } from '@/features'
export default function ContactUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 font-sans">
        {/* Left */}
        <div className="space-y-8">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
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
              icon={<Mail className="h-5 w-5" />}
              title="Email us"
              detail="hello@bionex.com"
            />
            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              detail="+91 98765 43210"
            />
            <ContactItem
              icon={<MapPin className="h-5 w-5" />}
              title="Visit us"
              detail="Research Park, IIT Delhi"
            />
          </div>

          <Card variant="ghost" hover={false}>
            <h4 className="mb-3 text-sm font-semibold text-slate-900 sm:text-base">
              Why choose us
            </h4>
            <ul className="space-y-2">
              {CONTACT_REASONS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
