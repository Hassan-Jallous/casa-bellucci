import type { Metadata } from 'next';
import Press from '@/components/sections/Press';

export const metadata: Metadata = {
  title: 'Stampa',
  description:
    'Articoli stampa e copertura mediatica su Casa Bellucci, il ristorante italiano sul Kurfuerstendamm a Berlino Charlottenburg.',
  openGraph: {
    title: 'Stampa | Casa Bellucci',
    description:
      'Cosa scrivono i media su Casa Bellucci sul Kurfuerstendamm. Articoli stampa e reportage.',
    url: 'https://casabellucci.de/it/stampa',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/stampa',
    languages: {
      de: 'https://casabellucci.de/presse',
      en: 'https://casabellucci.de/en/press',
      it: 'https://casabellucci.de/it/stampa',
    },
  },
};

export default function StampaPage() {
  return (
    <main className="pt-20">
      <Press locale="it" />
    </main>
  );
}
