import { d as createAstro, c as createComponent, r as renderTemplate, b as addAttribute } from './astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://devshell.vercel.app");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const props = Astro2.props;
  function toArray(input) {
    return (Array.isArray(input) ? input : [input]).filter(Boolean);
  }
  return renderTemplate`${props.title ? renderTemplate`<title>${props.title}</title>` : null}${props.meta ? Object.entries(props.meta).flatMap(
    ([name, contents]) => toArray(contents).map((content) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(content, "content")}>`)
  ) : null}${props.metaProperties ? Object.entries(props.metaProperties).flatMap(
    ([property, contents]) => toArray(contents).map((content) => renderTemplate`<meta${addAttribute(property, "property")}${addAttribute(content, "content")}>`)
  ) : null}${props.links ? Object.entries(props.links).map(([rel, href]) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}>`) : null}`;
}, "/workspaces/cheatsheets/src/components/SEO/SEO.astro", void 0);

export { $$SEO as $ };
