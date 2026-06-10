import type { Metadata } from 'next';
import { HomePage, homeMetadata } from '@/components/pages/HomePage';

export function generateMetadata(): Metadata {
  return homeMetadata('de');
}

export default function Page() {
  return <HomePage lang="de" />;
}
