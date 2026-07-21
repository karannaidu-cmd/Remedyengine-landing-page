import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// One glyph, four treatments (see docs ENGINE_CATALOG.md §10 / BLUEPRINT §5.4).
// The glyph itself always comes from lucide-react via the engine data — this
// component only decides the container/treatment, keeping the icon system
// consistent across the site.

type Treatment = "primary" | "clay" | "outline" | "active";

const SIZES = {
  sm: { box: "h-9 w-9 rounded-lg", icon: 18 },
  md: { box: "h-12 w-12 rounded-xl", icon: 22 },
  lg: { box: "h-16 w-16 rounded-2xl", icon: 30 },
} as const;

export function EngineIcon({
  icon: Icon,
  treatment = "primary",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  treatment?: Treatment;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];

  const treatments: Record<Treatment, string> = {
    // Line icon in a soft mint chip — the default, for dense lists/cards.
    primary: "bg-remedy-100 text-remedy-600",
    // Embossed on a clay node — for hero/constellation/feature nodes.
    clay: "clay text-remedy-600",
    // Stroke-only on transparent — for very dense contexts.
    outline: "border border-line-200 bg-transparent text-remedy-600",
    // Active state — clay + lime ring, for the selected/section-active node.
    active: "clay clay-active text-remedy-600",
  };

  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        s.box,
        treatments[treatment],
        className
      )}
    >
      {/* Active variant gets a subtle animated energy pulse (BLUEPRINT §5.4) —
          only one engine is ever "active" at a time, so this stays tasteful. */}
      {treatment === "active" && (
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 rounded-[inherit] border-2 border-lime-500 motion-safe:animate-[rePulseRing_1.8s_ease-out_infinite]"
          )}
        />
      )}
      <Icon size={s.icon} strokeWidth={2} className="relative" />
    </span>
  );
}
