import type { Metadata } from 'next';
import Reservation from '@/components/sections/Reservation';

export const metadata: Metadata = {
  title: 'Reservation',
  description:
    'Reserve a table at Casa Bellucci on Kurfuerstendamm in Berlin. Online reservation or by phone at +49 30 88629828.',
  openGraph: {
    title: 'Reservation | Casa Bellucci',
    description:
      'Reserve your table online or by phone at +49 30 88629828. Casa Bellucci on Kurfuerstendamm.',
    url: 'https://casabellucci.de/en/reservation',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/reservation',
    languages: {
      de: 'https://casabellucci.de/reservierung',
      en: 'https://casabellucci.de/en/reservation',
      it: 'https://casabellucci.de/it/prenotazione',
    },
  },
};

export default function ReservationPage() {
  return (
    <main className="pt-20">
      <Reservation locale="en" />
    </main>
  );
}
