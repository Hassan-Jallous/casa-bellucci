import type { Metadata } from 'next';
import { ReservierungPage, reservierungMetadata } from '@/components/pages/ReservierungPage';

export function generateMetadata(): Metadata {
  return reservierungMetadata('de');
}

export default function Page() {
  return <ReservierungPage lang="de" />;
}
