function hasTag(page, tagName) {
  return page.frontmatter.tags && page.frontmatter.tags.includes(tagName) || false;
}
function isListed(page) {
  return page.frontmatter.category !== "Hidden";
}

export { hasTag as h, isListed as i };
