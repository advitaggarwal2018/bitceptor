'use server'

import { headers } from 'next/headers'
import { ratelimit } from '@/lib/rate-limit-memory'
import { contactSchema } from '@/lib/validations/contact'
import { addContactToSheet } from '@/lib/google-sheets'

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Honeypot check - silent failure to avoid bot detection
    const honeypot = formData.get('honeypot')
    if (honeypot) {
      return {
        success: false,
        message: 'Form submission failed',
      }
    }

    // Rate limiting by IP address
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') ?? 'anonymous'
    const { success: rateLimitOk } = await ratelimit.limit(ip)

    if (!rateLimitOk) {
      return {
        success: false,
        message: 'Too many requests. Please try again in a minute.',
      }
    }

    // Extract and validate form data
    const formValues = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      honeypot: formData.get('honeypot') as string | undefined,
    }

    const result = contactSchema.safeParse(formValues)

    if (!result.success) {
      return {
        success: false,
        message: 'Please fix the errors below',
        errors: result.error.flatten().fieldErrors,
      }
    }

    const { name, email, company, message } = result.data

    // Save to Google Sheets
    await addContactToSheet({
      name,
      email,
      company,
      message,
    })

    return {
      success: true,
      message: 'Thank you! We will get back to you soon.',
    }
  } catch (error) {
    console.error('Unexpected error in submitContactForm:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}