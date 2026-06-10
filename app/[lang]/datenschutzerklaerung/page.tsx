import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { DatenschutzPage, datenschutzMetadata } from '@/components/pages/DatenschutzPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return datenschutzMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <DatenschutzPage lang={lang} />;
}
