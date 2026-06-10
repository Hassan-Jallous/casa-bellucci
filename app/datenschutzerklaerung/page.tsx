import type { Metadata } from 'next';
import { DatenschutzPage, datenschutzMetadata } from '@/components/pages/DatenschutzPage';

export function generateMetadata(): Metadata {
  return datenschutzMetadata('de');
}

export default function Page() {
  return <DatenschutzPage lang="de" />;
}
