import type { Metadata } from 'next';
import { FruehstueckPage, fruehstueckMetadata } from '@/components/pages/FruehstueckPage';

export function generateMetadata(): Metadata {
  return fruehstueckMetadata('de');
}

export default function Page() {
  return <FruehstueckPage lang="de" />;
}
