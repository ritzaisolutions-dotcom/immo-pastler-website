export type ServiceAreaStatus = "inside" | "nearby" | "outside";

const INSIDE_PLZ = new Set([
  // Koblenz
  "56068",
  "56069",
  "56070",
  "56071",
  "56072",
  "56073",
  "56074",
  "56075",
  "56076",
  "56077",
  // Andernach
  "56626",
  // Neuwied
  "56564",
  "56565",
  "56566",
  "56567",
  "56579",
  "56584",
  "56587",
  "56588",
  "56589",
  // Sinzig / Remagen corridor
  "53424",
  "53426",
  "53489",
  // Mayen
  "56727",
  // Ahrweiler / Bad Neuenahr
  "53474",
  "53505",
  "53506",
  "53507",
  "53508",
  // Braubach / Mittelrhein
  "56338",
  "56329",
  "56321",
  "56332",
  "56340",
  "56348",
  "56355",
  "56357",
  // Boppard / St. Goar
  "56154",
  "56346",
  // Cochem area (inner Rhein corridor)
  "56812",
  "56814",
  // Lahnstein / Rhens
  "56112",
  "56321",
  // Winningen / Kobern
  "56332",
  "56329",
]);

const NEARBY_PLZ = new Set([
  // Bonn edge
  "53111",
  "53113",
  "53115",
  "53117",
  "53119",
  "53121",
  "53123",
  "53125",
  "53127",
  "53129",
  "53225",
  "53227",
  "53229",
  // Rheinbach / Meckenheim
  "53340",
  "53359",
  // Montabaur / Westerwald edge
  "56410",
  "56412",
  "56414",
  "56422",
  "56424",
  "56427",
  "56428",
  // Cochem outer
  "56818",
  "56820",
  "56823",
  "56825",
  "56826",
  "56828",
  "56829",
  // Wittlich / Bernkastel buffer
  "54516",
  "54518",
  "54524",
  "54526",
  "54528",
  "54529",
  "54531",
  "54533",
  // Mainz / Bingen buffer (east bank)
  "55116",
  "55118",
  "55120",
  "55122",
  "55124",
  "55128",
  "55129",
  "55130",
  "55131",
  "55411",
  "55413",
  "55422",
  "55424",
  "55430",
  "55432",
  "55435",
  "55437",
  "55442",
  "55444",
  "55450",
  "55452",
  "55457",
  "55459",
  "55469",
  // Limburg buffer
  "65549",
  "65550",
  "65551",
  "65552",
  "65553",
  "65554",
  "65555",
  "65556",
  "65558",
  "65582",
  "65583",
  "65584",
  "65585",
  "65586",
  "65589",
  "65594",
  "65595",
  "65597",
  "65599",
]);

export function extractPlz(input: string): string | null {
  const match = input.match(/\b(\d{5})\b/);
  return match?.[1] ?? null;
}

export function classifyPlz(plz: string): ServiceAreaStatus {
  if (INSIDE_PLZ.has(plz)) {
    return "inside";
  }
  if (NEARBY_PLZ.has(plz)) {
    return "nearby";
  }
  return "outside";
}

export function classifyAddress(input: string): {
  status: ServiceAreaStatus | "invalid";
  plz: string | null;
} {
  const trimmed = input.trim();
  if (!trimmed) {
    return { status: "invalid", plz: null };
  }

  const plz = extractPlz(trimmed);
  if (!plz) {
    return { status: "invalid", plz: null };
  }

  return { status: classifyPlz(plz), plz };
}

export const SERVICE_AREA_MESSAGES: Record<
  ServiceAreaStatus | "invalid",
  { title: string; body: string }
> = {
  inside: {
    title: "Im Einzugsgebiet",
    body: "Ihre Adresse liegt in unserem Kern-Einzugsgebiet am Mittelrhein. Wir freuen uns auf Ihre Anfrage.",
  },
  nearby: {
    title: "Knapp daneben",
    body: "Ihre Adresse liegt nahe an unserem Einzugsgebiet. Kontaktieren Sie uns — wir prüfen gerne individuell, ob wir Sie betreuen können.",
  },
  outside: {
    title: "Außerhalb des Einzugsgebiets",
    body: "Ihre Adresse liegt außerhalb unseres regulären Einzugsgebiets. Sprechen Sie uns dennoch an — in Ausnahmefällen prüfen wir eine Zusammenarbeit.",
  },
  invalid: {
    title: "Bitte PLZ angeben",
    body: "Geben Sie Ihre Adresse mit einer fünfstelligen Postleitzahl ein (z. B. 56070 Koblenz).",
  },
};
