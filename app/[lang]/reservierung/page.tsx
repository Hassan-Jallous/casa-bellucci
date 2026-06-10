import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { ReservierungPage, reservierungMetadata } from '@/components/pages/ReservierungPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return reservierungMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <ReservierungPage lang={lang} />;
}
