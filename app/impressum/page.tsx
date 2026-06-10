import type { Metadata } from 'next';
import { ImpressumPage, impressumMetadata } from '@/components/pages/ImpressumPage';

export function generateMetadata(): Metadata {
  return impressumMetadata('de');
}

export default function Page() {
  return <ImpressumPage lang="de" />;
}
