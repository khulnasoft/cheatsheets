import { s as site } from '../chunks/config_CVz3R-9m.mjs';
import { g as getPages } from '../chunks/page_zF_-FmPN.mjs';
import { i as isListed } from '../chunks/accessors_CcMmKe-i.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const lines = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
  ];
  const visiblePages = Object.values(await getPages()).filter(isListed);
  for (const page of visiblePages) {
    const url = `${site.url}/${page.slug}`;
    lines.push(`<url><loc>${url}</loc></url>`);
  }
  lines.push(`</urlset>`);
  const data = lines.join("\n") + "\n";
  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "application/xml" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
