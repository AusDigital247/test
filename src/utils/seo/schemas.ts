import { LocalBusinessLocation } from '../../types/location';

// FAQ schema for service pages
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "AUS Digital"
    },
    ...(service.image && { "image": service.image })
  };
}

export function generateLocalBusinessSchema(location: LocalBusinessLocation) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `AUS Digital ${location.city}`,
    "description": `Leading AI software solutions and development services in ${location.city}, ${location.province}. Custom AI integration, software development, and data engineering solutions.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.province,
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    },
    "url": `https://ausdigital247.com/locations/${location.city.toLowerCase()}`
  };
}

export function generateLocationBasedService(
  service: {
    name: string;
    description: string;
    image?: string;
  },
  location: LocalBusinessLocation
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} in ${location.city}`,
    "description": `${service.description} Serving businesses in ${location.city}, ${location.province}.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": `AUS Digital ${location.city}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.city,
        "addressRegion": location.province,
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": location.city,
      "containedIn": {
        "@type": "State",
        "name": location.province
      }
    },
    ...(service.image && { "image": service.image })
  };
}