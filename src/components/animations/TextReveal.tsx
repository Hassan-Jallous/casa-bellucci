'use client';

import { useRef, useState } from 'react';
import { useGsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  className = '',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  useGsap(
    (gsapInstance) => {
      if (!ref.current || reducedMotion) return;

      gsapInstance.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          onEnter: () => setRevealed(true),
        },
      });
    },
    [reducedMotion]
  );

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: revealed ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
        transition: `clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
