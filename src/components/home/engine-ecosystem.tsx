"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { EngineIcon } from "@/components/engine-icon";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  engines,
  engineFamilies,
  enginesByFamily,
  getEngine,
  type EngineFamily,
} from "@/lib/engines";
import { cn } from "@/lib/utils";

const FAMILY_ORDER: EngineFamily[] = ["access", "clinical", "operations", "growth"];
const FAMILY_LETTER: Record<EngineFamily, string> = {
  access: "A",
  clinical: "B",
  operations: "C",
  growth: "D",
};

const STATS = [
  { value: "16", label: "Dedicated engines" },
  { value: "4", label: "Connected families" },
  { value: "1", label: "Operating system" },
];

// --- DNA helix geometry -----------------------------------------------
// 16 engines threaded along one continuous double-helix strand — every
// engine alternates which side of the helix it sits on as it progresses
// left to right, so the whole ecosystem reads as one connected sequence
// rather than four separate groups. All coordinates are percentages of the
// helix container, so positioning needs no pixel measurement.
const TOTAL = engines.length;
const TURNS = 2.6;
const AMPLITUDE = 25;

function helixPoint(index: number) {
  const t = TOTAL > 1 ? index / (TOTAL - 1) : 0;
  const angle = t * Math.PI * 2 * TURNS;
  const sign = index % 2 === 0 ? 1 : -1;
  return { x: 5 + t * 90, y: 50 + sign * AMPLITUDE * Math.sin(angle) };
}

// Pixel-space (not percentage) strand paths, built from the container's
// measured size — needed so the traveling light dots riding these paths via
// <animateMotion> stay perfectly round instead of being squashed into
// ellipses by a non-uniformly-scaled viewBox.
function strandPath(sign: 1 | -1, width: number, height: number) {
  const steps = 160;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = t * Math.PI * 2 * TURNS;
    const x = ((5 + t * 90) / 100) * width;
    const y = ((50 + sign * AMPLITUDE * Math.sin(angle)) / 100) * height;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

type Line = { key: string; x1: number; y1: number; x2: number; y2: number };

function centerOf(container: DOMRect, el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2 - container.left, y: r.top + r.height / 2 - container.top };
}

