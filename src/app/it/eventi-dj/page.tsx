import type { Metadata } from 'next';
import Events from '@/components/sections/Events';

export const metadata: Metadata = {
  title: 'Eventi & DJ',
  description:
    'Eventi e DJ da Casa Bellucci sul Kurfuerstendamm. DJ dal vivo il venerdi e il sabato, buona musica e lunghe serate a Berlino Charlottenburg.',
  openGraph: {
    title: 'Eventi & DJ | Casa Bellucci',
    description:
      'DJ dal vivo il venerdi e il sabato sul Kurfuerstendamm. Suoni lounge e lunghe serate da Casa Bellucci.',
    url: 'https://casabellucci.de/it/eventi-dj',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/eventi-dj',
    languages: {
      de: 'https://casabellucci.de/events-dj',
      en: 'https://casabellucci.de/en/events-dj',
      it: 'https://casabellucci.de/it/eventi-dj',
    },
  },
};

export default function EventiDjPage() {
  return (
    <main className="pt-20">
      <Events locale="it" />
    </main>
  );
}
