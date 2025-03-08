import { useParams } from 'react-router-dom';
import ServiceLayout from '../../components/shared/ServiceLayout';
import ServiceSEO from '../../components/seo/ServiceSEO';
import { serviceImages } from '../../utils/images';
import { getLocationByCity } from '../../utils/seo/locations';
import NotFound from '../NotFound';
import Features from '../../components/sections/Features';
import Process from '../../components/sections/Process';
import Stats from '../../components/sections/Stats';
import AzureStack from '../../components/services/tech-stack/AzureStack';
import DataEngineeringCaseStudy from '../../components/services/case-studies/DataEngineeringCaseStudy';

const service = {
  name: "Data Engineering Services",
  description: "Build robust data infrastructure that scales with your business needs. Transform raw data into actionable insights.",
  image: serviceImages.data.hero,
  faqs: [
    {
      question: "What data solutions do you offer?",
      answer: "We offer data pipeline development, data warehouse design, ETL processes, and real-time analytics solutions."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security measures including encryption, access controls, and compliance with data protection regulations."
    }
  ]
};

const caseStudies = [
  {
    title: "Enterprise Data Lake Implementation",
    client: "Global Financial Services Company",
    challenge: "Fragmented data sources, slow reporting, and inability to perform real-time analytics on customer data",
    solution: "Implemented Azure Data Lake with real-time ingestion pipelines and automated ETL processes",
    results: [
      "Reduced reporting time from days to minutes",
      "99.99% data accuracy achieved",
      "Real-time fraud detection capabilities",
      "60% reduction in data storage costs"
    ],
    techStack: [
      "Azure Synapse Analytics",
      "Azure Data Lake Gen2",
      "Azure Data Factory",
      "Power BI",
      "Azure Databricks"
    ]
  },
  {
    title: "IoT Data Processing Platform",
    client: "Manufacturing Industry Leader",
    challenge: "Processing and analyzing massive IoT sensor data from manufacturing plants",
    solution: "Built scalable IoT data processing platform using Azure services with real-time analytics",
    results: [
      "Processing 1M+ events per second",
      "Predictive maintenance saving $2M annually",
      "90% reduction in downtime",
      "Real-time quality control implementation"
    ],
    techStack: [
      "Azure IoT Hub",
      "Azure Stream Analytics",
      "Azure Functions",
      "Azure Cosmos DB",
      "Azure Machine Learning"
    ]
  },
  {
    title: "Healthcare Analytics Platform",
    client: "National Healthcare Provider",
    challenge: "Complex healthcare data integration and analytics needs with strict compliance requirements",
    solution: "Developed HIPAA-compliant data platform with real-time analytics and ML capabilities",
    results: [
      "100% HIPAA compliance achieved",
      "Reduced patient readmission rates by 35%",
      "Automated reporting saved 1000+ hours annually",
      "Improved patient outcome predictions by 45%"
    ],
    techStack: [
      "Azure Synapse Analytics",
      "Azure HIPAA/HITRUST",
      "Azure Machine Learning",
      "Power BI Premium",
      "Azure Key Vault"
    ]
  }
];

export default function DataEngineering() {
  const { location } = useParams();
  const locationData = location ? getLocationByCity(location) : undefined;

  if (location && !locationData) {
    return <NotFound />;
  }

  const title = locationData 
    ? `Data Engineering Services in ${locationData.city}`
    : "Data Engineering Services";

  const description = locationData
    ? `Professional data engineering services in ${locationData.city}, ${locationData.province}. Build robust data infrastructure and transform raw data into insights.`
    : service.description;

  const keywords = [
    "Data Engineering",
    "ETL",
    "Data Pipelines",
    "Analytics",
    ...(locationData ? [locationData.city, locationData.province, "Local Data Engineering"] : [])
  ];

  const canonical = locationData
    ? `https://technovaai.com/services/data-engineering/${locationData.city.toLowerCase()}`
    : "https://technovaai.com/services/data-engineering";

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
        
        <section className="py-16 bg-[#0B0F17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Azure Data Platform</h2>
            <AzureStack />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <DataEngineeringCaseStudy key={index} {...study} />
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