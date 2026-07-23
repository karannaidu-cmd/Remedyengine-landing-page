import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/reveal";
import { contact, whatsappHref } from "@/lib/contact";

// Reusable closing CTA. Used on the homepage and every interior page so the
// primary conversion action is consistent site-wide.
export function CTABand({
  title = "Your clinic already has moving parts. RemedyEngine makes them work together.",
  body = "Book a live demonstration and see your clinic's workflow running on one connected platform.",
  primaryLabel = "Book Your RemedyEngine Demonstration",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
        <Reveal className="relative overflow-hidden rounded-3xl bg-remedy-gradient px-6 py-16 text-center md:px-14 md:py-20">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-ambient-highlight"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-paper-50 md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper-50/85">
              {body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <Button
                  size="lg"
                  render={<Link href="/book-demo" />}
                  nativeButton={false}
                  className="w-full bg-paper-0 text-remedy-600 transition-shadow hover:bg-paper-0/90 hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] sm:w-auto"
                >
                  {primaryLabel}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto" strength={8}>
                <Button
                  size="lg"
                  variant="outline"
                  render={<a href={whatsappHref} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  className="w-full border-paper-50/40 bg-transparent text-paper-50 hover:bg-paper-0/10 sm:w-auto"
                >
                  <MessageCircle size={18} /> Message us on WhatsApp
                </Button>
              </Magnetic>
            </div>
            <p className="mt-6 font-data text-xs uppercase tracking-wide text-paper-50/70">
              www.remedyengine.com · {contact.email} · {contact.phoneDisplay}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
