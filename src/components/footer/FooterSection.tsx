import { Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterColumn from './FooterColumn';

export default function FooterSection() {
  return (
    <footer className="bg-[#0B0F17] border-t border-[#3DD2F0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <Brain className="h-8 w-8 text-[#3DD2F0]" />
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">
                AUS Digital
              </span>
            </Link>
            <p className="text-gray-400">
              Delivering innovative software solutions leveraging advanced AI technologies for more profitable and competitive businesses.
            </p>
          </div>

          <FooterColumn
            title="Company"
            links={[
              { label: 'About', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Blog', href: '/blog' },
              { label: 'Press', href: '/press' }
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              { label: 'Documentation', href: '/docs' },
              { label: 'API Reference', href: '/api' },
              { label: 'Status', href: '/status' },
              { label: 'Support', href: '/support' },
              { label: 'Sitemap', href: '/sitemap' }
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Security', href: '/security' },
              { label: 'Cookies', href: '/cookies' }
            ]}
          />
        </div>

        <div className="border-t border-[#3DD2F0]/10 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AUS Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}