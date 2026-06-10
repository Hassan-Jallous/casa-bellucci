import type { Metadata } from 'next';
import { BarPage, barMetadata } from '@/components/pages/BarPage';

export function generateMetadata(): Metadata {
  return barMetadata('de');
}

export default function Page() {
  return <BarPage lang="de" />;
}
