import type { Metadata } from 'next';
import MenuSection from '@/components/sections/MenuSection';

export const metadata: Metadata = {
  title: 'Cena',
  description:
    'Cena italiana sul Kurfuerstendamm a Berlino. Pasta fatta a mano, pesce fresco, vini pregiati e DJ la sera da Casa Bellucci.',
  openGraph: {
    title: 'Cena | Casa Bellucci',
    description:
      'Cena dalle 18:00 con pasta fatta a mano, pesce fresco e vini siciliani. Venerdi e sabato con DJ.',
    url: 'https://casabellucci.de/it/cena',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/cena',
    languages: {
      de: 'https://casabellucci.de/dinner',
      en: 'https://casabellucci.de/en/dinner',
      it: 'https://casabellucci.de/it/cena',
    },
  },
};

export default function CenaPage() {
  return (
    <main className="pt-20">
      <MenuSection locale="it" />
    </main>
  );
}
