import type { Metadata } from 'next';
import MenuSection from '@/components/sections/MenuSection';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Il nostro menu con pasta fatta a mano, pesce fresco, vini pregiati e specialita stagionali. Colazione, pranzo e cena.',
  openGraph: {
    title: 'Menu | Casa Bellucci',
    description:
      'Pasta fatta a mano, pesce fresco e specialita stagionali sul Kurfuerstendamm a Berlino.',
    url: 'https://casabellucci.de/it/menu',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/menu',
    languages: {
      de: 'https://casabellucci.de/speisekarte',
      en: 'https://casabellucci.de/en/menu',
      it: 'https://casabellucci.de/it/menu',
    },
  },
};

export default function MenuPage() {
  return (
    <main className="pt-20">
      <MenuSection locale="it" />
    </main>
  );
}
