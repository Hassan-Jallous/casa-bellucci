'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { type Locale, getTranslation } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

interface FooterProps {
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

function getLocalePath(locale: Locale): string {
  return locale === 'de' ? '/' : `/${locale}/`;
}

export default function Footer({ locale }: FooterProps) {
  const t = useCallback(
    (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key),
    [locale]
  );

  const basePath = locale === 'de' ? '' : `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto h-px max-w-7xl bg-terracotta/40" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href={getLocalePath(locale)}
            className="font-playfair text-2xl font-bold tracking-tight"
          >
            Casa Bellucci
          </Link>
          <p className="mt-4 font-cormorant text-base leading-relaxed text-cream/60">
            {t('hero.subtitle')}
          </p>
        </div>

        <div>
          <h3 className="font-playfair text-sm font-semibold uppercase tracking-widest text-terracotta">
            Navigation
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navKeys.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={`${basePath}/${href}`}
                  className="font-cormorant text-base text-cream/60 transition-colors duration-200 hover:text-terracotta"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-playfair text-sm font-semibold uppercase tracking-widest text-terracotta">
            {t('contact.title')}
          </h3>
          <div className="mt-4 flex flex-col gap-3 font-cormorant text-base text-cream/60">
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.zip} {siteConfig.address.city}</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="transition-colors duration-200 hover:text-terracotta"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors duration-200 hover:text-terracotta"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-playfair text-sm font-semibold uppercase tracking-widest text-terracotta">
            {t('contact.hours.label')}
          </h3>
          <div className="mt-4 flex flex-col gap-2 font-cormorant text-base text-cream/60">
            <p>{t('contact.hours.weekday')}</p>
            <p>{t('contact.hours.sunday')}</p>
          </div>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-cormorant text-sm text-cream/40 transition-colors duration-200 hover:text-terracotta"
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-cream/10 px-6 py-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-cormorant text-sm text-cream/30">
            &copy; {year} {siteConfig.name}
          </p>

          <div className="flex items-center gap-6 font-cormorant text-sm text-cream/30">
            <Link
              href={`${basePath}/${locale === 'en' ? 'imprint' : locale === 'it' ? 'note-legali' : 'impressum'}`}
              className="transition-colors duration-200 hover:text-terracotta"
            >
              {t('footer.legal.imprint')}
            </Link>
            <Link
              href={`${basePath}/${locale === 'en' ? 'privacy-policy' : locale === 'it' ? 'informativa-privacy' : 'datenschutz'}`}
              className="transition-colors duration-200 hover:text-terracotta"
            >
              {t('footer.legal.privacy')}
            </Link>
            <Link
              href={`${basePath}/${locale === 'en' ? 'cookie-policy' : locale === 'it' ? 'politica-cookie' : 'cookies'}`}
              className="transition-colors duration-200 hover:text-terracotta"
            >
              {t('footer.legal.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
