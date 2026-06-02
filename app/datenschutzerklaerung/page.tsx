import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';
import { getWordPressPage } from '@/lib/wordpress';

export const metadata: Metadata = pageMetadata({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Casa Bellucci.',
  path: '/datenschutzerklaerung/',
  index: false,
});

export default async function DatenschutzPage() {
  const page = await getWordPressPage('datenschutzerklaerung');
  return <LegalPage page={page} eyebrow="Datenschutz" />;
}
