import type { Metadata } from 'next';
import MenuSection from '@/components/sections/MenuSection';

export const metadata: Metadata = {
  title: 'Colazione & Brunch',
  description:
    'Colazione e brunch italiano sul Kurfuerstendamm a Berlino. Cornetti freschi, Eggs Benedict alla Siciliana, granita fatta in casa e altro da Casa Bellucci.',
  openGraph: {
    title: 'Colazione & Brunch | Casa Bellucci',
    description:
      'Colazione e brunch italiano tutti i giorni dalle 09:00. Cornetti, Eggs Benedict alla Siciliana ed espresso aromatico.',
    url: 'https://casabellucci.de/it/colazione-brunch',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/colazione-brunch',
    languages: {
      de: 'https://casabellucci.de/fruehstueck-brunch-kudamm',
      en: 'https://casabellucci.de/en/breakfast-brunch',
      it: 'https://casabellucci.de/it/colazione-brunch',
    },
  },
};

export default function ColazioneBrunchPage() {
  return (
    <main className="pt-20">
      <MenuSection locale="it" />
    </main>
  );
}
