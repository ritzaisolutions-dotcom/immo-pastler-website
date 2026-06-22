# n8n — Pastler Website Kontaktanfrage

Workflow für die Weiterleitung von Kontaktformular-Anfragen an `hausverwaltung@pastler.com`.

## Webhook Secret erzeugen

**Das Secret kommt nicht von n8n — Sie generieren es selbst** und tragen denselben Wert an zwei Stellen ein:

### 1. Secret generieren

PowerShell:

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }) -as [byte[]])
```

Alternativ (Git Bash / WSL):

```bash
openssl rand -hex 32
```

Mindestens 32 Zeichen, zufällig — nicht `secret` oder `test123`.

### 2. In n8n eintragen

1. Workflow `workflows/pastler-kontakt.json` importieren (`n8n.ritz-ai.solutions`).
2. Webhook-Node → **Header Auth** → Bearer-Token = Ihr generiertes Secret.
3. E-Mail-Node (SMTP/Gmail) konfigurieren.
4. Workflow aktivieren.
5. Production-Webhook-URL aus dem Node kopieren (z. B. `https://n8n.ritz-ai.solutions/webhook/pastler-kontakt`).

### 3. In `.env.local` und Vercel eintragen

```
N8N_CONTACT_WEBHOOK_URL=https://n8n.ritz-ai.solutions/webhook/pastler-kontakt
N8N_CONTACT_WEBHOOK_SECRET=<derselbe-string-wie-in-n8n>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Ohne gesetztes Secret antwortet `/api/contact` mit HTTP 500.

## Vercel Environment Variables

| Variable | Sichtbarkeit | Beispiel |
|----------|--------------|----------|
| `N8N_CONTACT_WEBHOOK_URL` | Server only | `https://n8n.ritz-ai.solutions/webhook/pastler-kontakt` |
| `N8N_CONTACT_WEBHOOK_SECRET` | Server only | `<random-32+-char-string>` |
| `NEXT_PUBLIC_SITE_URL` | Public | `https://pastler.com` |

**Wichtig:** Kein `NEXT_PUBLIC_`-Prefix für Webhook-URL und Secret.

## Tests

```bash
# Ohne Auth → 401 von n8n
curl -X POST https://n8n.ritz-ai.solutions/webhook/pastler-kontakt \
  -H "Content-Type: application/json" \
  -d '{"name":"Test"}'

# Mit Auth → E-Mail an Pastler
curl -X POST https://n8n.ritz-ai.solutions/webhook/pastler-kontakt \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SECRET" \
  -d '{"name":"Max Mustermann","email":"test@example.com","anliegen":"WEG-Verwaltung","nachricht":"Dies ist eine Testnachricht mit mindestens 20 Zeichen.","timestamp":"2026-06-22T12:00:00.000Z"}'
```

## E2E auf Production

1. Vercel-Projekt für `02_websites` anlegen und deployen.
2. Env-Vars setzen und Redeploy auslösen.
3. Kontaktformular auf der Live-URL ausfüllen und absenden.
4. E-Mail bei `hausverwaltung@pastler.com` prüfen — alle Felder vorhanden, keine zusätzlichen Daten.
