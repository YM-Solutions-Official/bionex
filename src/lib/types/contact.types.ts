/**
 * @file contact.types.ts
 * @description Contact form and communication types
 */

export interface ContactMethod {
  icon: string
  title: string
  detail: string
}

export interface FormField {
  placeholder: string
  type: string
  width: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  service: string
  message: string
}
