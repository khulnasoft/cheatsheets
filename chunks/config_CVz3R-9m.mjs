const isProd = Boolean(true);
const site = {
  url: "https://devshell.vercel.app",
  title: "devshell.vercel.app cheatsheets"
};
const etc = {
  advertisedSheetCount: 357
};
const disqus = {
  enabled: true,
  host: "devhints.disqus.com"
};
const googleAnalytics = {
  enabled: isProd,
  measurementId: "G-N7TC6B227L"
};
const github = {
  repositoryUrl: "https://github.com/rstacruz/cheatsheets",
  branch: "master"
};
const urls = {
  newCheatsheetUrl: "https://github.com/rstacruz/cheatsheets/issues/907"
};
const carbon = {
  enabled: isProd,
  // src: 'https://cdn.carbonads.com/carbon.js?serve=CE7IK5QM&placement=devhintsio'
  src: "https://pubsrv.devshell.vercel.app/carbon.js?serve=CE7IK5QM&placement=devhintsio"
};
const categories = [
  "Analytics",
  "Ansible",
  "Apps",
  "C-like",
  "CLI",
  "CSS",
  "Databases",
  "Devops",
  "Elixir",
  "Git",
  "HTML",
  "Java & JVM",
  "JavaScript",
  "JavaScript libraries",
  "Jekyll",
  "Ledger",
  "Markup",
  "macOS",
  "Node.js",
  "PHP",
  "Python",
  "Rails",
  "React",
  "Ruby",
  "Ruby libraries",
  "Vim",
  "Fitness",
  "Others"
];
const announcement = {
  id: "2023-12-14",
  title: `We're on Twitter ♥️`,
  body: [
    `Follow [@devhints](https://twitter.com/devhints) on X/Twitter for daily "today I learned" snippets.`,
    ``,
    `Also: I've started a new blog with some insights on web development. Have a look! [**ricostacruz.com/posts**](https://ricostacruz.com/posts?utm_source=devhints)`
  ].join("\n")
};

export { announcement as a, carbon as b, categories as c, disqus as d, etc as e, github as f, googleAnalytics as g, site as s, urls as u };
