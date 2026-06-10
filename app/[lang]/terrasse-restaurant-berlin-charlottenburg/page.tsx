import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { TerrassePage, terrasseMetadata } from '@/components/pages/TerrassePage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return terrasseMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <TerrassePage lang={lang} />;
}
