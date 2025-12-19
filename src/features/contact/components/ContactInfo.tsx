/**
 * @file features/contact/components/ContactInfo.tsx
 * @description Contact information section
 */

import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT_REASONS } from '@/lib/constants/contact.constants'
import { Card } from '@/components/ui'

/**
 * Contact information and reasons section
 */
export function ContactInfo() {
  return (
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
        <ContactItem icon={Mail} title="Email us" detail="hello@bionex.com" />
        <ContactItem icon={Phone} title="Call us" detail="+91 98765 43210" />
        <ContactItem
          icon={MapPin}
          title="Visit us"
          detail="Research Park, IIT Delhi"
        />
      </div>

      <Card variant="ghost" hover={false}>
        <h4 className="mb-3 text-sm font-semibold text-slate-900 sm:text-base">
          Why choose us
        </h4>
        <ul className="space-y-2">
          {CONTACT_REASONS.map((item: string) => (
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
  )
}

interface ContactItemProps {
  icon: any
  title: string
  detail: string
}

function ContactItem({ icon: Icon, title, detail }: ContactItemProps) {
  return (
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
}
