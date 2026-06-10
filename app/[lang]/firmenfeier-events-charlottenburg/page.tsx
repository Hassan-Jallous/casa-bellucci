import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { EventsPage, eventsMetadata } from '@/components/pages/EventsPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return eventsMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <EventsPage lang={lang} />;
}
