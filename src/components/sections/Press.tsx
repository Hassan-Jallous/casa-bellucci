'use client';

import { getTranslation, type Locale } from '@/lib/i18n';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface PressProps {
  locale: Locale;
}

const pressOutlets = [
  'Berliner Zeitung',
  'Berliner Morgenpost',
  'Tagesspiegel',
  'BZ',
  'tip Berlin',
];

export default function Press({ locale }: PressProps) {
  return (
    <section id="presse" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <ScrollReveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-charcoal/20" />
              <span className="font-cormorant text-sm uppercase tracking-[0.3em] text-charcoal/40">
                In der Presse
              </span>
              <span className="h-px w-12 bg-charcoal/20" />
            </div>
            <h2 className="mt-4 font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              {getTranslation(locale, 'press.title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

          <div
            className="flex w-max"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {[...pressOutlets, ...pressOutlets].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center justify-center px-12"
              >
                <span className="whitespace-nowrap font-playfair text-2xl font-medium tracking-wide text-charcoal/30 sm:text-3xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-charcoal/10" />
      </div>
    </section>
  );
}
