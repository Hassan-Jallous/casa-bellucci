import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy of Casa Bellucci. Information on the processing of personal data in accordance with GDPR.',
  alternates: {
    canonical: 'https://casabellucci.de/en/privacy-policy',
    languages: {
      de: 'https://casabellucci.de/datenschutzerklaerung',
      en: 'https://casabellucci.de/en/privacy-policy',
      it: 'https://casabellucci.de/it/informativa-privacy',
    },
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-2 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 space-y-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              1. Data Protection at a Glance
            </h2>
            <p className="mt-3">
              The following notices provide a simple overview of what happens to your personal data
              when you visit this website. Personal data is any data by which you can be personally identified.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              2. Data Collection on This Website
            </h2>
            <p className="mt-3">
              Data collection on this website is carried out by the website operator.
              The operator&apos;s contact details can be found in the required legal notice of this website.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              3. Your Rights
            </h2>
            <p className="mt-3">
              You have the right to receive information about the origin, recipient, and purpose of your
              stored personal data free of charge at any time. You also have the right to request the
              correction or deletion of this data.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
