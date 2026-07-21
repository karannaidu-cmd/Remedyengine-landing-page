import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/reveal";

// Standard interior-page hero: eyebrow + serif H1 + lead + optional CTAs.
// Keeps every non-home page opening on the same rhythm.
export function PageHero({
  eyebrow,
  title,
  sub,
  primary,
  secondary,
  children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-ambient-highlight" />
      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-14 md:px-8 md:pt-24 md:pb-20">
        <Reveal className="max-w-3xl">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-5xl">
            {title}
          </h1>
          {sub && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
              {sub}
            </p>
          )}
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <Magnetic>
                  <Button
                    size="lg"
                    render={<Link href={primary.href} />}
                    nativeButton={false}
                    className="w-full bg-remedy-600 text-white transition-shadow hover:bg-remedy-600/90 hover:shadow-[0_10px_30px_rgba(114,217,78,0.35)] sm:w-auto"
                  >
                    {primary.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Button>
                </Magnetic>
              )}
              {secondary && (
                <Magnetic strength={8}>
                  <Button
                    size="lg"
                    variant="outline"
                    render={<Link href={secondary.href} />}
                    nativeButton={false}
                    className="w-full border-ink-900 text-ink-900 sm:w-auto"
                  >
                    {secondary.label}
                  </Button>
                </Magnetic>
              )}
            </div>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
