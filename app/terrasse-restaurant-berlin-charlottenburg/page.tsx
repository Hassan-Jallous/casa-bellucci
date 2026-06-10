import type { Metadata } from 'next';
import { TerrassePage, terrasseMetadata } from '@/components/pages/TerrassePage';

export function generateMetadata(): Metadata {
  return terrasseMetadata('de');
}

export default function Page() {
  return <TerrassePage lang="de" />;
}
