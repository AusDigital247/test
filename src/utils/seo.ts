// Existing imports...

interface LocalBusinessLocation {
  city: string;
  province: string;
  postalCode: string;
  streetAddress?: string;
  telephone?: string;
}

const canadianLocations: LocalBusinessLocation[] = [
  {
    city: "Toronto",
    province: "Ontario",
    postalCode: "M5H 2N2",
    streetAddress: "100 King Street West",
    telephone: "+1-416-555-0123"
  },
  {
    city: "Vancouver",
    province: "British Columbia",
    postalCode: "V6C 3E1",
    streetAddress: "1055 West Georgia Street",
    telephone: "+1-604-555-0123"
  },
  {
    city: "Kitchener",
    province: "Ontario",
    postalCode: "N2G 1H6",
    streetAddress: "305 King Street West",
    telephone: "+1-519-555-0123"
  },
  {
    city: "London",
    province: "Ontario",
    postalCode: "N6A 1C3",
    streetAddress: "255 Queens Avenue",
    telephone: "+1-519-555-0124"
  }
];

export function generateLocalBusinessSchema(location: LocalBusinessLocation) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `TechnovaAI ${location.city}`,
    "description": `Leading AI solutions and software development services in ${location.city}, ${location.province}. Custom AI integration, web development, and data engineering solutions.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.streetAddress,
      "addressLocality": location.city,
      "addressRegion": location.province,
      "postalCode": location.postalCode,
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "url": `https://technovaai.com/locations/${location.city.toLowerCase()}`,
    "telephone": location.telephone,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
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
      "name": `TechnovaAI ${location.city}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.city,
        "addressRegion": location.province,
        "postalCode": location.postalCode,
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

// Export locations for use in components
export { canadianLocations };