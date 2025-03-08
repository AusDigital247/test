import { generateSitemapXML } from '../src/utils/seo/generateSitemap';
import fs from 'fs';
import path from 'path';

const sitemap = generateSitemapXML();
const outputPath = path.resolve('public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully!');