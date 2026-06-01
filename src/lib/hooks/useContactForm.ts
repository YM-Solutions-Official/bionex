/**
 * @file lib/hooks/useContactForm.ts
 * @description Hook for managing contact form state and validation
 */

import { useState } from 'react'
import type { ContactFormData } from '@/lib/types'

type SubmitStatus = 'idle' | 'success' | 'error'

interface UseContactFormReturn {
  formData: ContactFormData
  errors: Partial<ContactFormData>
  isSubmitting: boolean
  submitStatus: SubmitStatus
  submitMessage: string
  updateField: (field: keyof ContactFormData, value: string) => void
  submit: () => Promise<boolean>
  reset: () => void
}

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

/**
 * Custom hook for contact form management with validation
 * @returns Form state, handlers, and submission logic
 * @example
 * const { formData, errors, submit } = useContactForm()
 */
export function useContactForm(): UseContactFormReturn {
  const initialData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  }

  const [formData, setFormData] = useState<ContactFormData>(initialData)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  /**
   * Validates form data
   */
  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.service || formData.service === 'Select a service') {
      newErrors.service = 'Please select a service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setSubmitStatus('idle')
    setSubmitMessage('')
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const submit = async () => {
    if (!validate()) return false

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus('error')
      setSubmitMessage('Web3Forms access key is missing.')
      return false
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Bionex enquiry from ${formData.firstName} ${formData.lastName}`,
          from_name: 'Bionex Website',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send contact form')
      }

      setSubmitStatus('success')
      setSubmitMessage('Thanks, your message has been sent.')
      reset()
      return true
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error')
      setSubmitMessage('Sorry, something went wrong. Please try again.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setFormData(initialData)
    setErrors({})
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    submitMessage,
    updateField,
    submit,
    reset,
  }
}
