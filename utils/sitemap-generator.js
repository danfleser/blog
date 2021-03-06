const fs = require("fs");
const globby = require("globby");
import { getShortArticles } from "./posts";

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace(".js", "")
    .replace(".mdx", "")
    .replace("public/", "/");
  const route = path === "/index" ? "" : path;
  return `
  <url>
    <loc>${process.env.WEBSITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

function addShortArticle({ title }) {
  return `
  <url>
    <loc>${
      process.env.WEBSITE_URL
    }/articles/nice-to-read?article=${title.replaceAll(" ", "_")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}
export async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/posts/*{.js,.mdx}",
    "!pages/articles/**",
    "!pages/_*.js",
    "!pages/api",
    "public/posts/**/**",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
${getShortArticles().map(addShortArticle).join("\n")}
</urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
