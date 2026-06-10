import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { FruehstueckPage, fruehstueckMetadata } from '@/components/pages/FruehstueckPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return fruehstueckMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <FruehstueckPage lang={lang} />;
}
