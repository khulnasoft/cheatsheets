/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
import cx from 'clsx';
import { $ as $$TopNav, a as $$SearchForm, b as $$BaseLayout } from '../chunks/SearchForm_BGMhlzsm.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const t = {
    title: "404",
    description: "Sorry, we don't have a cheatsheet for this yet. Try searching!",
    goHome: "Back to home"
  };
  const styles = {
    body: "V2017Sheet__body max-w-slim p-6 md:px-8 mx-auto"
  };
  const headingStyles = {
    root: cx("SiteHeading404__root", "my-12 mt-[30svh] text-center"),
    h1: cx("SiteHeading404__h1", `text-5xl font-bold`),
    tagline: cx("SiteHeading404__tagline", "mt-4", "text-2xl")
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopNav", $$TopNav, { "noEdit": true, "noBack": true })} ${maybeRenderHead()}<div${addAttribute(styles.body, "class")}> <div${addAttribute(headingStyles.root, "class")}> <h1${addAttribute(headingStyles.h1, "class")}>${t.title}</h1> <p${addAttribute(headingStyles.tagline, "class")}>${t.description}</p> </div> <div> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "isLive": true })} <div class="mt-8"></div> <p class="text-center"> <a class="push-button" href="/">${t.goHome}</a> </p> </div> </div> ` })} `;
}, "/workspaces/cheatsheets/src/pages/404.astro", void 0);

const $$file = "/workspaces/cheatsheets/src/pages/404.astro";
const $$url = "/404.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
