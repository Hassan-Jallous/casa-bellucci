import type { Metadata } from 'next';
import MenuSection from '@/components/sections/MenuSection';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Our menu with handmade pasta, fresh fish, premium wines and seasonal specialities. Breakfast, lunch and dinner.',
  openGraph: {
    title: 'Menu | Casa Bellucci',
    description:
      'Handmade pasta, fresh fish and seasonal specialities on Kurfuerstendamm, Berlin.',
    url: 'https://casabellucci.de/en/menu',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/menu',
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
      <MenuSection locale="en" />
    </main>
  );
}
