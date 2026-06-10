import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { ImpressumPage, impressumMetadata } from '@/components/pages/ImpressumPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return impressumMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <ImpressumPage lang={lang} />;
}
