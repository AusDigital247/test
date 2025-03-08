import { blogPosts } from '../../data/blogPosts';
import { canadianLocations } from './locations';

export function generateSitemapXML() {
  const baseUrl = 'https://sprightly-medovik-42b318.netlify.app';
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    // Main pages
    { url: '/', priority: '1.0' },
    { url: '/about', priority: '0.8' },
    { url: '/contact', priority: '0.8' },
    
    // Company pages
    { url: '/blog', priority: '0.8' },
    { url: '/careers', priority: '0.7' },
    { url: '/press', priority: '0.7' },
    
    // Service pages
    { url: '/services/ai-integration', priority: '0.9' },
    { url: '/services/web-development', priority: '0.9' },
    { url: '/services/data-engineering', priority: '0.9' },
    { url: '/services/ai-agents', priority: '0.9' },
    { url: '/services/analytics', priority: '0.9' },
    { url: '/services/seo-services', priority: '0.9' },
    
    // Resource pages
    { url: '/docs', priority: '0.7' },
    { url: '/api', priority: '0.7' },
    { url: '/status', priority: '0.6' },
    { url: '/support', priority: '0.7' },
    
    // Legal pages
    { url: '/privacy', priority: '0.5' },
    { url: '/terms', priority: '0.5' },
    { url: '/security', priority: '0.5' },
    { url: '/cookies', priority: '0.5' },
    { url: '/sitemap', priority: '0.4' }
  ];

  // Add location-based service pages
  const services = [
    'ai-integration',
    'web-development',
    'data-engineering',
    'ai-agents',
    'analytics',
    'seo-services'
  ];

  canadianLocations.forEach(location => {
    services.forEach(service => {
      pages.push({
        url: `/services/${service}/${location.city.toLowerCase()}`,
        priority: '0.8',
        lastmod: today
      });
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    pages.push({
      url: `/blog/${post.slug}`,
      priority: '0.7',
      lastmod: post.date
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}