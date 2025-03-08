import { ReactNode } from 'react';
import { Quote } from 'lucide-react';

interface BlogQuoteProps {
  children: ReactNode;
  author?: string;
  role?: string;
}

export function BlogQuote({ children, author, role }: BlogQuoteProps) {
  return (
    <blockquote className="border-l-4 border-[#3DD2F0] pl-4 my-6">
      <div className="flex gap-4">
        <Quote className="w-6 h-6 text-[#3DD2F0] flex-shrink-0" />
        <div>
          <p className="text-lg text-gray-700 italic mb-2">{children}</p>
          {(author || role) && (
            <footer className="text-sm">
              {author && <span className="font-semibold">{author}</span>}
              {role && (
                <span className="text-gray-600">
                  {author && ', '}{role}
                </span>
              )}
            </footer>
          )}
        </div>
      </div>
    </blockquote>
  );
}