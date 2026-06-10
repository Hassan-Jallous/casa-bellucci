import type { ReactNode } from 'react';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'it' }];
}

export default function LangLayout({ children }: { children: ReactNode }) {
  return children;
}
