import type { Metadata } from 'next';
import { ItalienischPage, italienischMetadata } from '@/components/pages/ItalienischPage';

export function generateMetadata(): Metadata {
  return italienischMetadata('de');
}

export default function Page() {
  return <ItalienischPage lang="de" />;
}
