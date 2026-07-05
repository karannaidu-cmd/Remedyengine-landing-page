import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * One header pattern for every section — eyebrow (mono), serif H2, optional
 * lead — so type scale and alignment stay identical across the page.
 */
export function SectionHeader({
  eyebrow,
  title,
  sub,
  className,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
