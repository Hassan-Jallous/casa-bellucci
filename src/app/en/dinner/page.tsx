import type { Metadata } from 'next';
import MenuSection from '@/components/sections/MenuSection';

export const metadata: Metadata = {
  title: 'Dinner',
  description:
    'Italian dinner on Kurfuerstendamm in Berlin. Handmade pasta, fresh fish, fine wines and DJ evenings at Casa Bellucci.',
  openGraph: {
    title: 'Dinner | Casa Bellucci',
    description:
      'Dinner from 6 PM with handmade pasta, fresh fish and Sicilian wines. Friday and Saturday with DJ.',
    url: 'https://casabellucci.de/en/dinner',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/dinner',
    languages: {
      de: 'https://casabellucci.de/dinner',
      en: 'https://casabellucci.de/en/dinner',
      it: 'https://casabellucci.de/it/cena',
    },
  },
};

export default function DinnerPage() {
  return (
    <main className="pt-20">
      <MenuSection locale="en" />
    </main>
  );
}
