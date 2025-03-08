import { motion } from 'framer-motion';
import NeonGrid from '../effects/NeonGrid';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <div className="relative min-h-[70vh] bg-[#0B0F17] flex items-center overflow-hidden">
      <NeonGrid />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-transparent z-10" />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B0F17]/40" />
        <img 
          src={image}
          alt="Hero Background"
          className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}