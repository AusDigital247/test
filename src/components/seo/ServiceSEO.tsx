import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '../../utils/seo/meta';
import { 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../utils/seo/schemas';
import { LocalBusinessLocation } from '../../types/location';

interface ServiceSEOProps {
  service: {
    name: string;
    description: string;
    image?: string;
    price?: string;
    faqs?: Array<{ question: string; answer: string }>;
  };
  location?: LocalBusinessLocation;
  keywords?: string[];
  canonical?: string;
}

export default function ServiceSEO({
  service,
  location,
  keywords,
  canonical
}: ServiceSEOProps) {
  const title = location 
    ? `${service.name} in ${location.city} | TechnovaAI`
    : `${service.name} | TechnovaAI`;

  const description = location
    ? `${service.description} Professional ${service.name} services in ${location.city}, ${location.province}.`
    : service.description;

  const metaTags = generateMetaTags({
    title,
    description,
    keywords,
    ogImage: service.image,
    canonical,
    location
  });

  const schemas = [
    generateServiceSchema(service),
    ...(service.faqs ? [generateFAQSchema(service.faqs)] : [])
  ];

  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}