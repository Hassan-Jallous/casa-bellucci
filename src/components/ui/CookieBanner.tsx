'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getTranslation, type Locale } from '@/lib/i18n';

interface CookieBannerProps {
  locale: Locale;
}

const STORAGE_KEY = 'cb-cookie-consent';

export default function CookieBanner({ locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'all');
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, 'essential');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-cream/10 bg-charcoal px-6 py-6 shadow-2xl sm:px-8"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-playfair text-base font-semibold tracking-wide text-cream">
                {getTranslation(locale, 'cookie.title')}
              </h3>
              <p className="mt-2 font-cormorant text-sm leading-relaxed text-cream/60">
                {getTranslation(locale, 'cookie.text')}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleReject}
                className="rounded-sm border border-cream/20 px-5 py-2.5 font-cormorant text-sm font-medium tracking-wider text-cream/70 uppercase transition-colors duration-200 hover:border-cream/40 hover:text-cream"
              >
                {getTranslation(locale, 'cookie.reject')}
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-sm bg-terracotta px-5 py-2.5 font-cormorant text-sm font-medium tracking-wider text-cream uppercase transition-colors duration-200 hover:bg-terracotta/90"
              >
                {getTranslation(locale, 'cookie.accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
