import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { ItalienischPage, italienischMetadata } from '@/components/pages/ItalienischPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return italienischMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <ItalienischPage lang={lang} />;
}
