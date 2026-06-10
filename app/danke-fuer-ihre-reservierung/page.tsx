import type { Metadata } from 'next';
import { DankePage, dankeMetadata } from '@/components/pages/DankePage';

export function generateMetadata(): Metadata {
  return dankeMetadata('de');
}

export default function Page() {
  return <DankePage lang="de" />;
}
