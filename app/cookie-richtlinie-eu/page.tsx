import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';
import { getWordPressPage } from '@/lib/wordpress';

export const metadata: Metadata = pageMetadata({
  title: 'Cookie-Richtlinie',
  description: 'Cookie-Richtlinie von Casa Bellucci.',
  path: '/cookie-richtlinie-eu/',
  index: false,
});

export default async function CookiePolicyPage() {
  const page = await getWordPressPage('cookie-richtlinie-eu');
  return <LegalPage page={page} eyebrow="Cookies" />;
}
