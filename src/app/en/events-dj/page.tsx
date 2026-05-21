import type { Metadata } from 'next';
import Events from '@/components/sections/Events';

export const metadata: Metadata = {
  title: 'Events & DJ',
  description:
    'Events and DJ at Casa Bellucci on Kurfuerstendamm. Live DJ on Fridays and Saturdays, great music and long evenings in Berlin Charlottenburg.',
  openGraph: {
    title: 'Events & DJ | Casa Bellucci',
    description:
      'Live DJ on Fridays and Saturdays on Kurfuerstendamm. Lounge sounds and long evenings at Casa Bellucci.',
    url: 'https://casabellucci.de/en/events-dj',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/events-dj',
    languages: {
      de: 'https://casabellucci.de/events-dj',
      en: 'https://casabellucci.de/en/events-dj',
      it: 'https://casabellucci.de/it/eventi-dj',
    },
  },
};

export default function EventsDjPage() {
  return (
    <main className="pt-20">
      <Events locale="en" />
    </main>
  );
}
