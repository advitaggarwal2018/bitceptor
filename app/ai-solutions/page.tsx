import type { Metadata } from 'next';
import { aiSolutions } from '@/lib/data/ai-solutions';
import ServiceCard from '@/components/service-card';

export const metadata: Metadata = 
{
    title: 'AI Solutions',
    description:
     'Cutting-edge AI capabilities including machine learning, natural language processing, computer vision and AT integration services.',
    openGraph: {
        title : 'AI Solutions | Bitceptor',
        description:'Cutting-edge AI capabilities including machine learning, natural language processing, computer vision and AT integration services.',
        url: '/ai-solutions',
    },
};

export default function AISolutionsPage() {
    return (
        <main className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Solutions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Harness the power of artificial intelligence to transform your business
          operations, unlock new insights, and drive intelligent automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiSolutions.map((solution) => (
          <ServiceCard key={solution.id} {...solution} accentColor="purple" />
        ))}
      </div>
    </main>

    );
}