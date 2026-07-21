"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, MessageCircle, LogIn } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { whatsappHref, appLoginUrl } from "@/lib/contact";
import {
  engineFamilies,
  enginesByFamily,
  type EngineFamily,
} from "@/lib/engines";
import { solutions } from "@/lib/solutions";

const FAMILY_ORDER: EngineFamily[] = ["access", "clinical", "operations", "growth"];
const SIMPLE_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
];

type MenuKey = "engines" | "solutions" | null;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper-50/90 backdrop-blur-sm transition-colors supports-[backdrop-filter]:bg-paper-50/70",
        scrolled || open ? "border-line-200" : "border-transparent"
      )}
      onMouseLeave={leave}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center" onFocus={() => setOpen(null)}>
          <BrandLogo priority imageClassName="h-9 sm:h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <DropdownTrigger
            label="Engines"
            controls="mega-engines"
            expanded={open === "engines"}
            active={isActive("/engines")}
            onEnter={() => enter("engines")}
            onClick={() => setOpen(open === "engines" ? null : "engines")}
          />
          <DropdownTrigger
            label="Solutions"
            controls="mega-solutions"
            expanded={open === "solutions"}
            active={isActive("/solutions")}
            onEnter={() => enter("solutions")}
            onClick={() => setOpen(open === "solutions" ? null : "solutions")}
          />
          {SIMPLE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => enter(null)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-sm font-medium underline-offset-4 hover:text-ink-900 hover:underline",
                isActive(link.href)
                  ? "text-remedy-600 underline decoration-remedy-500"
                  : "text-ink-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-remedy-100 hover:text-remedy-600"
          >
            <MessageCircle size={20} />
          </a>
          <Magnetic strength={8}>
            <Button
              variant="outline"
              render={<a href={appLoginUrl} />}
              nativeButton={false}
              className="border-remedy-600 text-remedy-600 transition-colors hover:bg-remedy-100 hover:text-remedy-600"
            >
              <LogIn
                size={16}
                className="transition-transform duration-300 motion-safe:group-hover/button:translate-x-0.5"
              />
              Log in
            </Button>
          </Magnetic>
          <Button
            render={<Link href="/book-demo" />}
            nativeButton={false}
            className="bg-remedy-600 text-white hover:bg-remedy-600/90"
          >
            Book a demo
          </Button>
        </div>

        {/* Mobile trigger */}
        <MobileMenu />
      </div>

      {/* Desktop mega panels */}
      {open === "engines" && (
        <MegaPanel id="mega-engines" onEnter={() => enter("engines")} onLeave={leave}>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
            {FAMILY_ORDER.map((familyKey) => (
              <div key={familyKey}>
                <p className="font-data text-[11px] uppercase tracking-wide text-ink-700">
                  {engineFamilies[familyKey].label}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {enginesByFamily(familyKey).map((engine) => (
                    <li key={engine.slug}>
                      <Link
                        href={`/engines#${engine.slug}`}
                        onClick={() => setOpen(null)}
                        className="block rounded-md px-2 py-1 text-sm text-ink-900 hover:bg-remedy-100 hover:text-remedy-600"
                      >
                        {engine.name.replace(" Engine", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-line-200 pt-4">
            <Link
              href="/engines"
              onClick={() => setOpen(null)}
              className="font-data text-xs uppercase tracking-wide text-remedy-600 hover:underline"
            >
              View the full engine ecosystem →
            </Link>
          </div>
        </MegaPanel>
      )}

      {open === "solutions" && (
        <MegaPanel id="mega-solutions" onEnter={() => enter("solutions")} onLeave={leave}>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions#${solution.slug}`}
                onClick={() => setOpen(null)}
                className="rounded-lg border border-line-200 bg-paper-0 p-3 hover:border-remedy-500"
              >
                <p className="text-sm font-semibold text-ink-900">{solution.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-ink-700">
                  {solution.valueLine}
                </p>
              </Link>
            ))}
          </div>
        </MegaPanel>
      )}

      {/* Reading-progress trace along the header's bottom edge — transform
          only, no layout cost. Purely informational, so it isn't gated
          behind reduced-motion (it reflects real scroll, not a decorative
          loop), but the smoothing transition itself is skipped for
          reduced-motion users. */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-remedy-gradient transition-transform duration-150 ease-out motion-reduce:transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}

function DropdownTrigger({
  label,
  controls,
  expanded,
  active,
  onEnter,
  onClick,
}: {
  label: string;
  controls: string;
  expanded: boolean;
  active?: boolean;
  onEnter: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-haspopup="true"
      aria-controls={controls}
      onMouseEnter={onEnter}
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 text-sm font-medium underline-offset-4 hover:text-ink-900",
        expanded || active ? "text-remedy-600" : "text-ink-700"
      )}
    >
      {label}
      <ChevronDown
        size={15}
        className={cn("transition-transform", expanded && "rotate-180")}
      />
    </button>
  );
}

function MegaPanel({
  id,
  children,
  onEnter,
  onLeave,
}: {
  id: string;
  children: React.ReactNode;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      id={id}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute inset-x-0 top-full hidden border-b border-line-200 bg-paper-0 shadow-[0_16px_40px_rgba(11,31,51,0.12)] md:block"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-8">{children}</div>
    </div>
  );
}

function MobileMenu() {
  return (
    <Sheet swipeDirection="right">
      <SheetTrigger
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center text-ink-900 md:hidden"
      >
        <Menu size={22} />
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto p-0">
        <SheetHeader className="border-b border-line-200 px-5 py-5 pr-14">
          <div className="flex items-center">
            <BrandLogo imageClassName="h-9" sizes="186px" />
            <SheetTitle className="sr-only">RemedyEngine</SheetTitle>
          </div>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        <div className="px-5 py-4">
          <Accordion>
            <AccordionItem value="engines">
              <AccordionTrigger>Engines</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {FAMILY_ORDER.map((familyKey) => (
                    <div key={familyKey}>
                      <p className="font-data text-[10px] uppercase tracking-wide text-ink-700">
                        {engineFamilies[familyKey].label}
                      </p>
                      <ul className="mt-1.5">
                        {enginesByFamily(familyKey).map((engine) => (
                          <li key={engine.slug}>
                            <SheetClose
                              render={<Link href={`/engines#${engine.slug}`} />}
                              nativeButton={false}
                              className="block rounded-md px-2 py-1.5 text-sm text-ink-900 no-underline hover:bg-remedy-100"
                            >
                              {engine.name.replace(" Engine", "")}
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <SheetClose
                    render={<Link href="/engines" />}
                    nativeButton={false}
                    className="block px-2 pt-1 font-data text-xs uppercase tracking-wide text-remedy-600"
                  >
                    All engines →
                  </SheetClose>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="solutions">
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {solutions.map((solution) => (
                    <li key={solution.slug}>
                      <SheetClose
                        render={<Link href={`/solutions#${solution.slug}`} />}
                        nativeButton={false}
                        className="block rounded-md px-2 py-1.5 text-sm text-ink-900 no-underline hover:bg-remedy-100"
                      >
                        {solution.name}
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <nav className="mt-2 flex flex-col gap-1" aria-label="Mobile">
            {SIMPLE_LINKS.map((link) => (
              <SheetClose
                key={link.href}
                render={<Link href={link.href} />}
                nativeButton={false}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-remedy-100 hover:text-remedy-600"
              >
                {link.label}
              </SheetClose>
            ))}
          </nav>

          <div className="mt-5 space-y-2 border-t border-line-200 pt-5">
            <SheetClose
              render={<Link href="/book-demo" />}
              nativeButton={false}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-remedy-600 px-4 text-sm font-medium text-white hover:bg-remedy-600/90"
            >
              Book a demo
            </SheetClose>
            <a
              href={appLoginUrl}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-remedy-600 px-4 text-sm font-medium text-remedy-600 hover:bg-remedy-100"
            >
              <LogIn size={18} /> Log in
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-line-200 px-4 text-sm font-medium text-ink-900 hover:bg-remedy-100"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
