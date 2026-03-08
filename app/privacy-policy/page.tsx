import type { Metadata } from 'next';
export const metadata: Metadata = 
{
    title: 'Privacy Policy',
    description:
     "Bitceptor's privacy policy and data protection practices.",
    openGraph: {
        title : 'Privacy Policy | Bitceptor',
        description:"Bitceptor's privacy policy and data protection practices.",
        url: '/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = 'February 2026';

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="text-sm text-muted-foreground mb-8">
        Last updated: {lastUpdated} | Note: This is placeholder content
        requiring legal review before public launch.
      </p>

      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            [PLACEHOLDER: Describe data collected - contact form submissions,
            analytics, cookies]
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            [PLACEHOLDER: Purposes - responding to inquiries, improving
            services, etc.]
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="text-muted-foreground mb-4">
            [PLACEHOLDER: Security measures, data retention periods, third-party
            sharing]
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights (GDPR)</h2>
          <p className="text-muted-foreground mb-4">
            [PLACEHOLDER: Right to access, rectification, erasure, data
            portability, objection]
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-muted-foreground mb-4">
            [PLACEHOLDER: Types of cookies used, consent mechanisms]
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            For privacy-related questions, contact: [EMAIL PLACEHOLDER]
          </p>
        </section>
      </div>
    </main>
  );
}