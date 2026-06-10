import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { BarPage, barMetadata } from '@/components/pages/BarPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return barMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <BarPage lang={lang} />;
}
