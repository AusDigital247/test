import { ReactNode } from 'react';

interface BlogListProps {
  items: string[];
  ordered?: boolean;
  className?: string;
}

export function BlogList({ items, ordered = false, className = '' }: BlogListProps) {
  const ListComponent = ordered ? 'ol' : 'ul';
  const listStyle = ordered ? 'list-decimal' : 'list-disc';

  return (
    <ListComponent className={`ml-6 ${listStyle} space-y-2 my-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ListComponent>
  );
}