import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contatto e Come Raggiungerci',
  description:
    'Contatto e indicazioni per Casa Bellucci, Kurfuerstendamm 63, 10707 Berlino Charlottenburg. Telefono, e-mail e Google Maps.',
  openGraph: {
    title: 'Contatto e Come Raggiungerci | Casa Bellucci',
    description:
      'Kurfuerstendamm 63, 10707 Berlino. Vicino alla stazione U-Bahn Adenauerplatz. Telefono e indicazioni.',
    url: 'https://casabellucci.de/it/contatto',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/contatto',
    languages: {
      de: 'https://casabellucci.de/kontakt-anfahrt',
      en: 'https://casabellucci.de/en/contact',
      it: 'https://casabellucci.de/it/contatto',
    },
  },
};

export default function ContattoPage() {
  return (
    <main className="pt-20">
      <Contact locale="it" />
    </main>
  );
}
