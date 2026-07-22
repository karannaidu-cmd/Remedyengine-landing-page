"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { EngineIcon } from "@/components/engine-icon";
import { SectionHeader } from "@/components/section-header";
import {
  engineFamilies,
  enginesByFamily,
  getEngine,
  type EngineFamily,
} from "@/lib/engines";
import { cn } from "@/lib/utils";

const FAMILY_ORDER: EngineFamily[] = ["access", "clinical", "operations", "growth"];

type Line = { key: string; x1: number; y1: number; x2: number; y2: number };

// Interactive ecosystem: hovering/focusing an engine illuminates its connected
// engines and draws live connector lines between them — the graph made
// visible, not just implied by dimming. Names are always visible (no
// hover-only info); the network overlay is a progressive enhancement on
// capable devices — on touch, a tap simply navigates.
export function EngineEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLElement>>(new Map());

  const setNodeRef = useCallback(
    (slug: string) => (el: HTMLElement | null) => {
      if (el) nodeRefs.current.set(slug, el);
      else nodeRefs.current.delete(slug);
    },
    []
  );

  const relatedSet = new Set<string>();
  if (hovered) {
    relatedSet.add(hovered);
    getEngine(hovered)?.related.forEach((s) => relatedSet.add(s));
  }

  const computeLines = useCallback(() => {
    const container = containerRef.current;
    if (!hovered || !container) {
      setLines([]);
      return;
    }
    const fromEl = nodeRefs.current.get(hovered);
    if (!fromEl) {
      setLines([]);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const fromRect = fromEl.getBoundingClientRect();
    const fx = fromRect.left + fromRect.width / 2 - containerRect.left;
    const fy = fromRect.top + fromRect.height / 2 - containerRect.top;

    const related = getEngine(hovered)?.related ?? [];
    const next: Line[] = [];
    related.forEach((slug) => {
      const el = nodeRefs.current.get(slug);
      if (!el) return;
      const r = el.getBoundingClientRect();
      next.push({
        key: `${hovered}-${slug}`,
        x1: fx,
        y1: fy,
        x2: r.left + r.width / 2 - containerRect.left,
        y2: r.top + r.height / 2 - containerRect.top,
      });
    });
    setLines(next);
  }, [hovered]);

  useEffect(() => {
    computeLines();
  }, [computeLines]);

  useEffect(() => {
    if (!hovered) return;
    const onResize = () => computeLines();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hovered, computeLines]);

  return (
    <section id="engines" className="scroll-mt-24 bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="The engine ecosystem"
          title="Dedicated engines. One connected clinic."
          sub="Sixteen engines across access, clinical intelligence, operations and growth — working as one system, not five tools stitched together. Hover an engine to see what it connects to."
        />

        <div
          ref={containerRef}
          className="relative mt-14"
          onMouseLeave={() => setHovered(null)}
        >
          {/* Network overlay — connector lines from the hovered engine to each
              related engine, drawn above the grid. Purely additive to the
              existing dim/highlight treatment; absent whenever nothing is
              hovered. Kept out of the tab order and out of the accessibility
              tree (aria-hidden) since the same relationships are always
              readable as plain links in the grid below. A sibling of the
              spaced grid below (not a child of it), so it never perturbs the
              space-y rhythm between family groups. */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            {lines.map((l) => (
              <line
                key={l.key}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                className="stroke-lime-500/80 motion-safe:animate-[reDashFlow_0.6s_linear_infinite]"
                strokeWidth={1.5}
                strokeDasharray="5 4"
                strokeLinecap="round"
              />
            ))}
          </svg>

          <div className="space-y-10">
            {FAMILY_ORDER.map((familyKey) => {
              const family = engineFamilies[familyKey];
              const items = enginesByFamily(familyKey);
              return (
                <Reveal key={familyKey}>
                  <div>
                    <p className="font-data text-xs uppercase tracking-wide text-ink-700">
                      {family.label}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {items.map((engine) => {
                        const dimmed = hovered !== null && !relatedSet.has(engine.slug);
                        const lit = hovered !== null && relatedSet.has(engine.slug);
                        return (
                          <Link
                            key={engine.slug}
                            href={`/engines#${engine.slug}`}
                            ref={setNodeRef(engine.slug)}
                            onMouseEnter={() => setHovered(engine.slug)}
                            onFocus={() => setHovered(engine.slug)}
                            onBlur={() => setHovered(null)}
                            className={cn(
                              "group relative flex items-center gap-3 rounded-xl border bg-paper-0 p-3 transition-all duration-300",
                              lit
                                ? "border-remedy-500 shadow-[0_4px_16px_rgba(11,31,51,0.08)]"
                                : "border-line-200 hover:border-remedy-500",
                              dimmed && "opacity-50"
                            )}
                          >
                            <EngineIcon
                              icon={engine.icon}
                              treatment={engine.slug === hovered ? "active" : "primary"}
                              size="sm"
                            />
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-ink-900">
                                {engine.name.replace(" Engine", "")}
                              </span>
                            </span>
                            <ArrowRight
                              size={14}
                              className={cn(
                                "shrink-0 transition-all group-hover:translate-x-0.5",
                                lit ? "text-remedy-600" : "text-line-200 group-hover:text-remedy-600"
                              )}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/engines"
            className="inline-flex items-center gap-1 font-data text-xs uppercase tracking-wide text-remedy-600 hover:underline"
          >
            Explore the full ecosystem <ArrowRight size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
