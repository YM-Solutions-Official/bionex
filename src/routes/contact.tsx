// src/routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ContactForm, ContactInfo } from '@/features/contact'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

/**
 * Contact page - contact form and information
 */
function Contact() {
  return (
    <main>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
        <div className="flex-1 lg:w-3/5">
          <ContactForm />
        </div>
        <div className="flex-1 lg:w-2/5">
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
