import Fuse from 'fuse.js';
import { g as getPages } from '../chunks/page_zF_-FmPN.mjs';
export { renderers } from '../renderers.mjs';

function buildFuseIndex(pages) {
  const rows = Object.values(pages).map((page) => {
    return { title: page.frontmatter.title ?? "", slug: page.slug };
  });
  const myIndex = Fuse.createIndex(["title", "slug"], rows);
  const indexJSON = myIndex.toJSON();
  const result = { index: indexJSON, rows };
  return result;
}

async function GET() {
  const result = buildFuseIndex(await getPages());
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
