# CLAUDE.md — Pastler Website (Public Marketing Site)

This file scopes Claude Code to the **public website only** (`app/(public)/`).
For the internal dashboard, see `CLAUDE_Dashboard.md`.

**Assumes the Next.js project already exists from the dashboard build.**

---

## What This Part Is

Public-facing marketing website for **Immobilienverwaltung Pastler UG**.
Targets prospective Eigentümer clients in the region Koblenz, Andernach, Neuwied.
One goal: get the visitor to submit the contact form.

No authentication. No database reads. No Supabase on any public page.
The only backend call is the contact form POST to an n8n webhook.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15, App Router, TypeScript, Tailwind CSS |
| Fonts | `next/font/google` — Playfair Display + Inter |
| Contact | n8n webhook at `n8n.ritz-ai.solutions` |
| Deployment | Vercel (same project as dashboard) |

**No Supabase on any public page.** No auth. No cookies set by the website itself.

---

## Route Structure (Website Scope Only)

```
app/
└── (public)/
    ├── layout.tsx              ← public nav (navy) + public footer
    ├── page.tsx                ← homepage (all sections, Server Component)
    ├── impressum/
    │   └── page.tsx
    ├── datenschutz/
    │   └── page.tsx
    └── api/
        └── contact/
            └── route.ts        ← POST handler → n8n webhook
```

---

## Homepage Sections (in order)

All rendered as one Server Component `app/(public)/page.tsx`.
Each section is a separate component imported from `components/website/`.

```
1. <HeroSection />          — navy gradient, tagline, two CTAs, §34c badge
2. <TrustBar />             — 4 items: WEG, VDIV, §34c, 24h
3. <LeistungenSection />    — 3 service cards with gold top accent
4. <UeberUnsSection />      — 2-column: image placeholder left, text + cert badges right
5. <KontaktSection />       — contact info left, <ContactForm /> right (Client Component)
6. <Footer />               — logo, links, copyright
```

---

## Environment Variables (Website-Specific)

```
N8N_CONTACT_WEBHOOK_URL=        # Server-side only — n8n webhook endpoint
N8N_CONTACT_WEBHOOK_SECRET=     # Server-side only — Bearer token for n8n auth
NEXT_PUBLIC_SITE_URL=           # Already set from dashboard build
```

Neither contact variable must have a `NEXT_PUBLIC_` prefix.

---

## Contact Form Flow

```
User fills form → ContactForm.tsx (Client Component)
  → fetch POST /api/contact
    → route.ts (Server)
      1. Validate dsgvoConsent === true → 400 if not
      2. Validate required fields: name, email, anliegen, nachricht
      3. Rate limit check (max 3 requests per IP per 10 min)
      4. POST to N8N_CONTACT_WEBHOOK_URL with Bearer token
      5. Return 200 → ContactForm shows success state
```

**Contact form fields:**
```typescript
{
  name: string;           // required
  email: string;          // required, validated format
  telefon?: string;       // optional
  anliegen: string;       // required, SELECT from enum options
  nachricht: string;      // required, min 20 chars
  dsgvoConsent: boolean;  // required true
}
```

---

## Brand Implementation Notes

See `BRAND.md` for the full system. Key rules for website code:

- `font-display` (Playfair Display): headings only — `<h1>`, `<h2>`, logo wordmark
- `font-sans` (Inter): everything else — nav, body, forms, buttons, badges
- Border radius: `rounded-sm` (2px) on buttons, `rounded` (4px) on cards — never `rounded-xl`
- Gold (`#C4A962`): CTA buttons, active nav items, top accent on service cards, the period in the logo
- Navy (`#1A2744`): header, footer, hero background, section with contact form
- Never add gradients beyond the hero — flat sections only

---

## Tailwind Classes for Common Patterns

```typescript
// Primary CTA button (gold)
"bg-gold text-navy px-7 py-3 rounded-sm text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"

// Ghost button (on dark background)
"border border-white/30 text-white px-7 py-3 rounded-sm text-sm hover:bg-white/10 transition-colors"

// Service card
"border border-stone-border rounded p-7 relative before:absolute before:top-0 before:inset-x-0 before:h-0.5 before:bg-gold before:rounded-t"

// Cert badge
"bg-white border border-stone-border rounded p-3 flex items-center gap-3"

// Section tag (small uppercase label)
"text-gold text-[10px] tracking-[2px] uppercase mb-3"

// Nav link
"text-white/70 text-[13px] tracking-[0.3px] hover:text-gold transition-colors"
```

---

## Static Pages Requirements

### Impressum
Must include:
- Immobilienverwaltung Pastler UG (haftungsbeschränkt)
- Kammertsweg 66, 56070 Koblenz
- Jürgen Pastler (Geschäftsführer)
- Amtsgericht Koblenz HRB 30707
- hausverwaltung@pastler.com
- §34c GewO Zulassung

### Datenschutz
Must cover:
- Verantwortlicher: Pastler UG
- Daten die erhoben werden: Kontaktformular (Name, E-Mail, optional Telefon, Anliegen, Nachricht)
- Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
- Speicherdauer: bis Anfrage abgeschlossen
- Empfänger: kein Dritter außer n8n (Auftragsverarbeiter, EU-Server) und E-Mail-Provider Pastler
- Rechte: Auskunft, Berichtigung, Löschung → Kontakt: hausverwaltung@pastler.com

---

## Code Rules

- Server Component by default — only `ContactForm.tsx` is a Client Component
- No Supabase imports in ANY public route file
- No `console.log` anywhere
- All strings in German — Sie-form for all user-facing copy
- `npm run build` must pass after every change

---

## Never Do

- Never import Supabase in a `(public)` route or component
- Never set cookies from the public website (Vercel handles HTTPS; the site itself is stateless)
- Never expose `N8N_CONTACT_WEBHOOK_URL` or `N8N_CONTACT_WEBHOOK_SECRET` to the client
- Never skip DSGVO consent validation on the server
- Never use `<a href="mailto:...">` for the contact CTA — use the contact form section anchor link instead
