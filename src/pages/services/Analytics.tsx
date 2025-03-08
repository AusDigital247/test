import { useParams } from 'react-router-dom';
import ServiceLayout from '../../components/shared/ServiceLayout';
import ServiceSEO from '../../components/seo/ServiceSEO';
import { serviceImages } from '../../utils/images';
import { getLocationByCity } from '../../utils/seo/locations';
import NotFound from '../NotFound';
import FeatureGrid from '../../components/shared/FeatureGrid';
import AnalyticsCaseStudy from '../../components/services/case-studies/AnalyticsCaseStudy';
import AnalyticsStack from '../../components/services/tech-stack/AnalyticsStack';
import { BarChart, PieChart, LineChart, TrendingUp, Database, Brain } from 'lucide-react';

const features = [
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Comprehensive data analysis with interactive visualizations."
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms for predictive analytics."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with multiple data sources."
  },
  {
    icon: LineChart,
    title: "Real-time Monitoring",
    description: "Live tracking and instant notifications."
  },
  {
    icon: PieChart,
    title: "Custom Reports",
    description: "Tailored reports and dashboards for your needs."
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Key performance indicators and growth tracking."
  }
];

const caseStudies = [
  {
    title: "E-commerce Analytics Platform",
    client: "Major Online Retailer",
    challenge: "Fragmented data sources and inability to track customer journey across channels",
    solution: "Implemented unified analytics platform with real-time tracking and ML-powered recommendations",
    results: [
      "45% increase in conversion rate",
      "200% ROI from personalized recommendations",
      "Real-time inventory optimization",
      "Automated marketing campaign analysis"
    ],
    techStack: [
      "Google Analytics 4",
      "BigQuery",
      "Looker",
      "TensorFlow",
      "Snowflake"
    ]
  },
  {
    title: "Healthcare Analytics Dashboard",
    client: "Regional Hospital Network",
    challenge: "Complex healthcare metrics tracking and compliance reporting needs",
    solution: "Custom healthcare analytics platform with automated compliance reporting",
    results: [
      "85% reduction in reporting time",
      "100% compliance achievement",
      "Improved patient outcome tracking",
      "Real-time resource optimization"
    ],
    techStack: [
      "Power BI",
      "Azure Synapse",
      "HIPAA Controls",
      "Python",
      "R"
    ]
  },
  {
    title: "Marketing Attribution Platform",
    client: "Digital Marketing Agency",
    challenge: "Difficulty in tracking multi-channel marketing performance and ROI",
    solution: "Built custom attribution model with ML-powered insights",
    results: [
      "30% improvement in ad spend efficiency",
      "Cross-channel attribution accuracy",
      "Automated reporting workflows",
      "Real-time campaign optimization"
    ],
    techStack: [
      "Google Analytics",
      "Tableau",
      "Python",
      "TensorFlow",
      "PostgreSQL"
    ]
  },
  {
    title: "Supply Chain Analytics",
    client: "Global Logistics Company",
    challenge: "Limited visibility into supply chain performance and bottlenecks",
    solution: "Implemented end-to-end supply chain analytics platform",
    results: [
      "25% reduction in delivery delays",
      "Optimized inventory levels",
      "Predictive maintenance savings",
      "Real-time fleet tracking"
    ],
    techStack: [
      "Databricks",
      "Azure IoT",
      "Power BI",
      "Python",
      "Kafka"
    ]
  }
];

export default function Analytics() {
  const { location } = useParams();
  const locationData = location ? getLocationByCity(location) : undefined;

  if (location && !locationData) {
    return <NotFound />;
  }

  return (
    <ServiceLayout
      title="Analytics Solutions"
      description="Transform your data into actionable insights with our advanced analytics platform"
      heroImage={serviceImages.data.hero}
    >
      <FeatureGrid features={features} variant="dark" />
      
      <section className="py-16 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Analytics Platform</h2>
          <AnalyticsStack />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <AnalyticsCaseStudy key={index} {...study} />
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}