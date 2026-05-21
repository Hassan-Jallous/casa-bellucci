'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTranslation, type Locale } from '@/lib/i18n';
import { basePath } from '@/lib/site';

interface GalleryProps {
  locale: Locale;
}

const galleryImages = [
  { src: `${basePath}/images/gallery/1.jpg`, alt: 'Tuna Tartar' },
  { src: `${basePath}/images/gallery/2.jpg`, alt: 'Pasta Rinderfilet' },
  { src: `${basePath}/images/gallery/3.jpg`, alt: 'Pasta Trüffel' },
  { src: `${basePath}/images/gallery/4.jpg`, alt: 'Pasta Gambas' },
  { src: `${basePath}/images/gallery/5.jpg`, alt: 'Pasta mit Caviar' },
  { src: `${basePath}/images/gallery/6.jpg`, alt: 'Pasta mit Caviar' },
  { src: `${basePath}/images/gallery/7.jpg`, alt: 'Casa Bellucci Küche' },
  { src: `${basePath}/images/gallery/8.jpg`, alt: 'Casa Bellucci Gericht' },
];

export default function Gallery({ locale }: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (g) => {
      if (reducedMotion) return;

      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          if (!pinnedRef.current) return;

          const center = pinnedRef.current.querySelector('[data-gallery="center"]');
          const innerLeft = pinnedRef.current.querySelector('[data-gallery="inner-left"]');
          const innerRight = pinnedRef.current.querySelector('[data-gallery="inner-right"]');
          const outerLeft = pinnedRef.current.querySelector('[data-gallery="outer-left"]');
          const outerRight = pinnedRef.current.querySelector('[data-gallery="outer-right"]');

          g.set([innerLeft, innerRight, outerLeft, outerRight], { opacity: 0 });
          g.set(center, { scale: 1.5 });

          const tl = g.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=120%',
              pin: true,
              scrub: 1,
            },
          });

          tl.to(center, { scale: 1, duration: 1, ease: 'power2.out' })
            .fromTo(
              innerLeft,
              { opacity: 0, x: -80 },
              { opacity: 1, x: 0, duration: 0.8 },
              0.3
            )
            .fromTo(
              innerRight,
              { opacity: 0, x: 80 },
              { opacity: 1, x: 0, duration: 0.8 },
              0.3
            )
            .fromTo(
              outerLeft,
              { opacity: 0, x: -120 },
              { opacity: 1, x: 0, duration: 0.8 },
              0.6
            )
            .fromTo(
              outerRight,
              { opacity: 0, x: 120 },
              { opacity: 1, x: 0, duration: 0.8 },
              0.6
            );
        },

        '(max-width: 767px)': () => {
          if (!mobileRef.current) return;

          const items = mobileRef.current.querySelectorAll('[data-gallery-mobile]');

          items.forEach((item) => {
            g.fromTo(
              item,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 85%',
                  toggleActions: 'play none none reset',
                },
              }
            );
          });
        },
      });
    },
    [reducedMotion]
  );

  return (
    <section ref={sectionRef} className="bg-cream py-20 md:py-0">
      <h2 className="px-6 pb-12 text-center font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl md:pt-20">
        {getTranslation(locale, 'gallery.title')}
      </h2>

      <div
        ref={pinnedRef}
        className="hidden h-[70vh] items-center justify-center gap-3 px-6 md:flex lg:gap-5"
      >
        <div
          data-gallery="outer-left"
          className="image-shine h-[45%] w-[14%] flex-shrink-0 overflow-hidden rounded-sm"
        >
          <Image
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            width={300}
            height={400}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>

        <div
          data-gallery="inner-left"
          className="image-shine h-[55%] w-[18%] flex-shrink-0 overflow-hidden rounded-sm"
        >
          <Image
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            width={400}
            height={500}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>

        <div
          data-gallery="center"
          className="image-shine h-[70%] w-[28%] flex-shrink-0 overflow-hidden rounded-sm"
        >
          <Image
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            width={600}
            height={700}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>

        <div
          data-gallery="inner-right"
          className="image-shine h-[55%] w-[18%] flex-shrink-0 overflow-hidden rounded-sm"
        >
          <Image
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            width={400}
            height={500}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>

        <div
          data-gallery="outer-right"
          className="image-shine h-[45%] w-[14%] flex-shrink-0 overflow-hidden rounded-sm"
        >
          <Image
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            width={300}
            height={400}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        ref={mobileRef}
        className="grid grid-cols-2 gap-3 px-6 md:hidden"
      >
        {galleryImages.map((img, i) => (
          <div
            key={img.src}
            data-gallery-mobile
            className={`image-shine overflow-hidden rounded-sm ${i === 0 ? 'col-span-2' : ''}`}
            style={{ opacity: reducedMotion ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={i === 0 ? 800 : 400}
              height={i === 0 ? 500 : 400}
              unoptimized
              className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
