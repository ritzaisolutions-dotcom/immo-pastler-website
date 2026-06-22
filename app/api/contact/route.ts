import { rateLimit } from "@/lib/rate-limit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_RATE_LIMIT = { limit: 3, windowMs: 10 * 60 * 1000 };

type ContactBody = {
  name?: string;
  email?: string;
  telefon?: string;
  anliegen?: string;
  nachricht?: string;
  dsgvoConsent?: boolean;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;

  if (!body.dsgvoConsent) {
    return Response.json({ error: "Einwilligung erforderlich" }, { status: 400 });
  }

  const { name, email, anliegen, nachricht } = body;

  if (!name || !email || !anliegen || !nachricht) {
    return Response.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Ungültige E-Mail" }, { status: 400 });
  }

  if (nachricht.length < 20) {
    return Response.json({ error: "Nachricht zu kurz" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const limited = rateLimit(
    `contact:${ip}`,
    CONTACT_RATE_LIMIT.limit,
    CONTACT_RATE_LIMIT.windowMs,
  );

  if (!limited.ok) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_CONTACT_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return Response.json(
      { error: "Anfrage konnte nicht gesendet werden" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${webhookSecret}`,
      },
      body: JSON.stringify({
        name,
        email,
        telefon: body.telefon ?? null,
        anliegen,
        nachricht,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Anfrage konnte nicht gesendet werden" },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Anfrage konnte nicht gesendet werden" },
      { status: 500 },
    );
  }
}
