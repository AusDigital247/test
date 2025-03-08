import { ReactNode } from 'react';

interface ArchitectureDiagramProps {
  title: string;
  imageUrl: string;
  description: string;
}

export function ArchitectureDiagram({ title, imageUrl, description }: ArchitectureDiagramProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full"
        />
      </div>
      <p className="mt-4 text-gray-600 text-sm">{description}</p>
    </div>
  );
}