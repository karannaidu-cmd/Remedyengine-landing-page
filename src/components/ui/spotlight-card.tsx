"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Cursor-tracked radial glow, layered under card content. Desktop + fine-pointer
 * only (mousemove never fires meaningfully on touch); the glow is purely
 * decorative so it's skipped for prefers-reduced-motion via the opacity
 * transition being the only "motion" involved — the glow itself doesn't move
 * on its own, it just follows the pointer, so it stays on even under reduced
 * motion (no autoplaying animation, just a positional response to input).
 */
export function SpotlightCard({
  children,
  className,
  glowClassName,
}: {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn("group/spotlight relative isolate overflow-hidden", className)}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 [@media(hover:hover)]:group-hover/spotlight:opacity-100",
          "[background:radial-gradient(260px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgba(7,94,76,0.14),transparent_72%)]",
          glowClassName
        )}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
