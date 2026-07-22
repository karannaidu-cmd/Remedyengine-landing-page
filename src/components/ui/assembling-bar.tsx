"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A track that fills once scrolled into view — visualises the AI brief being
 * "assembled" from the patient's history as the feature chips reveal beside
 * it. Reduced-motion users see the completed bar immediately.
 */
export function AssemblingBar({
  label = "Brief assembled",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      <div className="flex items-center justify-between">
        <span className="font-data text-[11px] uppercase tracking-wide text-ink-700">
          {label}
        </span>
        <span
          className={cn(
            "flex items-center gap-1 font-data text-[11px] uppercase tracking-wide text-remedy-600 opacity-0 transition-opacity duration-300",
            shown && "opacity-100 [transition-delay:1250ms]"
          )}
        >
          <Check size={12} /> Ready
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-remedy-100">
        <div
          className="h-full rounded-full bg-remedy-500 transition-[width] duration-[1200ms] ease-out"
          style={{ width: shown ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
}
