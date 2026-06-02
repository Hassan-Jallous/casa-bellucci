import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';
import { getWordPressPage } from '@/lib/wordpress';

export const metadata: Metadata = pageMetadata({
  title: 'Impressum',
  description: 'Impressum der Bellucci Gastronomie GmbH in Berlin.',
  path: '/impressum/',
});

export default async function ImpressumPage() {
  const page = await getWordPressPage('impressum');
  return <LegalPage page={page} eyebrow="Legal" />;
}
