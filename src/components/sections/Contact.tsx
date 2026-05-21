'use client';

import { useRef } from 'react';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTranslation, type Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const itemsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (g) => {
      if (reducedMotion || !itemsRef.current) return;

      const items = itemsRef.current.querySelectorAll('[data-stagger]');
      g.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    [reducedMotion]
  );

  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850e1c6c26e4d%3A0x0!2s${encodeURIComponent(siteConfig.address.street + ', ' + siteConfig.address.zip + ' ' + siteConfig.address.city)}!5e0!3m2!1sde!2sde!4v1`;

  return (
    <section id="kontakt" className="bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <div ref={itemsRef}>
          <div data-stagger style={{ opacity: reducedMotion ? 1 : 0 }}>
            <h2 className="font-playfair text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              {getTranslation(locale, 'contact.title')}
            </h2>
            <div className="mt-4 h-px w-16 bg-terracotta/40" />
          </div>

          <div
            data-stagger
            className="mt-10 flex items-start gap-4"
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <svg
              className="mt-1 h-5 w-5 shrink-0 text-terracotta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div className="font-cormorant text-lg text-cream/70">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
            </div>
          </div>

          <div
            data-stagger
            className="mt-6 flex items-center gap-4"
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <svg
              className="h-5 w-5 shrink-0 text-terracotta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-cormorant text-lg text-cream/70 transition-colors duration-200 hover:text-terracotta"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div
            data-stagger
            className="mt-6 flex items-center gap-4"
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <svg
              className="h-5 w-5 shrink-0 text-terracotta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-cormorant text-lg text-cream/70 transition-colors duration-200 hover:text-terracotta"
            >
              {siteConfig.email}
            </a>
          </div>

          <div
            data-stagger
            className="mt-8 border-t border-cream/10 pt-8"
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <h3 className="font-playfair text-sm font-semibold uppercase tracking-widest text-terracotta">
              {getTranslation(locale, 'contact.hours.label')}
            </h3>
            <div className="mt-4 flex flex-col gap-1 font-cormorant text-base text-cream/60">
              <p>{getTranslation(locale, 'contact.hours.weekday')}</p>
              <p>{getTranslation(locale, 'contact.hours.sunday')}</p>
            </div>
          </div>

          <div
            data-stagger
            className="mt-8"
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-cormorant text-base text-cream/50 transition-colors duration-200 hover:text-terracotta"
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
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm">
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            className="min-h-[400px] w-full border-0 lg:min-h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Casa Bellucci Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
