import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  image?: {
    src: string;
    alt: string;
    position?: 'left' | 'right';
    aspectRatio?: 'square' | 'video' | 'wide';
    hover?: 'zoom' | 'lift' | 'glow' | 'none';
  };
  variant?: 'dark' | 'light';
}

export default function ContentSection({ 
  title, 
  children, 
  image, 
  variant = 'dark'
}: ContentSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-16 ${isDark ? 'bg-[#0B0F17]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {image?.position === 'left' && image && (
              <ImageCard
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                hover={image.hover}
              />
            )}
            
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-6`}>
              {children}
            </div>
            
            {image?.position === 'right' && image && (
              <ImageCard
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                hover={image.hover}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}