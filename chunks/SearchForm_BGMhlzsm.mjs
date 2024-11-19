import { d as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, a as renderComponent, e as renderSlot, f as renderHead, m as maybeRenderHead, s as spreadAttributes } from './astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { g as googleAnalytics, f as github, e as etc } from './config_CVz3R-9m.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://devshell.vercel.app");
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const props = Astro2.props;
  const measurementId = props.measurementId;
  return renderTemplate(_a || (_a = __template(['<script type="text/partytown"', '><\/script> <script type="text/partytown"', ` id="ga-init">
  const measurementId = document
    .getElementById('ga-init')
    .getAttribute('data-ga-measurement-id')
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments) // eslint-disable-line
  }
  gtag('js', new Date())
  gtag('config', measurementId)
<\/script>`])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`, "src"), addAttribute(measurementId, "data-ga-measurement-id"));
}, "/workspaces/cheatsheets/src/analytics/GoogleAnalytics.astro", void 0);

const $$Astro$3 = createAstro("https://devshell.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const props = Astro2.props;
  const analyticsEnabled = googleAnalytics.enabled;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="shortcut icon" type="image/png" href="/assets/favicon.png">${props.title ? renderTemplate`<title>${props.title}</title>` : null}${analyticsEnabled && googleAnalytics.measurementId ? renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "measurementId": googleAnalytics.measurementId })}` : null}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body${addAttribute(props.bodyClass ?? "", "class")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/workspaces/cheatsheets/src/components/BaseLayout.astro", void 0);

function getEditLink(page) {
  if (!page) return null;
  return `${github.repositoryUrl}/blob/${github.branch}/${page.slug}.md`;
}
function getUrlFromPage(page, siteUrl) {
  if (!siteUrl) throw new Error("No site URL found");
  if (!page) return siteUrl.toString();
  if (page.slug) return `${siteUrl}${page.slug}`;
  throw new Error("Can't get URL from page");
}

const $$Astro$2 = createAstro("https://devshell.vercel.app");
const $$SocialList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialList;
  const props = Astro2.props;
  const page = props.page;
  const url = getUrlFromPage(page, Astro2.site);
  const t = {
    facebookShare: "Share on Facebook",
    twitterShare: "Share on Twitter",
    sheetDescription: "The ultimate cheatsheet for {title}",
    defaultDescription: "Ridiculous collection of web development cheatsheets"
  };
  const title = page?.frontmatter?.title;
  const description = title ? t.sheetDescription.replace("{title}", title) : t.defaultDescription;
  const tweet = `${description} ${url}`;
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`social-list ${props.class ?? ""}`, "class")}> <li class="facebook link hint--bottom"${addAttribute(t.facebookShare, "data-hint")}> <a${addAttribute(facebookURL, "href")} target="share"${addAttribute(t.facebookShare, "aria-label")} role="button"><span class="text"></span></a> </li> ${" "} <li class="twitter link hint--bottom"${addAttribute(t.twitterShare, "data-hint")}> <a${addAttribute(twitterURL, "href")} target="share"${addAttribute(t.twitterShare, "aria-label")} role="button"><span class="text"></span></a> </li> </ul>`;
}, "/workspaces/cheatsheets/src/components/SocialList.astro", void 0);

const $$Astro$1 = createAstro("https://devshell.vercel.app");
const $$TopNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TopNav;
  const props = Astro2.props;
  const t = {
    title: "devshell.vercel.app",
    editOnGitHub: "Edit on GitHub",
    edit: "Edit",
    backToHome: "Back to home"
  };
  const editLink = getEditLink(props.page);
  return renderTemplate`${maybeRenderHead()}<nav class="top-nav" data-js-no-preview role="navigation"> <div class="container"> ${props.noBack !== true ? renderTemplate`<div class="left"> <a class="home back-button" href="/"${addAttribute(t.backToHome, "aria-label")}></a> </div>` : null} <a class="brand" href="/"> ${t.title} </a> ${props.noShare !== true ? renderTemplate`<div class="actions">  ${renderComponent($$result, "SocialList", $$SocialList, { "class": "social page-actions", "page": props.page })} ${props.noEdit !== true ? renderTemplate`<ul class="page-actions"> <li class="link github -button hint--bottom"${addAttribute(t.editOnGitHub, "data-hint")}> <a${addAttribute(editLink, "href")}> <span class="text -visible">${t.edit}</span> </a> </li> </ul>` : null} </div>` : null} </div> </nav> `;
}, "/workspaces/cheatsheets/src/components/TopNav.astro", void 0);

const $$Astro = createAstro("https://devshell.vercel.app");
const $$SearchForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchForm;
  const t = {
    prefix: "devshell.vercel.app",
    defaultPlaceholder: "Search {size}+ cheatsheets",
    homePlaceholder: "Search..."
  };
  const props = Astro2.props;
  let placeholder = props.isLive ? t.homePlaceholder : t.defaultPlaceholder;
  placeholder = placeholder.replace("{size}", etc.advertisedSheetCount.toString());
  return renderTemplate`${maybeRenderHead()}<form class="search" action="/" method="get" data-js-search-form> <label${addAttribute(`search-box ${props.class ?? ""}`, "class")}> <span class="prefix">${t.prefix}</span> <span class="sep">/</span> ${renderTemplate`<input name="q" type="text" class="input"${spreadAttributes(props.isLive ? { autofocus: true } : {})} data-js-search-input${addAttribute(placeholder, "placeholder")} autocomplete="off">`} </label> </form>  `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet/SearchForm.astro", void 0);

export { $$TopNav as $, $$SearchForm as a, $$BaseLayout as b, getEditLink as g };
