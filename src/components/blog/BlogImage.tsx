import { ReactNode } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function BlogImage({ src, alt, caption, className = '' }: BlogImageProps) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-xl ${className}`}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}