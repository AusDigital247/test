import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from '../src/entry-server.js';
import { generateSitemapXML } from '../src/utils/seo/generateSitemap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Read the template
const template = fs.readFileSync(toAbsolute('../dist/index.html'), 'utf-8');

// Get list of routes from vite config
const routes = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/services/ai-integration',
  '/services/web-development',
  '/services/data-engineering',
  '/services/ai-agents',
  '/services/analytics',
  '/services/seo-services',
  '/docs',
  '/api',
  '/status',
  '/support',
  '/privacy',
  '/terms',
  '/security',
  '/cookies',
  '/sitemap',
  '/careers',
  '/press'
];

// Generate and write sitemap
console.log('Generating sitemap...');
const sitemap = generateSitemapXML();
fs.writeFileSync(toAbsolute('../dist/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');

// Pre-render each route
(async () => {
  for (const url of routes) {
    const { html: appHtml, helmetContext } = render(url);
    const { helmet } = helmetContext;

    const html = template
      .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
      .replace(
        /<title>.*?<\/title>/,
        helmet.title.toString() + helmet.meta.toString()
      );

    const filePath = `dist${url === '/' ? '/index' : url}/index.html`;
    fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true });
    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();