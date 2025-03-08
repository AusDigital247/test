import { useParams } from 'react-router-dom';
import ServiceLayout from '../../components/shared/ServiceLayout';
import ServiceSEO from '../../components/seo/ServiceSEO';
import { serviceImages } from '../../utils/images';
import { getLocationByCity } from '../../utils/seo/locations';
import NotFound from '../NotFound';
import Features from '../../components/sections/Features';
import Process from '../../components/sections/Process';
import Stats from '../../components/sections/Stats';
import AICaseStudy from '../../components/services/case-studies/AICaseStudy';

const service = {
  name: "AI Integration Services",
  description: "Enterprise AI integration services to automate processes, reduce costs, and drive growth. Custom AI solutions tailored to your business needs.",
  image: serviceImages.ai.hero,
  faqs: [
    {
      question: "What types of AI solutions do you offer?",
      answer: "We offer custom AI solutions including machine learning integration, process automation, intelligent analytics, and AI-powered decision support systems."
    },
    {
      question: "How long does AI integration typically take?",
      answer: "The timeline varies based on project complexity, but typical enterprise AI integrations take 3-6 months from planning to full deployment."
    }
  ]
};

const caseStudies = [
  {
    title: "AI-Powered Customer Service Automation",
    client: "Major Telecommunications Provider",
    challenge: "High volume of customer inquiries causing long wait times and customer dissatisfaction",
    solution: "Implemented AI-powered chatbot with natural language processing and sentiment analysis",
    results: [
      "70% reduction in response time",
      "45% decrease in support costs",
      "90% customer satisfaction rate",
      "24/7 support availability"
    ],
    techStack: [
      "GPT-4",
      "Azure Cognitive Services",
      "Custom ML Models",
      "Node.js",
      "React"
    ]
  },
  {
    title: "Predictive Maintenance System",
    client: "Industrial Manufacturing Company",
    challenge: "Frequent equipment failures leading to costly downtime and maintenance",
    solution: "Developed ML-based predictive maintenance system using IoT sensor data",
    results: [
      "85% accuracy in failure prediction",
      "$2.5M annual maintenance savings",
      "50% reduction in downtime",
      "Real-time monitoring dashboard"
    ],
    techStack: [
      "TensorFlow",
      "Azure IoT Hub",
      "Python",
      "Docker",
      "Kubernetes"
    ]
  },
  {
    title: "AI-Driven Inventory Optimization",
    client: "Global Retail Chain",
    challenge: "Inefficient inventory management leading to stockouts and overstock situations",
    solution: "Implemented AI-powered demand forecasting and inventory optimization system",
    results: [
      "30% reduction in inventory costs",
      "95% improvement in stock accuracy",
      "20% increase in sales",
      "Automated reordering system"
    ],
    techStack: [
      "Prophet",
      "scikit-learn",
      "PostgreSQL",
      "FastAPI",
      "Redis"
    ]
  },
  {
    title: "Intelligent Document Processing",
    client: "Financial Services Institution",
    challenge: "Manual document processing causing delays and errors in loan applications",
    solution: "Developed AI-powered document processing system with OCR and NLP",
    results: [
      "90% reduction in processing time",
      "99% accuracy in data extraction",
      "75% cost savings in operations",
      "Automated compliance checking"
    ],
    techStack: [
      "Tesseract OCR",
      "BERT",
      "PyTorch",
      "MongoDB",
      "Express.js"
    ]
  }
];

export default function AIIntegration() {
  const { location } = useParams();
  const locationData = location ? getLocationByCity(location) : undefined;

  if (location && !locationData) {
    return <NotFound />;
  }

  const title = locationData 
    ? `AI Integration Services in ${locationData.city}`
    : "AI Integration Services";

  const description = locationData
    ? `Professional AI integration services in ${locationData.city}, ${locationData.province}. Custom AI solutions tailored to your local business needs.`
    : service.description;

  const keywords = [
    "AI Integration",
    "Machine Learning",
    "Process Automation",
    "Enterprise AI",
    ...(locationData ? [locationData.city, locationData.province, "Local AI Services"] : [])
  ];

  const canonical = locationData
    ? `https://technovaai.com/services/ai-integration/${locationData.city.toLowerCase()}`
    : "https://technovaai.com/services/ai-integration";

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
            <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <AICaseStudy key={index} {...study} />
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