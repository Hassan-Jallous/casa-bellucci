import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Casa Bellucci | Italian Restaurant Berlin',
    template: '%s | Casa Bellucci',
  },
  description:
    'Casa Bellucci, authentic Italian cuisine on Kurfuerstendamm in Berlin. Handmade pasta, premium wines and Mediterranean ambience.',
  openGraph: {
    locale: 'en_US',
    siteName: 'Casa Bellucci',
  },
  alternates: {
    canonical: 'https://casabellucci.de/en',
    languages: {
      de: 'https://casabellucci.de',
      en: 'https://casabellucci.de/en',
      it: 'https://casabellucci.de/it',
    },
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header locale="en" />
      {children}
      <Footer locale="en" />
      <CookieBanner locale="en" />
    </>
  );
}
