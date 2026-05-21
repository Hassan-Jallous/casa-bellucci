import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice of Casa Bellucci, Kurfuerstendamm 63, 10707 Berlin.',
  alternates: {
    canonical: 'https://casabellucci.de/en/imprint',
    languages: {
      de: 'https://casabellucci.de/impressum',
      en: 'https://casabellucci.de/en/imprint',
      it: 'https://casabellucci.de/it/note-legali',
    },
  },
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
  return (
    <main className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Legal Notice
        </h1>
        <div className="mt-2 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 space-y-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Information according to Section 5 TMG
            </h2>
            <p className="mt-3">
              {siteConfig.name}<br />
              {siteConfig.address.street}<br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Contact
            </h2>
            <p className="mt-3">
              Phone: {siteConfig.phone}<br />
              Email: {siteConfig.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
