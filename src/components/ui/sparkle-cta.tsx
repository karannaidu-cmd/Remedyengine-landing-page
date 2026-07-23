import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

// The one CTA that's on screen at every scroll position (the nav bar) gets a
// quiet "notice me" treatment — a soft green glow breathing behind it, a
// lime shimmer sweeping across its face, and a twinkling sparkle glyph —
// kept subtle so it reads as "alive", not as a distraction.
export function SparkleCTA({ className }: { className?: string }) {
  return (
    <Magnetic strength={8}>
      <span className="relative inline-flex">
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-10 rounded-full blur-md motion-safe:animate-[reCtaHalo_2.8s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(closest-side, rgba(114,217,78,0.4), transparent 72%)",
          }}
        />
        <Button
          render={<Link href="/book-demo" />}
          nativeButton={false}
          className={cn(
            "relative overflow-hidden bg-remedy-600 text-white hover:bg-remedy-600/90 motion-safe:animate-[reCtaGlow_2.8s_ease-in-out_infinite]",
            className
          )}
        >
          <Sparkles
            size={15}
            className="text-lime-300 motion-safe:animate-[reSparkleTwinkle_2.2s_ease-in-out_infinite]"
          />
          Book a demo
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 motion-safe:animate-[reShimmerSweep_2.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-lime-300/50 to-transparent"
          />
        </Button>
      </span>
    </Magnetic>
  );
}
