# IMPLEMENTATION PLAN — Pastler Website (Public Marketing Site)
**6 Steps. One at a time. Security audit before every commit.**

**Prerequisite:** Dashboard build (Steps 0–2 of `IMPLEMENTATION_PLAN_Dashboard.md`) must be complete.
The Next.js project, Tailwind config, and brand tokens must already exist.

---

## Rule

```
Complete step → npm run build → run checklist → fix → commit → next step
```

---

## STEP 0 — Public Layout (Nav + Footer)
⏱ ~1h

### Tasks
- [ ] Create `app/(public)/layout.tsx` — wraps all public pages
- [ ] Create `components/website/Nav.tsx` — Server Component
  - Navy background (`bg-navy`), height 68px
  - Logo: `PASTLER.` — Playfair Display, `text-white`, gold period (`text-gold`)
  - Nav links: Leistungen, Über uns, Kontakt — `text-white/70 hover:text-gold`
  - CTA button: "Jetzt anfragen" — gold bg, navy text, `rounded-sm`
  - All links are anchor links to sections on the homepage (`#leistungen`, `#ueber-uns`, `#kontakt`)
- [ ] Create `components/website/Footer.tsx` — Server Component
  - Dark navy background (`bg-[#0D1828]`), padding 28px 48px
  - Three columns: logo wordmark, nav links (Impressum, Datenschutz, Kontakt), copyright
- [ ] Add `import { Playfair_Display, Inter } from 'next/font/google'` to `app/(public)/layout.tsx`
- [ ] Create empty `app/(public)/page.tsx` (placeholder returning `<main>TODO</main>`)

### Security Audit ✓
- [ ] Public layout has NO Supabase imports — `grep -r "supabase" app/(public)/` returns nothing
- [ ] Public layout sets NO cookies — verify in DevTools → Application → Cookies after visiting `/`
- [ ] Nav CTA "Jetzt anfragen" scrolls to `#kontakt` section (anchor link) — NOT a mailto link
- [ ] `npm run build` passes
- [ ] `npm run type-check` passes

### Commit
```bash
git add . && git commit -m "step(0:website): public layout, nav, footer, google fonts"
```

---

## STEP 1 — Hero Section + Trust Bar
⏱ ~1.5h

### Tasks
- [ ] Create `components/website/HeroSection.tsx` — Server Component
  - Background: `bg-gradient-to-br from-[#0D1828] via-navy to-[#1E2E4F]`
  - Grid-line decorative pattern (right side): `absolute`, CSS background-image grid, `opacity-7`, gold colour
  - `§34c` badge: absolute bottom-right, `bg-gold/12 border border-gold/30 rounded p-4 text-center`
  - Tag: `text-gold text-[10px] tracking-[2.5px] uppercase`
  - `<h1>`: Playfair Display 44px, white
  - Sub-paragraph: Inter 15px, `text-white/65`, max-width 480px
  - Two buttons: Primary CTA (gold) + ghost (outline white) — use `rounded-sm`
- [ ] Create `components/website/TrustBar.tsx` — Server Component
  - Background: `bg-[#F5F3EF]`, bottom border `border-stone-border`
  - 4-column grid, each with a large Playfair Display value + Inter label below
  - Values: WEG · VDIV · §34c · 24h
  - Dividers between columns: `border-r border-stone-border`

### Security Audit ✓
- [ ] Hero contains no user-generated content — no XSS surface
- [ ] No external image URLs loaded (no `<img src="https://...">`) — all visual treatment is CSS
- [ ] No third-party scripts imported or loaded in this section
- [ ] `npm run build` passes

### Commit
```bash
git add . && git commit -m "step(1:website): hero section, cta buttons, trust bar"
```

---

## STEP 2 — Leistungen + Über Uns Sections
⏱ ~2h

### Tasks
- [ ] Create `components/website/LeistungenSection.tsx` — Server Component
  - White background, full section padding (`py-20 px-12`)
  - Section tag + Playfair h2 + muted sub-paragraph
  - 3-column card grid (`grid-cols-3 gap-5`)
  - Each card: `border border-stone-border rounded relative` with `before:` pseudo-element for gold top accent (`before:absolute before:top-0 before:inset-x-0 before:h-0.5 before:bg-gold`)
  - Large Playfair number (01/02/03) in `text-stone-border` (decorative, light)
  - h3 in Playfair, description in Inter, bulleted feature list with gold checkmarks

