import type { Metadata } from 'next';
import { LunchPage, lunchMetadata } from '@/components/pages/LunchPage';

export function generateMetadata(): Metadata {
  return lunchMetadata('de');
}

export default function Page() {
  return <LunchPage lang="de" />;
}
