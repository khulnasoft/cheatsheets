/* empty css                                  */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
import cx from 'clsx';
import { g as getPages } from '../chunks/page_zF_-FmPN.mjs';
import { g as getPagesByCategory, a as getFeaturedPages, b as getRecentPages, c as getSEOPropsForHome, t as typeStyles, $ as $$CarbonBox } from '../chunks/CommonStyles_BoCgYmRm.mjs';
import { $ as $$TopNav, a as $$SearchForm, b as $$BaseLayout } from '../chunks/SearchForm_BGMhlzsm.mjs';
/* empty css                                 */
import { a as announcement, u as urls } from '../chunks/config_CVz3R-9m.mjs';
import snarkdown from 'snarkdown';
import { $ as $$SEO } from '../chunks/SEO_Cz6YDHP3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://devshell.vercel.app");
const $$PageListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageListItem;
  const props = Astro2.props;
  const page = props.page;
  const url = `/${page.slug}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`article item -item-${page.slug} ${props.class ?? ""}`, "class")}> <span class="info"> <code class="slug">${page.slug}</code> <span class="title"> ${page.frontmatter.title ?? page.slug} </span> </span> </a>`;
}, "/workspaces/cheatsheets/src/components/V2017Home/PageListItem.astro", void 0);

const $$Astro = createAstro("https://devshell.vercel.app");
const $$FeaturedPages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedPages;
  const props = Astro2.props;
  return renderTemplate`${props.pages.map((page) => renderTemplate`${renderComponent($$result, "PageListItem", $$PageListItem, { "page": page, "class": "top-sheet" })}`)}`;
}, "/workspaces/cheatsheets/src/components/V2017Home/FeaturedPages.astro", void 0);

const $$Announcements = createComponent(($$result, $$props, $$slots) => {
  const body = snarkdown(announcement.body).split("<br />").map((text) => `<p>${text}</p>`).join("");
  return renderTemplate`${maybeRenderHead()}<div class="announcements-list"> <div class="announcements-item item -hide"${addAttribute(`{"id":"${announcement.id}"}`, "data-js-dismissable")}> <h3 class="title">${announcement.title}</h3> <div class="body">${unescapeHTML(body)}</div> <button data-js-dismiss class="close"></button> </div> </div>  `;
}, "/workspaces/cheatsheets/src/components/V2017Home/Announcements.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await getPages();
  const pageCategories = getPagesByCategory(pages);
  const featuredPages = getFeaturedPages(pages, { maxCount: 8 });
  const recentPages = getRecentPages(pages, { maxCount: 18 });
  const seoProps = getSEOPropsForHome();
  const t = {
    title: "Rico's cheatsheets",
    tagline: `Hey! I'm <a href='https://ricostacruz.com'>@rstacruz</a> and this is a modest collection of cheatsheets I've written.`,
    recentlyUpdated: "Recently updated",
    seeSomethingMissing: "See something missing?",
    requestCheatsheet: "Request cheatsheet"
  };
  const styles = {
    body: "V2017Sheet__body max-w-slim p-6 md:px-8 mx-auto"
  };
  const headingStyles = {
    root: cx("SiteHeading__root", "my-12 text-center"),
    h1: cx("SiteHeading__h1", typeStyles.manrope, "text-5xl text-zinc-950"),
    tagline: cx("SiteHeading__tagline", "text-xl", "mt-4")
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "TopNav", $$TopNav, { "noEdit": true, "noBack": true })} ${maybeRenderHead()}<div${addAttribute(styles.body, "class")}> <div${addAttribute(headingStyles.root, "class")}> <h1${addAttribute(headingStyles.h1, "class")}>${t.title}</h1> <p${addAttribute(headingStyles.tagline, "class")}>${unescapeHTML(t.tagline)}</p> </div> <div role="banner"> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "isLive": true })} <div class="mt-8"></div>  <div class="pubbox">${renderComponent($$result2, "CarbonBox", $$CarbonBox, {})}</div> <div class="mt-8"></div> </div> <div class="pages-list" role="main">  ${renderComponent($$result2, "FeaturedPages", $$FeaturedPages, { "pages": featuredPages })}  <h2 class="category item" data-js-searchable-header> <span>${t.recentlyUpdated}</span> </h2> ${recentPages.map((page) => renderTemplate`${renderComponent($$result2, "PageListItem", $$PageListItem, { "page": page })}`)} ${Object.values(pageCategories).map((category) => {
    if (category.pages.length === 0) return;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="category item" data-js-searchable-header> <span>${category.title}</span> </h2> ${category.pages.map((page) => renderTemplate`${renderComponent($$result3, "PageListItem", $$PageListItem, { "page": page })}`)}` })}`;
  })} <div class="message item missing-message"> <h3>${t.seeSomethingMissing}</h3> <p> <a class="push-button"${addAttribute(urls.newCheatsheetUrl, "href")}>${t.requestCheatsheet}</a> </p> </div> </div> </div> ${renderComponent($$result2, "Announcements", $$Announcements, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SEO", $$SEO, { ...seoProps })} ` })}` })} `;
}, "/workspaces/cheatsheets/src/pages/index.astro", void 0);

const $$file = "/workspaces/cheatsheets/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