- [ ] Create `components/website/UeberUnsSection.tsx` — Server Component
  - Background: `bg-[#F5F3EF]`
  - 2-column grid (`grid-cols-2 gap-14 items-center`)
  - Left: navy rectangle `bg-navy rounded h-96` with gold period watermark centered
  - Right: section tag + Playfair h2 + two Inter paragraphs + Cert badges row
  - Cert badges: `bg-white border border-stone-border rounded p-3 flex items-center gap-3`
  - Badge icons: navy square with gold letter (§ and V) — inline SVG or styled div

- [ ] Assemble both sections in `app/(public)/page.tsx`:
```typescript
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <LeistungenSection />
      <UeberUnsSection />
      {/* ContactSection in next step */}
    </main>
  );
}
```

### Security Audit ✓
- [ ] No user input surfaces in either section — static content only
- [ ] Section IDs added for anchor links: `<section id="leistungen">`, `<section id="ueber-uns">` — nav links work correctly
- [ ] No external font or resource loads beyond Google Fonts (already declared in layout)
- [ ] `npm run build` passes

### Commit
```bash
git add . && git commit -m "step(2:website): leistungen cards, ueber uns section, assembled homepage"
```

---

## STEP 3 — Kontakt Section + Contact Form Client Component
⏱ ~2h

### Tasks
- [ ] Create `components/website/KontaktSection.tsx` — Server Component (outer layout)
  - Navy background, section padding
  - 2-column grid: left = contact info blocks, right = `<ContactForm />`
  - Contact info blocks (left): each with a `border-l-2 border-gold/50 pl-4` accent
    - Adresse: Kammertsweg 66, 56070 Koblenz
    - E-Mail: hausverwaltung@pastler.com (plain text, not a link)
    - Region: Koblenz · Andernach · Neuwied · Mayen · Ahrweiler
    - Erreichbarkeit: Mo–Fr 09:00–17:00 Uhr

- [ ] Create `components/website/ContactForm.tsx` — **Client Component** (`'use client'`)
  - Fields: Vorname + Nachname (grid-cols-2), E-Mail, Telefon (optional), Anliegen (SELECT), Nachricht (textarea)
  - DSGVO checkbox with explicit consent text and link to `/datenschutz`
  - Submit button disabled until: all required fields filled + DSGVO checked
  - Three states: idle / loading / success / error
  - On submit: `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`
  - Success state: show confirmation message, hide form
  - Input style (on dark bg): `bg-white/7 border border-white/12 text-white rounded-sm px-3 py-[11px] text-sm`
  - Label style: `text-[10px] tracking-[1px] uppercase text-white/40`
  - Submit: `bg-gold text-navy rounded-sm px-7 py-3 text-sm font-medium`

### Security Audit ✓
- [ ] DSGVO checkbox is `required` in HTML AND its state is checked in the submit handler before `fetch` is called — test: set `dsgvoConsent` to false in browser DevTools → form must not submit
- [ ] `fetch('/api/contact')` — the n8n webhook URL is never visible in the client code or browser network tab (it lives in the server route handler only)
- [ ] Contact info blocks show email as plain text — NOT a clickable `mailto:` link
- [ ] Form clears on success — no sensitive input lingers in the DOM
- [ ] `npm run build` passes

### Commit
```bash
git add . && git commit -m "step(3:website): kontakt section, contact form client component, 3 states"
```

---

## STEP 4 — Contact API Route + Impressum + Datenschutz
⏱ ~1.5h

