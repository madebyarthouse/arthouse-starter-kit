import { LoaderFunctionArgs } from "@remix-run/node";
import { cacheHeader } from "pretty-cache-header";

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = new URL(request.url).origin;

  // You can make this dynamic by fetching your routes/pages from your data source
  const routes = [
    "", // homepage
    // Add more routes as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>${route === "" ? "1.0" : "0.8"}</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(sitemap)),
      "Cache-Control": cacheHeader({
        sMaxage: "24h",
        staleWhileRevalidate: "12h",
      }),
    },
  });
}
