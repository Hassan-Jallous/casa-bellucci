'use client';

import { getTranslation, type Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ReservationProps {
  locale: Locale;
}

export default function Reservation({ locale }: ReservationProps) {
  const phoneLabel =
    locale === 'de'
      ? 'Oder rufen Sie uns an'
      : locale === 'it'
        ? 'Oppure chiamateci'
        : 'Or give us a call';

  const reserveLabel =
    locale === 'de'
      ? 'Jetzt reservieren'
      : locale === 'it'
        ? 'Prenota ora'
        : 'Reserve now';

  const hoursLabel = getTranslation(locale, 'contact.hours.label');

  return (
    <section id="reservieren" className="bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28 lg:py-32">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-terracotta/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            <span className="h-px w-12 bg-terracotta/40" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {getTranslation(locale, 'reservation.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl font-cormorant text-lg font-light leading-relaxed tracking-wide text-charcoal/70 sm:text-xl">
            {getTranslation(locale, 'reservation.text')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div id="thefork-widget" className="mx-auto mt-10 max-w-md">
            {siteConfig.reservation.url ? (
              <a
                href={siteConfig.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-sm bg-terracotta px-10 py-4 font-cormorant text-lg font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90 sm:w-auto"
              >
                {reserveLabel}
              </a>
            ) : (
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-block w-full rounded-sm bg-terracotta px-10 py-4 font-cormorant text-lg font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90 sm:w-auto"
              >
                {reserveLabel}
              </a>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 font-cormorant text-base text-charcoal/60">
            <p>
              {phoneLabel}:{' '}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-terracotta transition-colors duration-200 hover:text-terracotta/80"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mx-auto mt-10 max-w-xs border-t border-charcoal/10 pt-8">
            <h3 className="font-playfair text-sm font-semibold uppercase tracking-widest text-charcoal/50">
              {hoursLabel}
            </h3>
            <div className="mt-4 flex flex-col gap-1 font-cormorant text-base text-charcoal/60">
              <p>{getTranslation(locale, 'contact.hours.weekday')}</p>
              <p>{getTranslation(locale, 'contact.hours.sunday')}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
