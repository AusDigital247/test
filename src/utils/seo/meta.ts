export function generateMetaTags({
  title,
  description,
  keywords = [],
  ogImage = 'https://ausdigital247.com/og-image.jpg',
  canonical,
  location
}: MetaTagsConfig) {
  const tags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'AUS Digital' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage }
  ];

  if (canonical) {
    tags.push({ rel: 'canonical', href: canonical });
  }

  if (location) {
    tags.push(
      { name: 'geo.region', content: `CA-${location.province}` },
      { name: 'geo.placename', content: location.city },
      { name: 'geo.position', content: `${location.latitude};${location.longitude}` },
      { name: 'ICBM', content: `${location.latitude}, ${location.longitude}` }
    );
  }

  return tags;
}