// Interactive DNA-style ecosystem (desktop/wide viewports): all 16 engines
// idle along a double-helix sequence. Hovering or focusing one engine
// re-shuffles the graph — the hovered engine and everything it connects to
// glide into a clean, connected cluster while every unrelated engine fades
// out — then bright animated lines draw the connections once the cluster
// settles. A compact family-grouped grid (below) covers narrower viewports,
// where hover isn't the primary input and 16 nodes threaded along a curve
// would be unreadably small.
export function EngineEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLElement>>(new Map());
  const lockTimer = useRef<number | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (lockTimer.current) window.clearTimeout(lockTimer.current);
    };
  }, []);

  const setNodeRef = useCallback(
    (slug: string) => (el: HTMLElement | null) => {
      if (el) nodeRefs.current.set(slug, el);
      else nodeRefs.current.delete(slug);
    },
    []
  );

  // Nodes glide to new positions on every hover change (500ms transition).
  // While two nodes' flight paths cross mid-transition, the cursor can end
  // up briefly over a node it didn't intend to hover, which — without a
  // guard — flips `hovered` again mid-flight and the whole graph visibly
  // shuffles back and forth. Locking hover-changes for the transition's
  // duration lets nodes finish settling before any new one can take over.
  const handleHover = useCallback((slug: string) => {
    if (locked) return;
    setHovered(slug);
    setLocked(true);
    if (lockTimer.current) window.clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => setLocked(false), 520);
  }, [locked]);

  const relatedList = hovered ? getEngine(hovered)?.related ?? [] : [];
  const relatedSet = new Set(relatedList);

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
    const from = centerOf(containerRect, fromEl);
    const next: Line[] = [];
    relatedList.forEach((slug) => {
      const el = nodeRefs.current.get(slug);
      if (!el) return;
      const to = centerOf(containerRect, el);
      next.push({ key: `${hovered}-${slug}`, x1: from.x, y1: from.y, x2: to.x, y2: to.y });
    });
    setLines(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  useEffect(() => {
    const clear = requestAnimationFrame(() => setLines([]));
    if (!hovered) return () => cancelAnimationFrame(clear);
    // Nodes glide into their cluster positions first (500ms transition);
    // lines only appear once that settle finishes, so connections draw
    // between final resting points instead of dragging mid-shuffle.
    const t = window.setTimeout(computeLines, 520);
    return () => {
      cancelAnimationFrame(clear);
      window.clearTimeout(t);
    };
  }, [hovered, computeLines]);

  useEffect(() => {
    if (!hovered) return;
    const onResize = () => computeLines();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hovered, computeLines]);

  function nodeTarget(index: number, slug: string) {
    if (!hovered) return helixPoint(index);
    if (slug === hovered) return { x: 50, y: 30 };
    if (relatedSet.has(slug)) {
      const idx = relatedList.indexOf(slug);
      const n = relatedList.length;
      const spread = Math.min(78, 20 * n);
      const startX = 50 - spread / 2;
      const x = n > 1 ? startX + (idx / (n - 1)) * spread : 50;
      return { x, y: 74 };
    }
    return helixPoint(index);
  }

  const hoveredEngine = hovered ? getEngine(hovered) : null;

  const strandPaths = useMemo(() => {
    if (!size.width || !size.height) return ["", ""];
    return [strandPath(1, size.width, size.height), strandPath(-1, size.width, size.height)];
  }, [size]);

  return (
    <section id="engines" className="scroll-mt-24 bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <SectionHeader
          eyebrow="The engine ecosystem"
          title="Dedicated engines. One connected clinic."
          sub="Sixteen engines across access, clinical intelligence, operations and growth, working as one system, not five tools stitched together. Hover an engine to trace what it connects to."
        />

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold text-remedy-600">
                {stat.value}
              </span>
              <span className="font-data text-[11px] uppercase tracking-wide text-ink-700">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Desktop / wide-viewport DNA helix */}
        <Reveal className="mt-14 hidden lg:block">
          <div
            ref={containerRef}
            onMouseLeave={() => setHovered(null)}
            className="relative h-[560px] w-full"
          >
            {/* Backbone strands, in real pixel coordinates (not a distorting
                percentage viewBox) so the traveling light dots riding them
                stay perfectly round. A handful of small fluorescent-green
                pulses drift along each strand continuously — a quiet "the
                system is always alive" cue, independent of hover. */}
            <svg
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500",
                hovered ? "opacity-0" : "opacity-100"
              )}
            >
              {strandPaths.map((d, i) => (
                <path key={i} d={d} className="fill-none stroke-line-200" strokeWidth={1.5} />
              ))}
              {size.width > 0 &&
                strandPaths.flatMap((d, strandIndex) =>
                  [0, 1, 2].map((lightIndex) => (
                    <circle
                      key={`${strandIndex}-${lightIndex}`}
                      r={4}
                      className="fill-lime-400"
                      style={{ filter: "drop-shadow(0 0 6px rgba(114,217,78,0.9))" }}
                    >
                      <animateMotion
                        dur="6s"
                        begin={`${(strandIndex * 3 + lightIndex) * -1.3}s`}
                        repeatCount="indefinite"
                        path={d}
                      />
                    </circle>
                  ))
                )}
            </svg>

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

            {engines.map((engine, index) => {
              const isHovered = engine.slug === hovered;
              const isRelated = !isHovered && relatedSet.has(engine.slug);
              const isCleared = hovered !== null && !isHovered && !isRelated;
              const target = nodeTarget(index, engine.slug);
              const scale = isHovered ? 1.2 : isRelated ? 1.05 : isCleared ? 0.55 : 1;
              const rise = mounted ? 0 : 14;

              return (
                <Link
                  key={engine.slug}
                  href={`/engines#${engine.slug}`}
                  ref={setNodeRef(engine.slug)}
                  onMouseEnter={() => handleHover(engine.slug)}
                  onFocus={() => handleHover(engine.slug)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "absolute flex flex-col items-center gap-1.5 transition-[left,top,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isCleared && "pointer-events-none"
                  )}
                  style={{
                    left: `${target.x}%`,
                    top: `${target.y}%`,
                    opacity: isCleared ? 0 : mounted ? 1 : 0,
                    transform: `translate(-50%, -50%) translateY(${rise}px) scale(${scale})`,
                    transitionDelay: mounted ? "0ms" : `${index * 35}ms`,
                  }}
                >
                  <EngineIcon
                    icon={engine.icon}
                    size={isHovered ? "lg" : isRelated ? "lg" : "md"}
                    treatment={isHovered ? "active" : isRelated ? "clay" : "primary"}
                  />
                  <span
                    className={cn(
                      "whitespace-nowrap font-data text-[10px] uppercase tracking-wide text-ink-700 transition-opacity duration-300",
                      isHovered || isRelated ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {engine.name.replace(" Engine", "")}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Detail readout — the DNA nodes are deliberately compact, so the
              hovered engine's full name/oneLiner/family surfaces here
              instead of being crammed onto the node itself. */}
          <div className="mx-auto mt-6 flex min-h-[76px] max-w-xl flex-col items-center justify-center rounded-2xl border border-line-200 bg-paper-0 px-6 py-4 text-center">
            {hoveredEngine ? (
              <>
                <span className="font-data text-[11px] uppercase tracking-wide text-remedy-600">
                  {engineFamilies[hoveredEngine.family].label}
                </span>
                <p className="mt-1 text-base font-semibold text-ink-900">
                  {hoveredEngine.name}
                </p>
                <p className="mt-0.5 text-sm text-ink-700">{hoveredEngine.oneLiner}</p>
              </>
            ) : (
              <p className="font-data text-xs uppercase tracking-wide text-ink-700">
                Hover any engine to trace its connections
              </p>
            )}
          </div>
        </Reveal>

        {/* Compact fallback grid — narrower viewports, where hover isn't the
            primary input. */}
        <div className="mt-12 space-y-10 lg:hidden">
          {FAMILY_ORDER.map((familyKey) => {
            const family = engineFamilies[familyKey];
            const items = enginesByFamily(familyKey);
            return (
              <Reveal key={familyKey}>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-data text-xs text-remedy-600">
                      {FAMILY_LETTER[familyKey]}
                    </span>
                    <div>
                      <p className="font-data text-xs uppercase tracking-wide text-ink-900">
                        {family.label}
                      </p>
                      <p className="mt-0.5 text-sm text-ink-700">{family.tagline}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {items.map((engine, i) => (
                      <Reveal key={engine.slug} delay={i * 60}>
                        <Link
                          href={`/engines#${engine.slug}`}
                          className="group relative flex h-full flex-col gap-2 rounded-xl border border-line-200 bg-paper-0 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-remedy-500 hover:shadow-[0_10px_28px_rgba(11,31,51,0.08)]"
                        >
                          <div className="flex items-center justify-between">
                            <EngineIcon icon={engine.icon} treatment="primary" size="sm" />
                            <ArrowRight
                              size={14}
                              className="shrink-0 text-line-200 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-remedy-600"
                            />
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-ink-900">
                              {engine.name.replace(" Engine", "")}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-ink-700">
                              {engine.oneLiner}
                            </span>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button
            variant="outline"
            render={<Link href="/engines" />}
            nativeButton={false}
            className="border-ink-900 text-ink-900"
          >
            Explore the full ecosystem
            <ArrowRight size={16} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
