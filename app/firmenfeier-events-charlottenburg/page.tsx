import type { Metadata } from 'next';
import { EventsPage, eventsMetadata } from '@/components/pages/EventsPage';

export function generateMetadata(): Metadata {
  return eventsMetadata('de');
}

export default function Page() {
  return <EventsPage lang="de" />;
}
