import type { ReactNode } from 'react';
import { UIProvider } from '@/components/UIProvider';
import { Header } from '@/components/sections/Header';
import { MobileNav } from '@/components/sections/MobileNav';
import { Footer } from '@/components/sections/Footer';
import { ReserveBar } from '@/components/sections/ReserveBar';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <UIProvider>
      <div id="top">
        <Header />
        <MobileNav />
        {children}
        <Footer />
        <ReserveBar />
      </div>
    </UIProvider>
  );
}
