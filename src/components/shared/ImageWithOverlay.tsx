import { motion } from 'framer-motion';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  overlay?: 'gradient' | 'dark' | 'light' | 'none';
  className?: string;
}

export default function ImageWithOverlay({ 
  src, 
  alt, 
  overlay = 'gradient',
  className = ''
}: ImageWithOverlayProps) {
  const overlayStyles = {
    gradient: 'bg-gradient-to-r from-[#0B0F17]/80 to-transparent',
    dark: 'bg-[#0B0F17]/50',
    light: 'bg-white/50',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 z-10 ${overlayStyles[overlay]}`} />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}