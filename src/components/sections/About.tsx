'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTranslation, type Locale } from '@/lib/i18n';
import { basePath } from '@/lib/site';

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (g) => {
      if (reducedMotion || !sectionRef.current) return;

      g.fromTo(
        imageRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      g.fromTo(
        textRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    [reducedMotion]
  );

  return (
    <section
      ref={sectionRef}
      className="mediterranean-paper relative overflow-hidden px-6 py-20 sm:px-12 md:px-20 md:py-32 lg:px-28"
    >
      <div
        aria-hidden="true"
        className="sicilian-tree-illustration absolute -right-24 top-8 hidden h-80 w-[34rem] opacity-[0.13] md:block"
        style={{
          backgroundImage: `url("${basePath}/images/illustrations/sicilian-tree-line.svg")`,
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-5 md:items-center md:gap-16">
        <div
          ref={imageRef}
          className="relative md:col-span-3"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <div className="absolute -top-5 -left-5 h-full w-full border border-mediterranean/30" />
          <div className="image-shine relative">
            <Image
              src={`${basePath}/images/about.jpg`}
              alt={getTranslation(locale, 'about.title')}
              width={800}
              height={1067}
              unoptimized
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        <div
          ref={textRef}
          className="md:col-span-2"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-[3px] bg-mediterranean" />
            <h2 className="font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              {getTranslation(locale, 'about.title')}
            </h2>
          </div>

          <p className="mt-6 font-cormorant text-lg leading-relaxed text-charcoal/75 sm:text-xl">
            {getTranslation(locale, 'about.text')}
          </p>
        </div>
      </div>
    </section>
  );
}
