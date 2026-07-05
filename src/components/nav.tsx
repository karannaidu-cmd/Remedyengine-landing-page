"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#stakeholders", label: "Who it's for" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-paper-50/90 backdrop-blur-sm supports-[backdrop-filter]:bg-paper-50/70 data-[scrolled=true]:border-line-200">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="#" className="flex items-center gap-2">
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
          <Button variant="ghost" className="text-ink-900 hover:bg-remedy-100">
            Sign in
          </Button>
          <Button className="bg-remedy-600 text-white hover:bg-remedy-600/90">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line-200 bg-paper-0 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" className="border-ink-900 text-ink-900">
                Sign in
              </Button>
              <Button className="bg-remedy-600 text-white hover:bg-remedy-600/90">
                Book a demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
