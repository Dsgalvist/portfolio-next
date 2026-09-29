import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const languages = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [language, ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number(qualityParameter.trim().slice(2))
        : 1;

      return {
        language: language.toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((entry) => entry.language && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  const preferredLanguage = languages[0]?.language ?? "en";
  const lang =
    preferredLanguage === "es" || preferredLanguage.startsWith("es-")
      ? "es"
      : "en";

  const destination = request.nextUrl.clone();
  destination.pathname = `/${lang}`;

  const response = NextResponse.redirect(destination, 307);

  response.headers.set("Vary", "Accept-Language");
  response.headers.set("Cache-Control", "private, no-store");

  return response;
}
