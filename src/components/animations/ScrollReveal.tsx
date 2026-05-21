'use client';

import { useRef } from 'react';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
}

const directionClasses: Record<string, string> = {
  up: 'gsap-reveal',
  left: 'gsap-reveal-left',
  right: 'gsap-reveal-right',
  scale: 'gsap-scale',
};

const directionFrom: Record<string, gsap.TweenVars> = {
  up: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.95 },
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsap(
    (gsapInstance) => {
      if (!ref.current || reducedMotion) return;

      gsapInstance.fromTo(
        ref.current,
        directionFrom[direction],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    [direction, delay, duration, reducedMotion]
  );

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`${directionClasses[direction]} ${className}`}>
      {children}
    </div>
  );
}
