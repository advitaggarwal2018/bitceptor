import type { Metadata } from 'next';
import { aboutInfo } from '@/lib/data/about';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Bitceptor's mission, values, and commitment to delivering innovative IT and AI solutions.",
  openGraph: {
    title: 'About Us | Bitceptor',
    description: "Learn about Bitceptor's mission, values, and commitment to delivering innovative IT and AI solutions.",
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">About Bitceptor</h1>

      {/* Section 1 - Company Background */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {aboutInfo.background}
        </p>
      </section>

      {/* Section 2 - Mission */}
      <section className="mb-12">
        <Card className="border-2 border-slate-200 hover:border-blue-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{aboutInfo.mission}</p>
          </CardContent>
        </Card>
      </section>

      {/* Section 3 - Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutInfo.values.map((value, index) => {
            const [title, description] = value.split(': ');
            return (
              <Card
                key={index}
                className="group border-2 border-slate-200 hover:border-blue-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-slate-900 transition-colors">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Section 4 - Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <Card className="border-2 border-slate-200 hover:border-blue-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-blue-400/30">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <a
                  href={`mailto:${aboutInfo.contact.email}`}
                  className="text-lg hover:underline hover:text-blue-600 transition-colors"
                >
                  {aboutInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-blue-400/30">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-lg">{aboutInfo.contact.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}