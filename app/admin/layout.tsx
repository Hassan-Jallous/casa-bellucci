import type { Metadata } from 'next';

export const metadata: Metadata = {
  // absolute: verhindert doppeltes Brand-Suffix aus dem Root-Template.
  title: { absolute: 'Admin · Casa Bellucci' },
  description: 'Speisekarten-Verwaltung Casa Bellucci',
  robots: { index: false, follow: false },
  alternates: { canonical: '/admin/' },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
