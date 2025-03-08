import { useParams } from 'react-router-dom';
import ServiceLayout from '../../components/shared/ServiceLayout';
import ServiceSEO from '../../components/seo/ServiceSEO';
import { serviceImages } from '../../utils/images';
import { getLocationByCity } from '../../utils/seo/locations';
import NotFound from '../NotFound';
import Features from '../../components/sections/Features';
import Process from '../../components/sections/Process';
import Stats from '../../components/sections/Stats';
import MagentoCaseStudy from '../../components/services/case-studies/MagentoCaseStudy';

const service = {
  name: "Web Development Services",
  description: "Create powerful, scalable web applications with cutting-edge technologies and best practices.",
  image: serviceImages.web.hero,
  faqs: [
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies like React, Next.js, Node.js, and TypeScript to build scalable web applications."
    },
    {
      question: "How long does a typical web project take?",
      answer: "Project timelines vary based on complexity, but typical projects take 2-4 months from planning to launch."
    }
  ]
};

const magentoCaseStudies = [
  {
    title: "Enterprise B2B E-commerce Platform",
    client: "Global Manufacturing Company",
    challenge: "Legacy e-commerce system with poor performance and limited B2B features",
    solution: "Custom Magento Enterprise implementation with advanced B2B features, ERP integration, and optimized performance",
    results: [
      "40% improvement in page load times",
      "300% increase in B2B order volume",
      "Automated order processing with SAP integration",
      "Custom pricing engine for complex B2B scenarios"
    ],
    techStack: [
      "Magento Enterprise",
      "Varnish Cache",
      "Redis",
      "Elasticsearch",
      "Docker",
      "AWS"
    ]
  },
  {
    title: "Multi-store Fashion Retailer",
    client: "International Fashion Brand",
    challenge: "Complex multi-store setup with performance issues and inventory sync problems",
    solution: "Optimized Magento architecture with custom inventory management and CDN implementation",
    results: [
      "99.9% uptime achievement",
      "Real-time inventory sync across 50+ stores",
      "2-second average page load time",
      "60% increase in mobile conversions"
    ],
    techStack: [
      "Magento Commerce",
      "Vue Storefront",
      "GraphQL",
      "RabbitMQ",
      "Kubernetes",
      "GCP"
    ]
  }
];

export default function WebDevelopment() {
  const { location } = useParams();
  const locationData = location ? getLocationByCity(location) : undefined;

  if (location && !locationData) {
    return <NotFound />;
  }

  const title = locationData 
    ? `Web Development Services in ${locationData.city}`
    : "Web Development Services";

  const description = locationData
    ? `Professional web development services in ${locationData.city}, ${locationData.province}. Create powerful, scalable web applications with cutting-edge technologies.`
    : service.description;

  const keywords = [
    "Web Development",
    "React",
    "Node.js",
    "TypeScript",
    ...(locationData ? [locationData.city, locationData.province, "Local Web Development"] : [])
  ];

  const canonical = locationData
    ? `https://technovaai.com/services/web-development/${locationData.city.toLowerCase()}`
    : "https://technovaai.com/services/web-development";

  const seoProps = {
    service: {
      ...service,
      name: title,
      description: description
    },
    location: locationData,
    keywords,
    canonical
  };

  return (
    <>
      <ServiceSEO {...seoProps} />
      <ServiceLayout
        title={title}
        description={description}
        heroImage={service.image}
      >
        <Features variant="dark" />
        
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {magentoCaseStudies.map((study, index) => (
                <MagentoCaseStudy key={index} {...study} />
              ))}
            </div>
          </div>
        </section>

        <Process variant="dark" />
        <Stats variant="light" />
      </ServiceLayout>
    </>
  );
}