import type { Metadata } from 'next';
import Press from '@/components/sections/Press';

export const metadata: Metadata = {
  title: 'Press',
  description:
    'Press articles and media coverage about Casa Bellucci, the Italian restaurant on Kurfuerstendamm in Berlin Charlottenburg.',
  openGraph: {
    title: 'Press | Casa Bellucci',
    description:
      'What the media writes about Casa Bellucci on Kurfuerstendamm. Press articles and reports.',
    url: 'https://casabellucci.de/en/press',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en/press',
    languages: {
      de: 'https://casabellucci.de/presse',
      en: 'https://casabellucci.de/en/press',
      it: 'https://casabellucci.de/it/stampa',
    },
  },
};

export default function PressPage() {
  return (
    <main className="pt-20">
      <Press locale="en" />
    </main>
  );
}
