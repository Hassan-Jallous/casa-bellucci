'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsap(
  callback: (gsapInstance: typeof gsap) => void,
  deps: React.DependencyList = []
) {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    contextRef.current = gsap.context(() => {
      callback(gsap);
    });

    return () => {
      contextRef.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return contextRef;
}
