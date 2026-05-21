import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Casa Bellucci | Ristorante Italiano Berlino',
    template: '%s | Casa Bellucci',
  },
  description:
    'Casa Bellucci, autentica cucina italiana sul Kurfuerstendamm a Berlino. Pasta fatta a mano, vini pregiati e atmosfera mediterranea.',
  openGraph: {
    locale: 'it_IT',
    siteName: 'Casa Bellucci',
  },
  alternates: {
    canonical: 'https://casabellucci.de/it',
    languages: {
      de: 'https://casabellucci.de',
      en: 'https://casabellucci.de/en',
      it: 'https://casabellucci.de/it',
    },
  },
};

export default function ItLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header locale="it" />
      {children}
      <Footer locale="it" />
      <CookieBanner locale="it" />
    </>
  );
}
