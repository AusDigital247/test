import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Folder, FileText } from 'lucide-react';

const sitemapData = {
  services: [
    { path: '/services/ai-integration', name: 'AI Solutions' },
    { path: '/services/web-development', name: 'Software Development' },
    { path: '/services/data-engineering', name: 'Data Engineering' },
    { path: '/services/ai-agents', name: 'AI Agents & Chatbots' },
    { path: '/services/analytics', name: 'Data Analytics' },
    { path: '/services/seo-services', name: 'Digital Marketing' }
  ],
  company: [
    { path: '/about', name: 'About Us' },
    { path: '/careers', name: 'Careers' },
    { path: '/blog', name: 'Blog' },
    { path: '/press', name: 'Press' }
  ],
  resources: [
    { path: '/docs', name: 'Documentation' },
    { path: '/api', name: 'API Reference' },
    { path: '/status', name: 'System Status' },
    { path: '/support', name: 'Support' }
  ],
  legal: [
    { path: '/privacy', name: 'Privacy Policy' },
    { path: '/terms', name: 'Terms of Service' },
    { path: '/security', name: 'Security' },
    { path: '/cookies', name: 'Cookie Policy' }
  ],
  locations: [
    { path: '/services/ai-integration/toronto', name: 'Toronto' },
    { path: '/services/ai-integration/vancouver', name: 'Vancouver' },
    { path: '/services/ai-integration/kitchener', name: 'Kitchener' },
    { path: '/services/ai-integration/london', name: 'London' }
  ]
};

export default function Sitemap() {
  return (
    <>
      <Helmet>
        <title>Sitemap | AUS Digital</title>
        <meta name="description" content="Browse all pages and services offered by AUS Digital." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SitemapSection title="Services" items={sitemapData.services} />
            <SitemapSection title="Company" items={sitemapData.company} />
            <SitemapSection title="Resources" items={sitemapData.resources} />
            <SitemapSection title="Legal" items={sitemapData.legal} />
            <SitemapSection title="Locations" items={sitemapData.locations} />
          </div>
        </div>
      </div>
    </>
  );
}

function SitemapSection({ title, items }: { title: string; items: { path: string; name: string; }[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="flex items-center text-lg font-semibold mb-4">
        <Folder className="w-5 h-5 text-[#3DD2F0] mr-2" />
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center text-gray-600 hover:text-[#3DD2F0] transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}