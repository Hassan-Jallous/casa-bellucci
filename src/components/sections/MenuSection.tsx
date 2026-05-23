'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTranslation, type Locale } from '@/lib/i18n';
import { basePath } from '@/lib/site';

interface MenuSectionProps {
  locale: Locale;
}

const menuItems = [
  { key: 'menu.breakfast' as const, image: `${basePath}/images/menu-breakfast.jpg` },
  { key: 'menu.lunch' as const, image: `${basePath}/images/menu-lunch.jpg` },
  { key: 'menu.dinner' as const, image: `${basePath}/images/menu-dinner.jpg` },
  { key: 'menu.wines' as const, image: `${basePath}/images/menu-wines.jpg` },
];

export default function MenuSection({ locale }: MenuSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (g) => {
      if (reducedMotion || !cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll('[data-menu-card]');

      g.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
      className="relative overflow-hidden bg-charcoal px-6 py-20 sm:px-12 md:px-20 md:py-32 lg:px-28"
    >
      <div
        aria-hidden="true"
        className="sicilian-tree-illustration absolute -top-24 left-1/2 h-96 w-[48rem] -translate-x-1/2 opacity-[0.12] invert"
        style={{
          backgroundImage: `url("${basePath}/images/illustrations/sicilian-tree-line.svg")`,
        }}
      />
      <h2 className="relative z-10 mb-14 text-center font-playfair text-4xl font-bold tracking-tight text-porcelain sm:text-5xl">
        {getTranslation(locale, 'menu.title')}
      </h2>

      <div
        ref={cardsRef}
        className="relative z-10 mx-auto grid max-w-6xl gap-6 sm:grid-cols-2"
      >
        {menuItems.map((item) => (
          <div
            key={item.key}
            data-menu-card
            className="group cursor-pointer overflow-hidden rounded-sm border border-sandstone/15 bg-charcoal/80 transition-transform duration-300 hover:-translate-y-1 hover:border-sandstone/35"
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <div className="image-shine">
              <Image
                src={item.image}
                alt={getTranslation(locale, item.key)}
                width={600}
                height={450}
                unoptimized
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-5 py-6">
              <h3 className="font-playfair text-2xl font-semibold text-porcelain">
                {getTranslation(locale, item.key)}
              </h3>

              <button
                type="button"
                className="mt-3 font-cormorant text-base tracking-wider text-sandstone uppercase transition-colors duration-300 hover:text-porcelain"
              >
                {getTranslation(locale, 'menu.download')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
