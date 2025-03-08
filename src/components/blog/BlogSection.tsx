import { ReactNode } from 'react';

interface BlogSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function BlogSection({ title, children, className = '' }: BlogSectionProps) {
  return (
    <section className={`my-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}