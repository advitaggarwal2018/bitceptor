'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const initialState: ContactFormState = {
  success: false,
  message: '',
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          disabled={isPending}
        />
        {state.errors?.name && (
          <p className="text-sm text-red-600 mt-1">{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          disabled={isPending}
        />
        {state.errors?.email && (
          <p className="text-sm text-red-600 mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Company field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company *
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          required
          disabled={isPending}
        />
        {state.errors?.company && (
          <p className="text-sm text-red-600 mt-1">{state.errors.company[0]}</p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isPending}
        />
        {state.errors?.message && (
          <p className="text-sm text-red-600 mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Honeypot field (hidden from users) */}
      <input
        type="text"
        name="honeypot"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Submit button */}
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Feedback message display */}
      {state.message && (
        <div
          className={`p-4 rounded-md ${
            state.success
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  )
}