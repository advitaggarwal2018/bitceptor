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