import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getWordPressPage } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung · Casa Bellucci',
  description: 'Datenschutzerklärung von Casa Bellucci.',
  robots: { index: false, follow: true },
};

export default async function DatenschutzPage() {
  const page = await getWordPressPage('datenschutzerklaerung');
  return <LegalPage page={page} eyebrow="Datenschutz" />;
}
