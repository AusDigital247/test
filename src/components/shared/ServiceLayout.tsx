import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import ServiceHero from './ServiceHero';
import CTA from '../sections/CTA';
import { motion } from 'framer-motion';
import { validateLocation } from '../../utils/seo/locations';
import NotFound from '../../pages/NotFound';

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  children: ReactNode;
}

export default function ServiceLayout({
  title,
  description,
  heroImage,
  children
}: ServiceLayoutProps) {
  const { location } = useParams();

  // If location is provided but invalid, show 404
  if (location && !validateLocation(location)) {
    return <NotFound />;
  }

  return (
    <div className="bg-[#0B0F17]">
      <ServiceHero
        title={title}
        description={description}
        image={heroImage}
      />
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg max-w-none"
      >
        {children}
      </motion.article>
      <CTA variant="dark" />
    </div>
  );
}