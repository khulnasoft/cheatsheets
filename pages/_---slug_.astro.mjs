/* empty css                                  */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as renderSlot, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_DmUb-mxT.mjs';
import 'kleur/colors';
import cx from 'clsx';
import snarkdown from 'snarkdown';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { spawn } from 'node:child_process';
import crypto from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { plugin } from '@rstacruz/rehype-sectionize';
import { a as $$SearchForm, g as getEditLink, $ as $$TopNav, b as $$BaseLayout } from '../chunks/SearchForm_BGMhlzsm.mjs';
import { s as site, d as disqus, e as etc } from '../chunks/config_CVz3R-9m.mjs';
/* empty css                                  */
import { g as getPages } from '../chunks/page_zF_-FmPN.mjs';
import { d as getRelatedPages, e as getTopPages, f as getDescription, h as getPageURL, i as getPageImage, j as getSEOPropsForPage, t as typeStyles, $ as $$CarbonBox } from '../chunks/CommonStyles_BoCgYmRm.mjs';
import { $ as $$SEO } from '../chunks/SEO_Cz6YDHP3.mjs';
export { renderers } from '../renderers.mjs';

async function renderKramdown(input) {
  return await renderKramdownFromCache(input) ?? renderKramdownJIT(input);
}
async function renderKramdownFromCache(input) {
  const digest = crypto.createHash("sha256").update(input.trim()).digest("hex");
  const cachePath = `.cache/${digest}.html`;
  try {
    const result = await readFile(cachePath, "utf-8");
    return { html: result };
  } catch (err) {
    console.log(`Cache MISS (${cachePath})`);
  }
}
function renderKramdownJIT(input) {
  return new Promise((resolve, reject) => {
    let output = "";
    const child = spawn("bundle", ["exec", "ruby", "./src/ruby/kramdown.rb"]);
    child.stdin.write(input);
    child.stdin.end();
    child.stdout.on("data", (data) => {
      output += data;
    });
    child.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Exited with code ${code}`));
      } else {
        resolve({ html: output });
      }
    });
  });
}

const PRISM_CONFIG = {
  // For a list of languages Prism supports:
  // https://github.com/PrismJS/prism/tree/master/components
  alias: {
    bash: ["sh", "fish"],
    ini: ["dosini"],
    pug: ["jade"],
    // "ignore" actually is for gitignore files, but it's closest to a
    // neutral highlighting that I can find
    ignore: [
      // "nohighlight" was a Jekyll thing to prevent syntax highlighting
      "nohighlight",
      "org"
    ]
  }
};
const REHYPE_SECTIONIZE_CONFIG = [
  {
    level: "h2",
    prelude: {
      enabled: true,
      tagName: "section",
      properties: { className: "h3-section-list" }
    },
    section: {
      addHeadingClass: true,
      tagName: "section",
      properties: { className: "h2-section" }
    },
    body: {
      addHeadingClass: true,
      enabled: true,
      tagName: "div",
      properties: { className: "body h3-section-list" }
    }
  },
  {
    level: "h3",
    prelude: {
      enabled: false
    },
    section: {
      addHeadingClass: true,
      properties: { className: "h3-section" },
      tagName: "section"
    },
    body: {
      addHeadingClass: true,
      enabled: true,
      properties: { className: "body" },
      tagName: "div"
    }
  }
];
async function render(input) {
  let { html } = await renderKramdown(input);
  html = addInitialH2(html);
  html = addH3s(html);
  html = await processRehype(html);
  html = removeBlankHeadings(html);
  return { html };
}
function addInitialH2(html) {
  if (html.trim().startsWith("<h2")) return html;
  return `<h2></h2>
${html}`;
}
function addH3s(html) {
  html = html.replace(
    /(\/h2>[\s\r\n]*)(<(?:ul|p|ol))/g,
    (_, closing, opening) => {
      return `${closing}<h3></h3>${opening}`;
    }
  );
  return html;
}
function removeBlankHeadings(html) {
  return html.replace(/<h3><\/h3>/g, "").replace(/<h2><\/h2>/g, "");
}
async function processRehype(inputHtml) {
  const processResult = await unified().use(rehypeParse).use(rehypePrism, PRISM_CONFIG).use(rehypeStringify).use(plugin, REHYPE_SECTIONIZE_CONFIG).process(inputHtml);
  let html = String(processResult);
  html = html.replace("<html><head></head><body>", "").replace("</body></html>", "");
  return html;
}

const $$Astro$5 = createAstro("https://devshell.vercel.app");
const $$CommentsArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CommentsArea;
  const t = {
    suffix: "for this cheatsheet.",
    link: "Write yours!"
  };
  const props = Astro2.props;
  const url = `${site.url}/${props.identifier}`;
  const { identifier } = props;
  return renderTemplate`${maybeRenderHead()}<section class="comments-area" id="comments" data-js-no-preview> <div class="container"> <details class="comments-details"> <summary> <strong class="count"> <span class="disqus-comment-count"${addAttribute(identifier, "data-disqus-identifier")}${addAttribute(url, "data-disqus-url")}>0 Comments</span> </strong> ${" "} <span class="suffix">${t.suffix}</span> ${" "} <span class="fauxlink">${t.link}</span> </summary> <div class="comments-section"> <div class="comments"> <div id="disqus_thread"></div> </div> </div> </details> </div> <noscript${addAttribute(JSON.stringify({
    host: disqus.host,
    url,
    identifier
  }), "data-js-disqus")}></noscript> </section>  `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet/CommentsArea.astro", void 0);

const $$SearchFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="search-footer" data-js-no-preview> <div class="container"> <div class="search-footer-section"> <div class="search"> ${renderComponent($$result, "SearchForm", $$SearchForm, { "class": "-small" })} </div> <div class="links"> <a class="home-button" href="/"><i></i></a> </div> </div> </div> </footer> `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet/SearchFooter.astro", void 0);

const $$Astro$4 = createAstro("https://devshell.vercel.app");
const $$RelatedPostItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RelatedPostItem;
  const props = Astro2.props;
  const page = props.page;
  const url = `/${page.slug}`;
  const t = {
    suffix: "cheatsheet"
  };
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`related-post-item ${props.class ?? ""}`, "class")}> <a${addAttribute(url, "href")}> <strong>${page.frontmatter.title}</strong> ${" "} <span> ${t.suffix} </span> </a> </li> `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet/RelatedPostItem.astro", void 0);

const $$Astro$3 = createAstro("https://devshell.vercel.app");
const $$PushButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PushButton;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`push-button ${props.class ?? ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/workspaces/cheatsheets/src/components/V2017/PushButton.astro", void 0);

const $$Astro$2 = createAstro("https://devshell.vercel.app");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const props = Astro2.props;
  const page = props.page;
  const t = {
    callout: {
      description: "Over {size} curated cheatsheets, by developers for developers.",
      link: "Devhints home"
    },
    group: {
      top: "Top cheatsheets",
      other: "Other cheatsheets",
      category: "Other {category} cheatsheets"
    }
  };
  const calloutDescription = t.callout.description.replace(
    "{size}",
    etc.advertisedSheetCount.toString()
  );
  const category = page.frontmatter.category;
  const categoryHeading = category ? t.group.category.replace("{category}", category) : t.group.other;
  const pages = await getPages();
  const relatedPages = getRelatedPages(pages, page, { maxCount: 6 });
  const topPages = getTopPages(pages, page, { maxCount: 6 });
  return renderTemplate`${maybeRenderHead()}<footer class="related-posts-area" id="related" data-js-no-preview> <div class="container"> <div class="related-posts-section">  <div class="callout"> <a class="related-posts-callout" href="/"> <div class="text"> <i class="icon"></i> <span class="description">${calloutDescription}</span> ${renderComponent($$result, "PushButton", $$PushButton, { "class": "-dark" }, { "default": ($$result2) => renderTemplate`${t.callout.link}` })} </div> </a> </div>  <div class="group"> <div class="related-posts-group"> <h3>${categoryHeading}</h3> </div> <ul class="related-post-list"> ${relatedPages.map((page2) => renderTemplate`${renderComponent($$result, "RelatedPostItem", $$RelatedPostItem, { "page": page2, "class": "item" })}`)} </ul> </div>  <div class="group"> <div class="related-posts-group"> <h3>${t.group.top}</h3> </div> <ul class="related-post-list"> ${topPages.map((page2) => renderTemplate`${renderComponent($$result, "RelatedPostItem", $$RelatedPostItem, { "page": page2, "class": "item" })}`)} </ul> </div> </div> </div> </footer> `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet/RelatedPosts.astro", void 0);

function getJSONLDsForPage(page) {
  const description = getDescription(page);
  const image = getPageImage(page);
  const url = getPageURL(page);
  const category = page.frontmatter.category ?? "Others";
  const categoryAnchor = category.toLowerCase().replace(/ /g, "-");
  const headline = page.frontmatter.title ? `${page.frontmatter.title} cheatsheet` : "";
  const newsArticle = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://google.com/article"
    },
    headline,
    image: [image],
    description
  };
  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": `${site.url}/#${categoryAnchor}`,
          name: category
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": url,
          name: headline
        }
      }
    ]
  };
  return [newsArticle, breadcrumb];
}

