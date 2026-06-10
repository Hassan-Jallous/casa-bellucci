import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { CookiePage, cookieMetadata } from '@/components/pages/CookiePage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return cookieMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <CookiePage lang={lang} />;
}
