import type { Metadata } from 'next';
import Terrace from '@/components/sections/Terrace';

export const metadata: Metadata = {
  title: 'Terrazza Estiva',
  description:
    'Terrazza estiva sul Kurfürstendamm a Berlino Charlottenburg. Serate tra ombra di ulivi, luce di candele e calma mediterranea da Casa Bellucci.',
  openGraph: {
    title: 'Terrazza Estiva | Casa Bellucci',
    description:
      'Un pezzo di Sicilia nel cuore di Berlino. Terrazza estiva con ombra di ulivi, luce di candele e calma mediterranea sul Kurfürstendamm.',
    url: 'https://casabellucci.de/it/terrazza-estiva',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/terrazza-estiva',
    languages: {
      de: 'https://casabellucci.de/sommerterrasse-kudamm',
      en: 'https://casabellucci.de/en/summer-terrace',
      it: 'https://casabellucci.de/it/terrazza-estiva',
    },
  },
};

export default function TerrazzaEstivaPage() {
  return (
    <main>
      <Terrace locale="it" />
    </main>
  );
}
