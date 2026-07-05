import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-paper-0">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
        <div className="rounded-2xl border border-line-200 bg-remedy-100 px-6 py-16 text-center md:px-14 md:py-20">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            See RemedyEngine run your clinic in a 20-minute demo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-700">
            Watch a WhatsApp message become a booked, briefed, billed, and
            followed-up patient — automatically.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-remedy-600 text-white hover:bg-remedy-600/90 sm:w-auto"
            >
              Book a demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-ink-900 bg-transparent text-ink-900 sm:w-auto"
            >
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
