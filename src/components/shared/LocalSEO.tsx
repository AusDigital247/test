import { Helmet } from 'react-helmet-async';
import { LocalBusinessLocation } from '../../types/location';
import { generateLocalBusinessSchema, generateLocationBasedService } from '../../utils/seo';

interface LocalSEOProps {
  location: LocalBusinessLocation;
  service?: {
    name: string;
    description: string;
    image?: string;
  };
  pageTitle?: string;
  pageDescription?: string;
}

export default function LocalSEO({ 
  location, 
  service,
  pageTitle,
  pageDescription 
}: LocalSEOProps) {
  const title = pageTitle || `TechnovaAI ${location.city} - AI Solutions & Software Development`;
  const description = pageDescription || 
    `Leading AI solutions and software development services in ${location.city}, ${location.province}. ` +
    `Custom AI integration, web development, and data engineering solutions for local businesses.`;

  const schemas = [
    generateLocalBusinessSchema(location),
    ...(service ? [generateLocationBasedService(service, location)] : [])
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Location-specific meta tags */}
      <meta name="geo.region" content={`CA-${location.province}`} />
      <meta name="geo.placename" content={location.city} />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}