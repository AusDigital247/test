import { motion } from 'framer-motion';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
  hover?: 'zoom' | 'lift' | 'glow' | 'none';
}

export default function ImageCard({ 
  src, 
  alt, 
  className = '',
  aspectRatio = 'video',
  hover = 'zoom'
}: ImageCardProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]'
  };

  const hoverEffects = {
    zoom: 'group-hover:scale-110',
    lift: 'group-hover:-translate-y-2',
    glow: 'group-hover:shadow-[0_0_30px_rgba(61,210,240,0.3)]',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative overflow-hidden rounded-xl group
        ${aspectRatioClasses[aspectRatio]}
        ${className}
      `}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F17]/80 via-[#0B0F17]/50 to-transparent 
        z-10 transition-opacity duration-500 group-hover:opacity-40" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3DD2F0]/0 to-[#5D9EF0]/0 
        opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20" />
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`
          w-full h-full object-cover transition-all duration-700
          ${hoverEffects[hover]}
        `}
      />
    </motion.div>
  );
}