import type { Metadata } from 'next';
import MenuSection from '@/components/sections/MenuSection';

export const metadata: Metadata = {
  title: 'Breakfast & Brunch',
  description:
    'Italian breakfast and brunch on Kurfuerstendamm in Berlin. Fresh cornetti, Eggs Benedict alla Siciliana, homemade granita and more at Casa Bellucci.',
  openGraph: {
    title: 'Breakfast & Brunch | Casa Bellucci',
    description:
      'Italian breakfast and brunch daily from 9 AM. Cornetti, Eggs Benedict alla Siciliana and aromatic espresso.',
    url: 'https://casabellucci.de/en/breakfast-brunch',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/breakfast-brunch',
    languages: {
      de: 'https://casabellucci.de/fruehstueck-brunch-kudamm',
      en: 'https://casabellucci.de/en/breakfast-brunch',
      it: 'https://casabellucci.de/it/colazione-brunch',
    },
  },
};

export default function BreakfastBrunchPage() {
  return (
    <main className="pt-20">
      <MenuSection locale="en" />
    </main>
  );
}