### Tasks
- [ ] Create `app/(public)/api/contact/route.ts` — POST handler:
```typescript
export async function POST(request: Request) {
  const body = await request.json();

  // 1. DSGVO consent — server-side, not optional
  if (!body.dsgvoConsent) {
    return Response.json({ error: 'Einwilligung erforderlich' }, { status: 400 });
  }

  // 2. Required fields
  const { name, email, anliegen, nachricht } = body;
  if (!name || !email || !anliegen || !nachricht) {
    return Response.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
  }

  // 3. Email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Ungültige E-Mail' }, { status: 400 });
  }

  // 4. Nachricht min length
  if (nachricht.length < 20) {
    return Response.json({ error: 'Nachricht zu kurz' }, { status: 400 });
  }

  // 5. Forward to n8n
  const response = await fetch(process.env.N8N_CONTACT_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.N8N_CONTACT_WEBHOOK_SECRET}`,
    },
    body: JSON.stringify({ name, email, telefon: body.telefon ?? null,
      anliegen, nachricht, timestamp: new Date().toISOString() }),
  });

  if (!response.ok) {
    return Response.json({ error: 'Anfrage konnte nicht gesendet werden' }, { status: 500 });
  }

  return Response.json({ success: true });
}
```

- [ ] Create `app/(public)/impressum/page.tsx` — static, all Pastler legal info (see `CLAUDE_Website.md`)
- [ ] Create `app/(public)/datenschutz/page.tsx` — static, DSGVO legal text (see `CLAUDE_Website.md`)
- [ ] Link both in the Footer component
- [ ] Add env vars to `.env.local`: `N8N_CONTACT_WEBHOOK_URL`, `N8N_CONTACT_WEBHOOK_SECRET`

### Security Audit ✓
- [ ] POST without `dsgvoConsent: true` → 400 (test: `curl -X POST /api/contact -d '{"dsgvoConsent":false}'`)
- [ ] POST with missing required fields → 400 with specific error message
- [ ] `N8N_CONTACT_WEBHOOK_URL` does NOT appear in browser Network tab (it's server-side)
- [ ] API returns a generic 500 message if n8n is down — not the internal error details
- [ ] Datenschutz page names the correct legal basis and describes EXACTLY what data is sent to n8n
- [ ] Impressum contains the correct HRB number (Amtsgericht Koblenz HRB 30707) and §34c GewO reference
- [ ] `npm run build` passes

### Commit
```bash
git add . && git commit -m "step(4:website): contact api route, server-side validation, impressum, datenschutz"
```

---

## STEP 5 — n8n Contact Webhook + Website Deployment
⏱ ~1h

### Tasks

**In n8n (n8n.ritz-ai.solutions):**
- [ ] Create new workflow: "Pastler Website — Kontaktanfrage"
- [ ] Node 1: Webhook trigger, POST, path `/pastler-kontakt`
- [ ] Enable "Basic Auth" or "Header Auth" in the webhook node — validate the `Authorization: Bearer` header matches `N8N_CONTACT_WEBHOOK_SECRET`
- [ ] Node 2: Send email to `hausverwaltung@pastler.com` with formatted contact details (use n8n Email node or Gmail node)
- [ ] Activate the workflow

**Vercel deployment:**
- [ ] Add to Vercel env vars (server-only): `N8N_CONTACT_WEBHOOK_URL`, `N8N_CONTACT_WEBHOOK_SECRET`
- [ ] Push `main` → Vercel deploys automatically
- [ ] Test contact form end-to-end on production: submit → receive email at hausverwaltung@pastler.com

### Security Audit ✓
- [ ] n8n webhook requires the correct Bearer token — test: POST to the webhook URL without the `Authorization` header → must return 401 from n8n
- [ ] Vercel env vars: `N8N_CONTACT_WEBHOOK_URL` and `N8N_CONTACT_WEBHOOK_SECRET` are **NOT** prefixed with `NEXT_PUBLIC_` — they cannot be accessed by the browser
- [ ] `N8N_CONTACT_WEBHOOK_SECRET` is a random string of at least 32 characters — not "secret" or "test123"
- [ ] Contact form test: submit from production URL → email arrives at Pastler → confirm all fields are in the email, no extra data leaked
- [ ] Security headers already set from dashboard deployment — verify on public pages too: `curl -I https://your-domain.vercel.app | grep -i "x-frame\|x-content"`
- [ ] No Google Analytics, Facebook Pixel, or any third-party tracking script loads on any page (`curl https://your-domain.vercel.app | grep -i "gtag\|fbq\|hotjar"` → empty)

### Commit + Tag
```bash
git tag v1.0.0-website
git push origin main --tags
```

---

## Final Check Before Showing Pastler

```bash
# 1. No secrets in public routes
grep -rn "N8N_CONTACT\|SUPABASE_SERVICE" app/\(public\)/

# 2. No Supabase in public routes
grep -rn "supabase" app/\(public\)/

# 3. No tracking scripts
grep -rn "gtag\|analytics\|fbq\|hotjar" app/

# 4. Build clean
npm run build && npm run type-check

# 5. Audit
npm audit --audit-level=high
```

All five pass → ready for Pastler demo.
