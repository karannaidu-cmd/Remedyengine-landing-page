import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Check } from "lucide-react";

const STAKEHOLDERS = [
  {
    key: "owners",
    label: "Owners",
    title: "Clinic Owners / Administrators",
    image: "/images/scene-dashboard.png",
    imageAlt: "A clinic owner reviewing a revenue and utilization dashboard",
    points: [
      "More patients captured with a 24/7 AI front desk, fewer no-shows, automatic win-back of lapsed patients.",
      "Lower front-desk cost; one dashboard for revenue, collections, and utilization.",
      "Scale across branches with role-based control and security.",
    ],
    quote: "Grow revenue and cut admin overhead — without hiring more front-desk staff.",
  },
  {
    key: "doctors",
    label: "Doctors",
    title: "Doctors",
    image: "/images/scene-doctor-brief.png",
    imageAlt: "A doctor reviewing an AI pre-consult brief on a tablet",
    points: [
      "AI briefs before every consult, drawn from a structured intake conversation.",
      "E-prescriptions with one-click pharmacy and lab handoff.",
      "Video consults built into the same platform.",
    ],
    quote: "Walk into every appointment fully briefed — and finish your notes in seconds.",
  },
  {
    key: "reception",
    label: "Front desk",
    title: "Receptionists / Front Desk",
    image: "/images/scene-frontdesk.png",
    imageAlt: "A receptionist working calmly at a clinic front desk",
    points: [
      "The AI handles enquiries, booking, confirmations, and reminders automatically.",
      "Staff handle exceptions, not repetition.",
      "Walk-ins and phone bookings still fit into the same dashboard.",
    ],
    quote: "Let automation answer the phone that never stops ringing.",
  },
  {
    key: "pharmacy",
    label: "Pharmacy",
    title: "Pharmacy",
    image: "/images/scene-pharmacy.png",
    imageAlt: "A pharmacist checking organized stock at a dispensing counter",
    points: [
      "Dispensing requests arrive straight from prescriptions.",
      "Live stock, batch, and expiry tracking with alerts.",
      "No stockouts, no expiry losses.",
    ],
    quote: "From prescription to dispense — paperless, with zero stockouts or expiry losses.",
  },
  {
    key: "labs",
    label: "Labs",
    title: "Labs / Diagnostics",
    image: "/images/scene-lab.png",
    imageAlt: "A lab technician working through an organized diagnostics worklist",
    points: [
      "An organized test worklist through every stage of the lifecycle.",
      "Automatic WhatsApp report delivery to patients.",
      "No more chasing samples or manual result handoffs.",
    ],
    quote: "Run an organized lab and deliver every report automatically.",
  },
  {
    key: "patients",
    label: "Patients",
    title: "Patients",
    image: "/images/scene-patient-chat.png",
    imageAlt: "A patient reading a clinic reminder on their phone",
    points: [
      "Book, get reminders, receive prescriptions and lab reports — all on WhatsApp.",
      "No app to install, nothing to remember.",
      "Instant answers, any time of day.",
    ],
    quote: "Your clinic, in the chat you already use.",
  },
];

export function Stakeholders() {
  return (
    <section id="stakeholders" className="bg-paper-50">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-wide text-remedy-600">
            Value by stakeholder
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
            Everyone in the clinic gets something back
          </h2>
        </div>

        <Tabs defaultValue="owners" className="mt-14">
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 bg-transparent p-0">
            {STAKEHOLDERS.map((s) => (
              <TabsTrigger
                key={s.key}
                value={s.key}
                className="rounded-lg border border-line-200 bg-paper-0 px-4 py-2 text-sm font-medium text-ink-700 data-[state=active]:border-remedy-600 data-[state=active]:bg-remedy-600 data-[state=active]:text-white"
              >
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {STAKEHOLDERS.map((s) => (
            <TabsContent key={s.key} value={s.key} className="mt-10">
              <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-xl border border-line-200 bg-paper-0 md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-2xl font-semibold text-ink-900">
                    {s.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-remedy-600"
                        />
                        <span className="text-sm leading-relaxed text-ink-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-l-2 border-remedy-600 pl-4 font-serif text-lg italic text-ink-900">
                    “{s.quote}”
                  </p>
                </div>
                <div className="relative min-h-[240px] border-t border-line-200 md:min-h-0 md:border-l md:border-t-0">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
