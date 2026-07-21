"use client";

import { useRef } from "react";

// Subtle magnetic-pull wrapper for hero-level CTAs (BLUEPRINT §6 item 6).
// Desktop + fine-pointer only; does nothing on touch. Transform-only (no
// layout properties), so it stays cheap even on slower machines.
export function Magnetic({
  children,
  strength = 14,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
