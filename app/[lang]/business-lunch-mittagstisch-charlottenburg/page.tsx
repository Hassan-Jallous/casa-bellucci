import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LunchPage, lunchMetadata } from '@/components/pages/LunchPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return lunchMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <LunchPage lang={lang} />;
}
