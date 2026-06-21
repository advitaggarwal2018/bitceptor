import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServiceOverview } from "@/components/home/service-overview";
import { offerings } from '@/lib/data/offerings';
import { aiSolutions } from '@/lib/data/ai-solutions';
import { aboutInfo } from '@/lib/data/about';
import ServiceCard from '@/components/service-card';
import ContactForm from '@/components/contact-form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bitceptor Systems | Engineering Intelligent Systems for the Future',
  description: 'Bitceptor delivers innovative IT services and cutting-edge AI solutions. Specializing in cloud infrastructure, custom software, machine learning, and automation.',
  openGraph: {
    title: 'Bitceptor Systems | Home',
    description: 'Bitceptor delivers innovative IT services and cutting-edge AI solutions.',
    url: '/',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Service Overview Section */}
      <ServiceOverview />

      {/* Offerings Section */}
      <section id="offerings" className="container mx-auto px-4 py-16 md:py-24 border-t">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We deliver enterprise-grade IT solutions that empower businesses to
            innovate, scale, and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((service) => (
            <ServiceCard key={service.id} {...service} accentColor="blue" />
          ))}
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="container mx-auto px-4 py-16 md:py-24 border-t bg-slate-50/50">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">AI Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Harness the power of artificial intelligence to transform your business
            operations, unlock new insights, and drive intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiSolutions.map((solution) => (
            <ServiceCard key={solution.id} {...solution} accentColor="purple" />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 md:py-24 border-t">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Bitceptor</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission, values, and commitment to delivering innovative IT and AI solutions.
            </p>
          </div>

          {/* Section 1 - Company Background */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutInfo.background}
            </p>
          </div>

          {/* Section 2 - Mission */}
          <div>
            <Card className="border-2 border-slate-200 hover:border-blue-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{aboutInfo.mission}</p>
              </CardContent>
            </Card>
          </div>

          {/* Section 3 - Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutInfo.values.map((value, index) => {
                const [title, description] = value.split(': ');
                return (
                  <Card
                    key={index}
                    className="group border-2 border-slate-200 hover:border-blue-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  >
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 group-hover:text-slate-900 transition-colors">{title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 md:py-24 border-t bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - Company contact info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Contact Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;re here to help with your IT services and AI solutions needs.
                Reach out to discuss how we can support your business goals.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-blue-400/30">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-500 uppercase tracking-wider">Email</h4>
                    <a
                      href={`mailto:${aboutInfo.contact.email}`}
                      className="text-lg font-medium hover:underline hover:text-blue-600 transition-colors"
                    >
                      {aboutInfo.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-blue-400/30">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-500 uppercase tracking-wider">Phone</h4>
                    <p className="text-lg font-medium text-slate-800">{aboutInfo.contact.phone}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Or fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Right column - Contact form */}
            <div>
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}