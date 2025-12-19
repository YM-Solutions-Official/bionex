/**
 * @file features/contact/components/ContactForm.tsx
 * @description Contact form with validation
 */

import { Input } from '@/components/ui'
import { CONTACT_SERVICE_OPTIONS } from '@/lib/constants/contact.constants'
import { useContactForm } from '@/lib/hooks'

/**
 * Contact form with fields for name, email, service, and message
 */
export function ContactForm() {
  const { formData, errors, isSubmitting, updateField, submit } =
    useContactForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-4 sm:p-8 lg:p-9"
    >
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            placeholder="First name"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            error={errors.firstName}
          />
          <Input
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            error={errors.lastName}
          />
        </div>

        <Input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          error={errors.email}
        />

        <select
          value={formData.service}
          onChange={(e) => updateField('service', e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        >
          {CONTACT_SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <textarea
          rows={4}
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
