"use client";

import type { ReactNode } from 'react';

interface SmoothScrollButtonProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export function SmoothScrollButton({ targetId, className, children }: SmoothScrollButtonProps) {
  const onClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
