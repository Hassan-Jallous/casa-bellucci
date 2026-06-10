import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { HomePage, homeMetadata } from '@/components/pages/HomePage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return homeMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
