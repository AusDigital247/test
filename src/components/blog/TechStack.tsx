import { ReactNode } from 'react';

interface TechStackProps {
  title: string;
  items: {
    name: string;
    description: string;
  }[];
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <div className="font-medium mb-2">{item.name}</div>
            <div className="text-gray-600 text-sm">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}