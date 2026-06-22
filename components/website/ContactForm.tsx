"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const ANLIEGEN_OPTIONS = [
  "WEG-Verwaltung",
  "Mietverwaltung",
  "Technisches Objektmanagement",
  "Sonstiges",
] as const;

type FormState = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  anliegen: string;
  nachricht: string;
  dsgvoConsent: boolean;
};

const initialState: FormState = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  anliegen: "",
  nachricht: "",
  dsgvoConsent: false,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isValid = useMemo(() => {
    return (
      form.vorname.trim().length > 0 &&
      form.nachname.trim().length > 0 &&
      emailRegex.test(form.email) &&
      form.anliegen.length > 0 &&
      form.nachricht.trim().length >= 20 &&
      form.dsgvoConsent
    );
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.dsgvoConsent || !isValid) {
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    const name = `${form.vorname.trim()} ${form.nachname.trim()}`.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: form.email.trim(),
          telefon: form.telefon.trim() || undefined,
          anliegen: form.anliegen,
          nachricht: form.nachricht.trim(),
          dsgvoConsent: form.dsgvoConsent,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Anfrage konnte nicht gesendet werden");
      }

      setForm(initialState);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Anfrage konnte nicht gesendet werden",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-gold bg-gold-pale p-8 text-center">
        <p className="font-display text-2xl text-burgundy">Vielen Dank.</p>
        <p className="mt-3 text-sm text-text-secondary">
          Ihre Anfrage wurde übermittelt. Wir melden uns innerhalb von 24
          Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-border bg-white px-3 py-[11px] text-sm text-text-primary outline-none transition-colors placeholder:text-text-hint focus:border-burgundy/40";
  const labelClass =
    "mb-1.5 block text-[10px] uppercase tracking-[1px] text-text-hint";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className={labelClass}>
            Vorname *
          </label>
          <input
            id="vorname"
            type="text"
            required
            value={form.vorname}
            onChange={(e) => updateField("vorname", e.target.value)}
            className={inputClass}
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="nachname" className={labelClass}>
            Nachname *
          </label>
          <input
            id="nachname"
            type="text"
            required
            value={form.nachname}
            onChange={(e) => updateField("nachname", e.target.value)}
            className={inputClass}
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-Mail *
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={inputClass}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="telefon" className={labelClass}>
          Telefon
        </label>
        <input
          id="telefon"
          type="tel"
          value={form.telefon}
          onChange={(e) => updateField("telefon", e.target.value)}
          className={inputClass}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="anliegen" className={labelClass}>
          Anliegen *
        </label>
        <select
          id="anliegen"
          required
          value={form.anliegen}
          onChange={(e) => updateField("anliegen", e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {ANLIEGEN_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className={labelClass}>
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          required
          rows={5}
          value={form.nachricht}
          onChange={(e) => updateField("nachricht", e.target.value)}
          className={`${inputClass} resize-y`}
          minLength={20}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-text-secondary">
        <input
          type="checkbox"
          required
          checked={form.dsgvoConsent}
          onChange={(e) => updateField("dsgvoConsent", e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded-sm border-border accent-burgundy"
        />
        <span>
          Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage
          verarbeitet werden. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-burgundy underline">
            Datenschutzerklärung
          </Link>
          . *
        </span>
      </label>

      {status === "error" && errorMessage && (
        <p className="text-sm text-burgundy" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!isValid || status === "loading"}
        className="w-full rounded-sm bg-burgundy px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-burgundy/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Wird gesendet…" : "Kostenlose Beratung anfragen"}
      </button>
    </form>
  );
}
