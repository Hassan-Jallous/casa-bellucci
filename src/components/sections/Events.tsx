'use client';

import Image from 'next/image';
import { getTranslation, type Locale } from '@/lib/i18n';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface EventsProps {
  locale: Locale;
}

export default function Events({ locale }: EventsProps) {
  return (
    <section id="events" className="bg-charcoal">
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        <div className="order-2 px-6 py-16 sm:px-12 md:py-24 lg:order-1 lg:px-16 lg:py-32">
          <ScrollReveal direction="left">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-terracotta/60" />
              <span className="font-cormorant text-sm uppercase tracking-[0.3em] text-terracotta">
                Live Music
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <h2 className="mt-6 font-playfair text-4xl font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
              {getTranslation(locale, 'events.title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="mt-4 h-px w-16 bg-terracotta/40" />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3}>
            <p className="mt-6 max-w-lg font-cormorant text-lg font-light leading-relaxed tracking-wide text-cream/70 sm:text-xl">
              {getTranslation(locale, 'events.text')}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4}>
            <a
              href="#kontakt"
              className="mt-10 inline-block rounded-sm bg-terracotta px-8 py-3 font-cormorant text-base font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90"
            >
              {locale === 'de'
                ? 'Entdecken'
                : locale === 'it'
                  ? 'Scopri'
                  : 'Discover'}
            </a>
          </ScrollReveal>
        </div>

        <div className="order-1 lg:order-2">
          <ScrollReveal direction="right">
            <div className="image-shine relative aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[600px]">
              <Image
                src="/images/events-dj.jpg"
                alt="DJ Events bei Casa Bellucci"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
