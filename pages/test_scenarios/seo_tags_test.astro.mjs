/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
import { $ as $$SEO } from '../../chunks/SEO_Cz6YDHP3.mjs';
export { renderers } from '../../renderers.mjs';

const $$SeoTagsTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "metaProperties": { "article:tags": ["WIP", "Featured"] } })}`;
}, "/workspaces/cheatsheets/src/pages/test_scenarios/seo_tags_test.astro", void 0);

const $$file = "/workspaces/cheatsheets/src/pages/test_scenarios/seo_tags_test.astro";
const $$url = "/test_scenarios/seo_tags_test.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SeoTagsTest,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
