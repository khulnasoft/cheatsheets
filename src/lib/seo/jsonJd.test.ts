import { getJSONLDsForPage } from './jsonLd'

it('works', () => {
  const page = {
    slug: 'react',
    frontmatter: {
      title: 'React',
      description: 'A React cheatsheet',
      category: 'JavaScript'
    }
  }

  const output = getJSONLDsForPage(page)
  expect(output).toMatchInlineSnapshot(`
    [
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "description": "A React cheatsheet · One-page guide to React",
        "headline": "React cheatsheet",
        "image": [
          "https://assets.devshell.vercel.app/previews/react.jpg",
        ],
        "mainEntityOfPage": {
          "@id": "https://google.com/article",
          "@type": "WebPage",
        },
      },
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "item": {
              "@id": "https://devshell.vercel.app/#javascript",
              "name": "JavaScript",
            },
            "position": 1,
          },
          {
            "@type": "ListItem",
            "item": {
              "@id": "https://devshell.vercel.app/react",
              "name": "React cheatsheet",
            },
            "position": 2,
          },
        ],
      },
    ]
  `)
})
