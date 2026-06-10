import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { DankePage, dankeMetadata } from '@/components/pages/DankePage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return dankeMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <DankePage lang={lang} />;
}
