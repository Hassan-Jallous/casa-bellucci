import type { Metadata } from 'next';
import { CookiePage, cookieMetadata } from '@/components/pages/CookiePage';

export function generateMetadata(): Metadata {
  return cookieMetadata('de');
}

export default function Page() {
  return <CookiePage lang="de" />;
}
