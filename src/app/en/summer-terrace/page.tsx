import type { Metadata } from 'next';
import Terrace from '@/components/sections/Terrace';

export const metadata: Metadata = {
  title: 'Summer Terrace',
  description:
    'Summer terrace on Kurfürstendamm in Berlin Charlottenburg. Enjoy warm evenings among olive-tree shade, candlelight and Mediterranean calm at Casa Bellucci.',
  openGraph: {
    title: 'Summer Terrace | Casa Bellucci',
    description:
      'A piece of Sicily in the heart of Berlin. Summer terrace with olive-tree shade, candlelight and Mediterranean calm on Kurfürstendamm.',
    url: 'https://casabellucci.de/en/summer-terrace',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/summer-terrace',
    languages: {
      de: 'https://casabellucci.de/sommerterrasse-kudamm',
      en: 'https://casabellucci.de/en/summer-terrace',
      it: 'https://casabellucci.de/it/terrazza-estiva',
    },
  },
};

export default function SummerTerracePage() {
  return (
    <main>
      <Terrace locale="en" />
    </main>
  );
}
