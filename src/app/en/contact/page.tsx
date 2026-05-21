import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact & Directions',
  description:
    'Contact and directions to Casa Bellucci at Kurfuerstendamm 63, 10707 Berlin Charlottenburg. Phone, email and Google Maps.',
  openGraph: {
    title: 'Contact & Directions | Casa Bellucci',
    description:
      'Kurfuerstendamm 63, 10707 Berlin. Near Adenauerplatz U-Bahn station. Phone and directions.',
    url: 'https://casabellucci.de/en/contact',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/contact',
    languages: {
      de: 'https://casabellucci.de/kontakt-anfahrt',
      en: 'https://casabellucci.de/en/contact',
      it: 'https://casabellucci.de/it/contatto',
    },
  },
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact locale="en" />
    </main>
  );
}
