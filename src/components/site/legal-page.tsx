import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

// Flat, high-contrast legal layout (no claymorphism — BLUEPRINT §4.9).
// Content is provided per-section; final wording must be reviewed by the
// RemedyEngine legal owner before launch.
export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-paper-0">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <h1 className="font-serif text-4xl font-bold leading-[1.05] text-ink-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 font-data text-xs uppercase tracking-wide text-ink-700">
            Last updated {updated}
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl font-semibold text-ink-900">
                  {section.heading}
                </h2>
                {section.body.map((p, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-ink-700">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
