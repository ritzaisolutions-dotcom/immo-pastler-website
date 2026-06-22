# Deployment — Pastler Website (pastler.com)

Öffentliche Marketing-Website inkl. Kontaktformular. Separates Next.js-Projekt neben dem Dashboard.

**Repo:** `02_websites` · **Stack:** Next.js 16, Tailwind v4, shadcn/Radix  
**Automation:** n8n Webhook für Kontaktformular → E-Mail an `hausverwaltung@pastler.com`

---

## Übersicht

| | |
|---|---|
| **Ziel-Domain** | `https://pastler.com` |
| **Hosting** | Vercel |
| **Kontakt-API** | `/api/contact` → n8n Webhook |
| **Rechtliches** | `/impressum`, `/datenschutz` |
| **Leistungsabgrenzung** | [`03_docs/files/Website_Leistungsabgrenzung.md`](../../03_docs/files/Website_Leistungsabgrenzung.md) |

---

## 1. Vercel-Projekt anlegen

1. [Vercel Dashboard](https://vercel.com) → **Add New Project** → GitHub-Repo `Immo_Pastler_Website` (oder lokales `02_websites`).
2. Framework: **Next.js** (Auto-Detect).
3. Root Directory: `02_websites` (falls Monorepo).

---

## 2. Environment Variables (Production)

| Variable | Scope | Wert |
|----------|-------|------|
| `N8N_CONTACT_WEBHOOK_URL` | Server only | `https://n8n.ritz-ai.solutions/webhook/pastler-kontakt` |
| `N8N_CONTACT_WEBHOOK_SECRET` | Server only | Zufälliger String ≥32 Zeichen (siehe n8n README) |
| `NEXT_PUBLIC_SITE_URL` | All | `https://pastler.com` |

**Wichtig:** Kein `NEXT_PUBLIC_`-Prefix für Webhook-URL und Secret.

Details zum n8n-Workflow: [`n8n/README.md`](./n8n/README.md)

---

## 3. n8n-Workflow (Kontaktformular)

- [ ] `n8n/workflows/pastler-kontakt.json` importieren auf `n8n.ritz-ai.solutions`
- [ ] Webhook-Node: Header Auth mit `N8N_CONTACT_WEBHOOK_SECRET`
- [ ] SMTP-Node: Absender/Empfänger `hausverwaltung@pastler.com`
- [ ] Workflow **aktiviert**
- [ ] Test mit `curl` (siehe n8n README)

---

## 4. Custom Domain (pastler.com)

### 4.1 Vercel

- [ ] Domain `pastler.com` (und optional `www.pastler.com`) im Vercel-Projekt hinzufügen
- [ ] DNS-Einträge beim Domain-Provider setzen (Vercel zeigt CNAME/A/AAAA)
- [ ] SSL aktiv (automatisch)
- [ ] `NEXT_PUBLIC_SITE_URL=https://pastler.com` → Redeploy

### 4.2 DNS-Beispiel

| Typ | Name | Ziel |
|-----|------|------|
| A oder CNAME | `@` | Vercel (laut Vercel-Anleitung) |
| CNAME | `www` | `cname.vercel-dns.com` |

---

## 5. Pre-Release Checks

```bash
cd 02_websites
npm run type-check
npm run build
```

Manuell prüfen:

- [ ] Homepage lädt (Hero, Leistungen, Kontakt)
- [ ] Impressum und Datenschutz erreichbar
- [ ] Kontaktformular: DSGVO-Checkbox Pflicht
- [ ] Formular-Absendung → E-Mail bei Pastler
- [ ] `robots.txt` und `sitemap.xml` erreichbar
- [ ] Keine Secrets im Git (`git grep` auf Webhook-Secret)

---

## 6. Dashboard-Verlinkung (optional)

- [ ] **Kein** öffentlicher Link zum internen Dashboard (nur für Mitarbeiter)
- [ ] Optional: interner Lesezeichen-Link — nicht in Navigation der Website

Siehe auch Dashboard GO_LIVE §4.3.

---

## 7. DSGVO

- Kontaktformular-Datenfluss: Website → n8n → E-Mail-Postfach (keine DB-Speicherung durch RAIS)
- Dokumentiert in: [`01_dashboard/docs/VERARBEITUNGSVERZEICHNIS.md`](../01_dashboard/docs/VERARBEITUNGSVERZEICHNIS.md) VV-5
- Kunden-AVV: [`03_docs/files/AVV_Pastler_FINAL.md`](../../03_docs/files/AVV_Pastler_FINAL.md) §3

---

## 8. Tag Release

```bash
git tag v1.0.0-website
git push origin main --tags
```

---

## Kurzreferenz

| Aufgabe | Wo |
|---------|-----|
| Website deployen | Vercel `02_websites` |
| Kontaktformular | n8n `pastler-kontakt` + Env-Vars |
| Domain | Vercel + DNS-Provider |
| Rechtstexte | `app/impressum`, `app/datenschutz` |
