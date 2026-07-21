"use client";

import { useState } from "react";
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

// Interactive ecosystem: hovering/focusing an engine illuminates its connected
// engines. Names are always visible (no hover-only info); the highlight is a
// progressive enhancement on capable devices — on touch, a tap simply navigates.
export function EngineEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);

  const relatedSet = new Set<string>();
  if (hovered) {
    relatedSet.add(hovered);
    getEngine(hovered)?.related.forEach((s) => relatedSet.add(s));
  }

  return (
    <section id="engines" className="scroll-mt-24 bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="The engine ecosystem"
          title="Dedicated engines. One connected clinic."
          sub="Sixteen engines across access, clinical intelligence, operations and growth — working as one system, not five tools stitched together. Hover an engine to see what it connects to."
        />

        <div
          className="mt-14 space-y-10"
          onMouseLeave={() => setHovered(null)}
        >
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
                          onMouseEnter={() => setHovered(engine.slug)}
                          onFocus={() => setHovered(engine.slug)}
                          onBlur={() => setHovered(null)}
                          className={cn(
                            "group flex items-center gap-3 rounded-xl border bg-paper-0 p-3 transition-all duration-300",
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
