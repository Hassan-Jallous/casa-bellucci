'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { type Locale, getTranslation } from '@/lib/i18n';
import MobileNav from './MobileNav';

interface HeaderProps {
  locale: Locale;
}

const navKeys = [
  { key: 'nav.home' as const, href: '' },
  { key: 'nav.menu' as const, href: '#karte' },
  { key: 'nav.about' as const, href: '#ueber-uns' },
  { key: 'nav.gallery' as const, href: '#galerie' },
  { key: 'nav.events' as const, href: '#events' },
  { key: 'nav.press' as const, href: '#presse' },
  { key: 'nav.contact' as const, href: '#kontakt' },
];

const localeLabels: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  it: 'IT',
};

function getLocalePath(locale: Locale): string {
  return locale === 'de' ? '/' : `/${locale}/`;
}

export default function Header({ locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useCallback(
    (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key),
    [locale]
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const basePath = locale === 'de' ? '' : `/${locale}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 shadow-sm backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href={getLocalePath(locale)}
            className={`font-playfair text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-cream'}`}
          >
            Casa Bellucci
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navKeys.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={`${basePath}/${href}`}
                  className={`font-cormorant text-base font-medium tracking-wide transition-colors duration-300 hover:text-terracotta ${scrolled ? 'text-charcoal/80' : 'text-cream/80'}`}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <div className={`flex items-center gap-1 font-cormorant text-sm tracking-wide transition-colors duration-300 ${scrolled ? 'text-charcoal/60' : 'text-cream/60'}`}>
              {(['de', 'en', 'it'] as Locale[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className={`mx-1 ${scrolled ? 'text-charcoal/30' : 'text-cream/30'}`}>|</span>}
                  <Link
                    href={getLocalePath(l)}
                    className={`transition-colors duration-300 hover:text-terracotta ${
                      l === locale ? `font-semibold ${scrolled ? 'text-charcoal' : 'text-cream'}` : ''
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                </span>
              ))}
            </div>

            <Link
              href={`${basePath}/#reservieren`}
              className="rounded-sm bg-terracotta px-6 py-2.5 font-cormorant text-sm font-medium tracking-wider text-cream uppercase transition-colors duration-200 hover:bg-olive"
            >
              {t('nav.reservation')}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
          </button>
        </nav>
      </header>

      <MobileNav
        locale={locale}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
