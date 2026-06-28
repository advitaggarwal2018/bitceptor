import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServiceOverview } from "@/components/home/service-overview";
import { aiSolutions } from '@/lib/data/ai-solutions';
import ServiceCard from '@/components/service-card';
import { TrustSection } from "@/components/trust-section";
import { ApproachSection } from "@/components/approach-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contactUs-section";
import { AISolutionsSection } from "@/components/aiSolution-section";
import { ClientsSection } from "@/components/our-client";

export const metadata: Metadata = {
  title: "Bitceptor Systems | Engineering Intelligent AI & Cloud Systems",
  description:
    "Bitceptor Systems delivers innovative enterprise IT services, cloud infrastructure, custom software engineering, machine learning, and AI automation solutions.",
  keywords: [
    "Bitceptor Systems",
    "IT Services Company",
    "Enterprise AI Solutions",
    "Cloud Architecture Development",
    "Machine Learning Engineering",
    "Software Automation",
  ],
  alternates: {
    canonical: "https://bitceptor.com",
  },
  openGraph: {
    title: "Bitceptor Systems | Engineering Intelligent AI & Cloud Systems",
    description:
      "Transforming enterprise efficiency with intelligent cloud infrastructure, custom software development, and modern AI automation.",
    url: "https://bitceptor.com",
    siteName: "Bitceptor Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitceptor Systems Services Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitceptor Systems | Enterprise AI & IT Engineering",
    description:
      "Transforming enterprise efficiency with intelligent cloud infrastructure, custom software development, and modern AI automation.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bitceptor Systems",
    image: "https://bitceptor.com/icon.png",
    "@id": "https://bitceptor.com/#service",
    url: "https://bitceptor.com",
    telephone: "",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    serviceOffered: [
      {
        "@type": "Service",
        name: "Cloud & DevOps Engineering",
        description: "Scalable cloud infrastructure design, deployment, and CI/CD automation.",
      },
      {
        "@type": "Service",
        name: "Custom Software Engineering",
        description: "Enterprise web applications, high-performance architecture, and APIs.",
      },
      {
        "@type": "Service",
        name: "Artificial Intelligence & Machine Learning",
        description: "Custom ML models, predictive analytics, and natural language processing solutions.",
      },
      {
        "@type": "Service",
        name: "Enterprise Cybersecurity",
        description: "Robust data protection, threat monitoring, and infrastructure security compliance.",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div id="home">
        <Hero />
      </div>
      <ServiceOverview id="services" />
      <TrustSection />
      <ApproachSection />
      <ClientsSection />
      <AISolutionsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}