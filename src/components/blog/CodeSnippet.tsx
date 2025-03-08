import { ReactNode } from 'react';

interface CodeSnippetProps {
  title?: string;
  language: string;
  code: string;
}

export function CodeSnippet({ title, language, code }: CodeSnippetProps) {
  return (
    <div className="my-4">
      {title && (
        <div className="text-sm text-gray-500 mb-2">{title}</div>
      )}
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}