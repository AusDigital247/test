import { ReactNode } from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <pre className="bg-gray-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}