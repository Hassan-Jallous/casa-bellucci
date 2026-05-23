'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTranslation, type Locale } from '@/lib/i18n';
import { basePath } from '@/lib/site';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface TerraceProps {
  locale: Locale;
}

export default function Terrace({ locale }: TerraceProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (g) => {
      if (reducedMotion || !imageRef.current) return;

      g.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    [reducedMotion]
  );

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[21/9] min-h-[60vh] w-full">
        <div ref={imageRef} className="absolute inset-[-20%] h-[140%] w-full">
          <Image
            src={`${basePath}/images/terrace.jpg`}
            alt="Sommerterrasse Casa Bellucci"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/45 to-charcoal/70" />
        <div
          aria-hidden="true"
          className="sicilian-tree-illustration absolute -bottom-20 left-1/2 hidden h-72 w-[46rem] -translate-x-1/2 opacity-[0.24] invert mix-blend-screen md:block"
          style={{
            backgroundImage: `url("${basePath}/images/illustrations/sicilian-tree-line.svg")`,
          }}
        />

        <div className="relative z-10 flex h-full min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-sandstone" />
              <span className="h-1.5 w-1.5 rounded-full bg-sandstone" />
              <span className="h-px w-12 bg-sandstone" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-6 font-playfair text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
              {getTranslation(locale, 'terrace.title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-4 h-px w-20 bg-sandstone" />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl font-cormorant text-lg font-light leading-relaxed tracking-wide text-cream/90 sm:text-xl md:text-2xl">
              {getTranslation(locale, 'terrace.text')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="h-1 w-1 rounded-full bg-sandstone/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-sandstone" />
              <span className="h-1 w-1 rounded-full bg-sandstone/60" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
