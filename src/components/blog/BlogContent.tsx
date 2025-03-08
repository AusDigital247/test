import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BlogContentProps {
  children: ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h2>Related Services</h2>
        <ul>
          <li>
            <Link to="/services/ai-integration" className="text-[#3DD2F0] hover:underline">
              Enterprise AI Integration Solutions
            </Link>
          </li>
          <li>
            <Link to="/services/data-engineering" className="text-[#3DD2F0] hover:underline">
              Data Engineering & Analytics
            </Link>
          </li>
          <li>
            <Link to="/services/seo-services" className="text-[#3DD2F0] hover:underline">
              Enterprise SEO Services
            </Link>
          </li>
        </ul>
      </div>
      {children}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3>Explore More</h3>
        <p>
          Learn more about our{' '}
          <Link to="/services/ai-integration" className="text-[#3DD2F0] hover:underline">
            AI integration services
          </Link>
          {' '}or read our latest insights on{' '}
          <Link to="/blog" className="text-[#3DD2F0] hover:underline">
            technology and innovation
          </Link>.
        </p>
      </div>
    </div>
  );
}