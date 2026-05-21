import type { Metadata } from 'next';
import Terrace from '@/components/sections/Terrace';

export const metadata: Metadata = {
  title: 'Summer Terrace',
  description:
    'Summer terrace on Kurfuerstendamm in Berlin Charlottenburg. Enjoy warm evenings among lemon trees and candlelight at Casa Bellucci.',
  openGraph: {
    title: 'Summer Terrace | Casa Bellucci',
    description:
      'A piece of Sicily in the heart of Berlin. Summer terrace with lemon trees and candlelight on Kurfuerstendamm.',
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
