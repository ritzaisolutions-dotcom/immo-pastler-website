"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  classifyAddress,
  SERVICE_AREA_MESSAGES,
  type ServiceAreaStatus,
} from "@/lib/service-area";

export default function ServiceAreaChecker() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState<ServiceAreaStatus | "invalid" | null>(
    null,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { status } = classifyAddress(address);
    setResult(status);
  }

  const message = result ? SERVICE_AREA_MESSAGES[result] : null;

  return (
    <div className="rounded border border-border bg-white p-4 sm:p-5">
      <h3 className="font-medium text-burgundy">Adresse prüfen</h3>
      <p className="mt-1 text-xs text-text-secondary">
        Geben Sie Straße, PLZ und Ort ein — wir zeigen Ihnen, ob Sie in unserem
        Einzugsgebiet liegen.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <label htmlFor="service-area-address" className="sr-only">
          Adresse
        </label>
        <input
          id="service-area-address"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            if (result) {
              setResult(null);
            }
          }}
          placeholder="z. B. Kammertsweg 66, 56070 Koblenz"
          className="w-full rounded-sm border border-border bg-white px-3 py-[11px] text-sm text-text-primary outline-none transition-colors placeholder:text-text-hint focus:border-burgundy/40"
          autoComplete="street-address"
        />
        <button
          type="submit"
          className="w-full rounded-sm bg-burgundy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-burgundy/90 sm:w-auto"
        >
          Einzugsgebiet prüfen
        </button>
      </form>

      {message && result && (
        <div
          className={`mt-4 rounded border p-4 text-sm ${
            result === "inside"
              ? "border-success/30 bg-success/5 text-text-primary"
              : result === "nearby"
                ? "border-gold bg-gold-pale/50 text-text-primary"
                : result === "outside"
                  ? "border-border bg-warm-white text-text-secondary"
                  : "border-border bg-warm-white text-text-secondary"
          }`}
          role="status"
        >
          <p className="font-medium text-burgundy">{message.title}</p>
          <p className="mt-1 leading-relaxed">{message.body}</p>
          {result !== "invalid" && (
            <Link
              href="/#kontakt"
              className="mt-3 inline-block text-sm font-medium text-burgundy underline"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
