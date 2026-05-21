import type { Metadata } from 'next';
import Reservation from '@/components/sections/Reservation';

export const metadata: Metadata = {
  title: 'Prenotazione',
  description:
    'Prenota un tavolo da Casa Bellucci sul Kurfuerstendamm a Berlino. Prenotazione online o telefonica al +49 30 88629828.',
  openGraph: {
    title: 'Prenotazione | Casa Bellucci',
    description:
      'Prenota il tuo tavolo online o per telefono al +49 30 88629828. Casa Bellucci sul Kurfuerstendamm.',
    url: 'https://casabellucci.de/it/prenotazione',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it/prenotazione',
    languages: {
      de: 'https://casabellucci.de/reservierung',
      en: 'https://casabellucci.de/en/reservation',
      it: 'https://casabellucci.de/it/prenotazione',
    },
  },
};

export default function PrenotazionePage() {
  return (
    <main className="pt-20">
      <Reservation locale="it" />
    </main>
  );
}
