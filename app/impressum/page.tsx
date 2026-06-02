import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getWordPressPage } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Impressum · Casa Bellucci',
  description: 'Impressum der Bellucci Gastronomie GmbH.',
  robots: { index: true, follow: true },
};

export default async function ImpressumPage() {
  const page = await getWordPressPage('impressum');
  return <LegalPage page={page} eyebrow="Legal" />;
}
