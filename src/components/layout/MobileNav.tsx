'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { type Locale, getTranslation } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

interface MobileNavProps {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: 'easeOut' as const },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function MobileNav({ locale, isOpen, onClose }: MobileNavProps) {
  const t = useCallback(
    (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key),
    [locale]
  );

  const basePath = locale === 'de' ? '' : `/${locale}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-[60] flex flex-col bg-charcoal px-6 pb-8 pt-20"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center"
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FAF5EF"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6">
            {navKeys.map(({ key, href }, i) => (
              <motion.div
                key={key}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  href={`${basePath}/${href}`}
                  onClick={onClose}
                  className="font-playfair text-3xl font-medium tracking-wide text-cream transition-colors duration-200 hover:text-terracotta"
                >
                  {t(key)}
                </Link>
              </motion.div>
            ))}

            <motion.div
              custom={navKeys.length}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4"
            >
              <Link
                href={`${basePath}/#reservieren`}
                onClick={onClose}
                className="inline-block rounded-sm bg-terracotta px-8 py-3 font-cormorant text-lg font-medium tracking-wider text-cream uppercase transition-colors duration-200 hover:bg-olive"
              >
                {t('nav.reservation')}
              </Link>
            </motion.div>
          </nav>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 font-cormorant text-base tracking-wide text-cream/50">
              {(['de', 'en', 'it'] as Locale[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="mx-1 text-cream/30">|</span>}
                  <Link
                    href={getLocalePath(l)}
                    onClick={onClose}
                    className={`transition-colors duration-200 hover:text-terracotta ${
                      l === locale ? 'font-semibold text-cream' : ''
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                </span>
              ))}
            </div>

            <div className="text-center font-cormorant text-sm leading-relaxed text-cream/40">
              <p>{siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}</p>
              <p className="mt-1">{t('contact.hours.weekday')}</p>
              <p>{t('contact.hours.sunday')}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
