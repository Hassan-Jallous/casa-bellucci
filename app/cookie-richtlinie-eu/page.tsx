import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getWordPressPage } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie · Casa Bellucci',
  description: 'Cookie-Richtlinie von Casa Bellucci.',
  robots: { index: false, follow: true },
};

export default async function CookiePolicyPage() {
  const page = await getWordPressPage('cookie-richtlinie-eu');
  return <LegalPage page={page} eyebrow="Cookies" />;
}
