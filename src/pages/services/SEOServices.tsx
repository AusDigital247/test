import { useParams } from 'react-router-dom';
import ServiceLayout from '../../components/shared/ServiceLayout';
import ServiceSEO from '../../components/seo/ServiceSEO';
import { serviceImages } from '../../utils/images';
import { getLocationByCity } from '../../utils/seo/locations';
import NotFound from '../NotFound';
import SEOCaseStudy from '../../components/services/case-studies/SEOCaseStudy';
import SEOMetrics from '../../components/services/metrics/SEOMetrics';
import SEOStack from '../../components/services/tech-stack/SEOStack';

const service = {
  name: "SEO Services",
  description: "Drive organic growth with data-driven SEO strategies and AI-powered optimization",
  image: serviceImages.seo.hero
};

const caseStudies = [
  {
    title: "E-commerce SEO Transformation",
    client: "Online Fashion Retailer",
    challenge: "Low organic visibility and declining e-commerce sales",
    solution: "Comprehensive technical SEO overhaul and content strategy implementation",
    results: [
      "250% increase in organic traffic",
      "180% growth in organic revenue",
      "Top 3 rankings for 500+ keywords",
      "45% reduction in bounce rate"
    ],
    techStack: [
      "Semrush",
      "Ahrefs",
      "Google Search Console",
      "Schema Markup",
      "Core Web Vitals"
    ]
  },
  {
    title: "SaaS Platform SEO Growth",
    client: "B2B Software Company",
    challenge: "Limited organic visibility in competitive SaaS market",
    solution: "Technical optimization and content cluster strategy implementation",
    results: [
      "400% increase in organic leads",
      "First page rankings for 200+ target terms",
      "68% improvement in conversion rate",
      "35% reduction in customer acquisition cost"
    ],
    techStack: [
      "ContentKing",
      "Screaming Frog",
      "Google Analytics 4",
      "SEMrush",
      "Clearscope"
    ]
  },
  {
    title: "Local Business SEO Campaign",
    client: "Multi-location Healthcare Provider",
    challenge: "Poor local search visibility across multiple locations",
    solution: "Local SEO optimization and location-specific content strategy",
    results: [
      "300% increase in local organic traffic",
      "Top 3 rankings for all location-based keywords",
      "150% increase in appointment bookings",
      "Improved Google Business Profile performance"
    ],
    techStack: [
      "BrightLocal",
      "Local Viking",
      "Google Business Profile",
      "Schema Pro",
      "Yext"
    ]
  },
  {
    title: "Enterprise Technical SEO",
    client: "Global Publishing Company",
    challenge: "Complex technical issues affecting site performance and indexing",
    solution: "Enterprise-level technical SEO audit and optimization program",
    results: [
      "90% improvement in Core Web Vitals",
      "2M+ additional indexed pages",
      "60% faster page load times",
      "200% increase in organic traffic value"
    ],
    techStack: [
      "DeepCrawl",
      "Botify",
      "New Relic",
      "Cloudflare",
      "PageSpeed Insights API"
    ]
  }
];

export default function SEOServices() {
  const { location } = useParams();
  const locationData = location ? getLocationByCity(location) : undefined;

  if (location && !locationData) {
    return <NotFound />;
  }

  const title = locationData 
    ? `SEO Services in ${locationData.city}`
    : "SEO Services";

  const description = locationData
    ? `Professional SEO services in ${locationData.city}, ${locationData.province}. Drive organic growth with data-driven strategies.`
    : service.description;

  const seoProps = {
    service: {
      ...service,
      name: title,
      description: description
    },
    location: locationData,
    keywords: ["SEO", "Search Engine Optimization", "Digital Marketing"],
    canonical: locationData
      ? `https://technovaai.com/services/seo-services/${locationData.city.toLowerCase()}`
      : "https://technovaai.com/services/seo-services"
  };

  return (
    <>
      <ServiceSEO {...seoProps} />
      <ServiceLayout
        title={title}
        description={description}
        heroImage={service.image}
      >
        <SEOMetrics />
        
        <section className="py-16 bg-[#0B0F17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Our SEO Technology Stack</h2>
            <SEOStack />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <SEOCaseStudy key={index} {...study} />
              ))}
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
}