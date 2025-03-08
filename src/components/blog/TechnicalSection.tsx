import { ReactNode } from 'react';

interface TechnicalSectionProps {
  title: string;
  children: ReactNode;
}

export function TechnicalSection({ title, children }: TechnicalSectionProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}