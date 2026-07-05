"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#workflow", label: "Workflow" },
  { href: "/#stakeholders", label: "Who it's for" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper-50/90 backdrop-blur-sm transition-colors supports-[backdrop-filter]:bg-paper-50/70",
        scrolled ? "border-line-200" : "border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-remedy-600 font-serif text-sm font-bold tracking-tight text-white">
            RE
          </span>
          <span className="font-serif text-lg font-semibold text-ink-900">
            RemedyEngine
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            render={<Link href="/book-demo" />}
            nativeButton={false}
            className="bg-remedy-600 text-white hover:bg-remedy-600/90"
          >
            Book a demo
          </Button>
        </div>

        <Sheet swipeDirection="right">
          <SheetTrigger
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center text-ink-900 md:hidden"
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <SheetHeader className="border-b border-line-200 px-5 py-5 pr-14">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-remedy-600 font-serif text-sm font-bold tracking-tight text-white">
                  RE
                </span>
                <SheetTitle>RemedyEngine</SheetTitle>
              </div>
              <SheetDescription className="sr-only">
                Site navigation
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-5 py-5">
              {LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<a href={link.href} />}
                  nativeButton={false}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 transition-colors hover:bg-remedy-100 hover:text-remedy-600 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {link.label}
                </SheetClose>
              ))}

              <div className="mt-5 border-t border-line-200 pt-5">
                <SheetClose
                  render={<Link href="/book-demo" />}
                  nativeButton={false}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-remedy-600 px-4 text-sm font-medium text-white transition-colors hover:bg-remedy-600/90 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  Book a demo
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
