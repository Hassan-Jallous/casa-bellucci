'use client';

import { useRef } from 'react';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTranslation, type Locale } from '@/lib/i18n';
import { basePath } from '@/lib/site';

interface VideoHeroProps {
  locale: Locale;
}

export default function VideoHero({ locale }: VideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (g) => {
      if (reducedMotion || !containerRef.current) return;

      const tl = g.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.8, delay: 0.3 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          '-=1.0'
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1.2 },
          '-=0.8'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.4'
        );
    },
    [reducedMotion]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={`${basePath}/images/hero-poster.jpg`}
        className="absolute inset-0 h-full w-full object-cover md:blur-[1.5px] md:scale-[1.03]"
      >
        <source src={`${basePath}/videos/hero.mp4`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 hidden bg-[length:200px_200px] bg-repeat opacity-[0.06] mix-blend-overlay md:block" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 sm:px-12 md:px-20 lg:px-28">
        <h1
          ref={titleRef}
          className="font-playfair text-[12vw] font-bold leading-[0.9] tracking-tight text-cream md:text-[8vw]"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          {getTranslation(locale, 'hero.title')}
        </h1>

        <p
          ref={subtitleRef}
          className="mt-4 font-cormorant text-lg font-light tracking-widest text-cream/80 uppercase sm:text-xl md:text-2xl"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          {getTranslation(locale, 'hero.subtitle')}
        </p>

        <div
          ref={dividerRef}
          className="mt-6 h-[2px] w-24 origin-left bg-terracotta"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        />

        <a
          ref={ctaRef}
          href="#reservieren"
          className="mt-8 inline-block w-fit rounded-sm bg-terracotta px-8 py-3 font-cormorant text-lg font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          {getTranslation(locale, 'hero.cta')}
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <svg
          className="h-6 w-6 animate-bounce text-cream/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
