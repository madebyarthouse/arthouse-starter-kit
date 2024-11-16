import { LoaderFunctionArgs } from "@remix-run/node";
import { cacheHeader } from "pretty-cache-header";

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = new URL(request.url).origin;

  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Length": String(Buffer.byteLength(robotsTxt)),
      "Cache-Control": cacheHeader({
        sMaxage: "24h",
        staleWhileRevalidate: "12h",
      }),
    },
  });
}