const $$NoticeBox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="notice-box MarkdownBody"> ${renderSlot($$result, $$slots["default"])} </aside> `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet/NoticeBox.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://devshell.vercel.app");
const $$V2017Sheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$V2017Sheet;
  const props = Astro2.props;
  const page = props.page;
  const mkdn = await render(page.markdown);
  const seoProps = getSEOPropsForPage(page);
  const jsonLdSchemas = getJSONLDsForPage(page);
  const tags = page.frontmatter.tags ?? [];
  const deprecatedBy = page.frontmatter.deprecated_by;
  const title = page.frontmatter.title ?? page.slug;
  const editUrl = getEditLink(page);
  const intro = page.frontmatter.intro ? `<p>${snarkdown(page.frontmatter.intro)}</p>` : null;
  const styles = {
    body: cx("V2017Sheet__body max-w-content p-6 md:px-8 mx-auto")
  };
  const headingStyles = {
    root: cx(
      "MainHeading__root",
      "mt-4 md:pt-8 w-full",
      "flex flex-col md:flex-row gap-12",
      "items-center md:items-end"
    ),
    spacer: cx("MainHeading__spacer", "mt-12"),
    h1: cx(
      "MainHeading__h1",
      typeStyles.manrope,
      "text-5xl leading-[1.2] text-zinc-950",
      "text-center md:text-left",
      "flex-1"
    ),
    title: cx("MainHeading__title"),
    pubbox: cx("MainHeading__pubbox")
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "bodyClass": "HighlightPubFirstLine" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "TopNav", $$TopNav, { "page": page })} ${maybeRenderHead()}<div${addAttribute(styles.body, "class")}> <header${addAttribute(headingStyles.root, "class")} role="banner"> <h1${addAttribute(headingStyles.h1, "class")}> <span${addAttribute(headingStyles.title, "class")}>${title}</span> <span${addAttribute(headingStyles.suffix, "class")}> cheatsheet</span> </h1>  <div${addAttribute(headingStyles.pubbox, "class")} data-js-no-preview>${renderComponent($$result2, "CarbonBox", $$CarbonBox, {})}</div> </header> <div${addAttribute(headingStyles.spacer, "class")}></div>  ${tags.includes("WIP") ? renderTemplate`${renderComponent($$result2, "NoticeBox", $$NoticeBox, {}, { "default": ($$result3) => renderTemplate`
This page is a work in progress. You can help by${" "}<a${addAttribute(editUrl, "href")}>suggesting edits</a>!
` })}` : null}  ${deprecatedBy ? renderTemplate`${renderComponent($$result2, "NoticeBox", $$NoticeBox, {}, { "default": ($$result3) => renderTemplate` <strong>Deprecated:</strong> This guide covers an older version.
<a${addAttribute(deprecatedBy, "href")}>A newer version is available here.</a> ` })}` : null} ${intro ? renderTemplate`<div class="intro-content text-xl MarkdownBody"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(intro)}` })} </div>` : null} <div${addAttribute(headingStyles.spacer, "class")}></div> <main class="post-content MarkdownBody" data-js-main-body data-js-anchors role="main"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(mkdn.html)}` })} </main> </div> <div class="pre-footer" data-js-no-preview><i class="icon"></i></div> ${renderComponent($$result2, "CommentsArea", $$CommentsArea, { "identifier": page.slug })} ${renderComponent($$result2, "SearchFooter", $$SearchFooter, {})} ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "page": page })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SEO", $$SEO, { ...seoProps })} ${jsonLdSchemas.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))))}` })}` })}  `;
}, "/workspaces/cheatsheets/src/components/V2017Sheet.astro", void 0);

const $$Astro = createAstro("https://devshell.vercel.app");
async function getStaticPaths() {
  const pages = await getPages();
  return Promise.all(
    Object.values(pages).map((page) => {
      return { props: { page }, params: { slug: page.slug } };
    })
  );
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "V2017Sheet", $$V2017Sheet, { "page": props.page })}`;
}, "/workspaces/cheatsheets/src/pages/[...slug].astro", void 0);

const $$file = "/workspaces/cheatsheets/src/pages/[...slug].astro";
const $$url = "/[...slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
