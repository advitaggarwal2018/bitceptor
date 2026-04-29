import type { Metadata } from 'next';
import ContactForm from '@/components/contact-form'
import { Card , CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {

    title: 'Contact Us',
    description: 'Get in touch with Bitceptor for IT services and AI solutions inquiries,',
    openGraph:
    {
        title: 'Contact US | Bitceptor',
        description: 'Get in touch with Bitceptor for IT services and AI solutions inquiries,',
        url: '/contact',
    },
}

export default function ContactPage()
 {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left column - Company contact info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help with your IT services and AI solutions needs.
            Reach out to discuss how we can support your business goals.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h2 className="font-semibold mb-1">Email</h2>
              <p className="text-muted-foreground">[help@bitceptor.com]</p>
            </div>
            <div>
              <h2 className="font-semibold mb-1">Phone</h2>
              <p className="text-muted-foreground">[+91-9582800081]</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Or fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Right column - Contact form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}