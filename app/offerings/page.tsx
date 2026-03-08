import type { Metadata } from 'next';
import { offerings } from '@/lib/data/offerings';
import ServiceCard from '@/components/service-card';

export const metadata: Metadata = 
{
    title: 'IT Services and Offerings',
    description:
     'Comprehensive IT services including cloud solutions, custom software development, data analytics, cybersecurity, and managed services.',
    openGraph: {
        title : 'IT Services and Offerings | Bitceptor',
        description:'Comprehensive IT services including cloud solutions, custom software development, data analytics, cybersecurity, and managed services.',
        url: '/offerings',
    },
};
export default function OfferingPage()
{
    return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          We deliver enterprise-grade IT solutions that empower businesses to
          innovate, scale, and succeed in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((service) => (
          <ServiceCard key={service.id} {...service} accentColor="blue" />
        ))}
      </div>
    </main>
  );
}