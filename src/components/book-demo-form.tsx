"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookDemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ fullName: "", phone: "", email: "" });

  const update =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (form.fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line-200 bg-paper-0 p-8 text-center shadow-[0_4px_16px_rgba(22,35,31,0.08)] md:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-remedy-100 text-remedy-600">
          <CheckCircle2 size={26} />
        </span>
        <h2 className="mt-5 font-serif text-2xl font-semibold text-ink-900">
          Request received
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-700">
          Thanks, {form.fullName.trim().split(" ")[0]} — our team will reach out
          at{" "}
          <span className="font-medium text-ink-900">{form.email.trim()}</span>{" "}
          to schedule your 20-minute demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line-200 bg-paper-0 p-6 shadow-[0_4px_16px_rgba(22,35,31,0.08)] md:p-8"
    >
      <h2 className="font-serif text-xl font-semibold text-ink-900">
        Tell us where to reach you
      </h2>
      <p className="mt-1 text-sm text-ink-700">
        Three fields — we&apos;ll do the rest.
      </p>

      <div className="mt-6 space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-ink-900">
            Full name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Dr. Anita Rao"
            className="h-11"
            value={form.fullName}
            onChange={update("fullName")}
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-ink-900">
            Phone number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="h-11"
            value={form.phone}
            onChange={update("phone")}
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-ink-900">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="anita@clinic.com"
            className="h-11"
            value={form.email}
            onChange={update("email")}
            required
          />
        </div>
      </div>

      {status === "error" && error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-[color-mix(in_oklch,var(--clinical-red-500),white_88%)] px-3 py-2 text-sm text-clinical-red-500">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {status === "idle" && error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-signal-100 px-3 py-2 text-sm text-signal-500">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="mt-6 h-11 w-full bg-remedy-600 text-white hover:bg-remedy-600/90"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          "Book my demo"
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-ink-700">
        We&apos;ll only use your details to schedule the demo.
      </p>
    </form>
  );
}
