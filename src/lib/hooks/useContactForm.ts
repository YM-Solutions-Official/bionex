/**
 * @file lib/hooks/useContactForm.ts
 * @description Hook for managing contact form state and validation
 */

import { useState } from 'react'
import type { ContactFormData } from '@/lib/types'

interface UseContactFormReturn {
  formData: ContactFormData
  errors: Partial<ContactFormData>
  isSubmitting: boolean
  updateField: (field: keyof ContactFormData, value: string) => void
  submit: () => Promise<void>
  reset: () => void
}

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

  /**
   * Validates form data
   */
  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const submit = async () => {
    if (!validate()) return

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      reset()
    } catch (error) {
      console.error('Form submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setFormData(initialData)
    setErrors({})
  }

  return { formData, errors, isSubmitting, updateField, submit, reset }
}
