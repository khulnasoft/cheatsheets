import snarkdown from 'snarkdown';
import { s as site, c as categories, b as carbon } from './config_CVz3R-9m.mjs';
import { i as isListed, h as hasTag } from './accessors_CcMmKe-i.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

function getSEOPropsForHome() {
  const t = {
    title: "Devhints — TL;DR for developer documentation",
    description: "A ridiculous collection of web development cheatsheets"
  };
  const url = site.url;
  const image = "https://assets.devshell.vercel.app/previews/index.jpg";
  return {
    title: t.title,
    links: {
      canonical: url
    },
    meta: {
      description: t.description,
      "app:pageurl": url
    },
    metaProperties: denull({
      "og:description": t.description,
      "og:image:height": "471",
      "og:image": image,
      "og:image:width": "900",
      "og:site_name": site.title,
      "og:title": t.title,
      "og:type": "website",
      "og:url": url,
      // BUG: twitter card props should be metaNames
      "twitter:title": image,
      "twitter:image": image,
      "twitter:description": t.description
    })
  };
}
function getSEOPropsForPage(page) {
  const title = `${page.frontmatter.title} cheatsheet`;
  const description = getDescription(page);
  const image = getPageImage(page);
  const url = getPageURL(page);
  return {
    title,
    links: {
      canonical: url
    },
    meta: {
      description,
      "app:pageurl": url
    },
    metaProperties: denull({
      "og:description": description,
      "og:image:height": "471",
      "og:image": image,
      "og:image:width": "900",
      "og:site_name": site.title,
      "og:title": title,
      "og:type": "article",
      "og:url": url,
      "article:tag": page.frontmatter.tags ?? [],
      "article:section": page.frontmatter.category,
      // BUG: twitter card props should be metaNames
      "twitter:title": title,
      "twitter:image": image,
      "twitter:description": description
    })
  };
}
function getDescription(page) {
  const t = {
    withDescriptionAndIntro: `{description} {intro}`,
    withDescription: `{description} · One-page guide to {title}`,
    withKeywordsAndIntro: `{keywords} · {intro}`,
    withKeywords: `{keywords} · One-page guide to {title}`,
    withIntro: `One-page guide to {title}: usage, examples, and more. {intro}`,
    default: `The one-page guide to {title}: usage, examples, links, snippets, and more.`
  };
  let fmt = t.default;
  if (page.frontmatter.description && page.frontmatter.intro) {
    fmt = t.withDescriptionAndIntro;
  } else if (page.frontmatter.description) {
    fmt = t.withDescription;
  } else if (page.frontmatter.keywords && page.frontmatter.intro) {
    fmt = t.withKeywordsAndIntro;
  } else if (page.frontmatter.keywords) {
    fmt = t.withKeywords;
  } else if (page.frontmatter.intro) {
    fmt = t.withIntro;
  } else {
    fmt = t.default;
  }
  return fmt.replace("{title}", () => page.frontmatter.title ?? "").replace("{keywords}", () => (page.frontmatter.keywords ?? []).join(" · ")).replace("{intro}", () => toPlainText(page.frontmatter.intro ?? "")).replace(
    "{description}",
    () => toPlainText(page.frontmatter.description ?? "")
  );
}
function denull(record) {
  return Object.fromEntries(
    Object.entries(record).filter(
      (entry) => Boolean(entry[1])
    )
  );
}
function getPageImage({ slug }) {
  return `https://assets.devshell.vercel.app/previews/${slug}.jpg`;
}
function getPageURL({ slug }) {
  return new URL(`/${slug}`, site.url).toString();
}
function toPlainText(input) {
  const html = snarkdown(input);
  const plainText = html.replace(/<[^>]*>/g, "").replace(/\n/g, " ");
  return plainText;
}

function getPagesByCategory(pages) {
  const pageCategories = {};
  for (const category of categories) {
    pageCategories[category] = { pages: [], title: category, id: category };
  }
  for (const page of Object.values(pages)) {
    if (!isListed(page)) continue;
    const categoryName = page.frontmatter.category ?? "Others";
    if (!categoryName) continue;
    let cat = pageCategories[categoryName];
    if (!cat) cat = pageCategories["Others"];
    cat.pages.push(page);
  }
  return pageCategories;
}
function getRecentPages(pages, options) {
  const { maxCount = 8 } = options ?? {};
  return Object.values(pages).filter((page) => isListed(page) && page.frontmatter.updated).sort(compare("desc", (page) => page.frontmatter.updated ?? "")).slice(0, maxCount);
}
function getFeaturedPages(pages, options) {
  const { maxCount = 8 } = options ?? {};
  return Object.values(pages).filter((page) => isListed(page) && hasTag(page, "Featured")).sort(compare("asc", (page) => page.slug ?? "")).slice(0, maxCount);
}
function getTopPages(pages, referencePage, options) {
  const { maxCount = 6 } = options ?? {};
  return Object.values(pages).filter((page) => isListed(page) && "weight" in page.frontmatter).filter((page) => page.slug !== referencePage.slug).sort(compare("asc", (page) => page.slug ?? "")).sort(compare("asc", (page) => page.frontmatter.weight ?? 0)).slice(0, maxCount);
}
function getRelatedPages(pages, referencePage, options) {
  const { maxCount = 6 } = options ?? {};
  const category = referencePage.frontmatter.category;
  return Object.values(pages).filter((page) => isListed(page) && page.frontmatter.category === category).filter((page) => page.slug !== referencePage.slug).sort(compare("asc", (page) => page.slug ?? "")).sort(compare("asc", (page) => page.frontmatter.weight ?? 0)).slice(0, maxCount);
}
function compare(direction, accessor) {
  const k = direction === "desc" ? -1 : 1;
  return (a, b) => {
    const va = accessor(a);
    const vb = accessor(b);
    return k * (va === vb ? 0 : va > vb ? 1 : -1);
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CarbonBox = createComponent(($$result, $$props, $$slots) => {
  const useCarbon = carbon.enabled;
  return renderTemplate`${maybeRenderHead()}<div class="HeadlinePub" role="complementary"> ${useCarbon ? renderTemplate(_a || (_a = __template(["<script async", ' id="_carbonads_js"><\/script>'])), addAttribute(carbon.src, "src")) : null} <span class="placeholder -one"></span> <span class="placeholder -two"></span> <span class="placeholder -three"></span> <span class="placeholder -four"></span> </div> `;
}, "/workspaces/cheatsheets/src/components/V2017/CarbonBox.astro", void 0);

const typeStyles = {
  manrope: "font-manrope font-extrabold tracking-[-0.02em]"
};

export { $$CarbonBox as $, getFeaturedPages as a, getRecentPages as b, getSEOPropsForHome as c, getRelatedPages as d, getTopPages as e, getDescription as f, getPagesByCategory as g, getPageURL as h, getPageImage as i, getSEOPropsForPage as j, typeStyles as t };
