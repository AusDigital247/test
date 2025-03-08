import { Link } from 'react-router-dom';
import { Brain, Code, Database, Search, MessageCircle, LineChart } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import SectionContainer from './SectionContainer';

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI solutions to automate processes, reduce costs, and enhance decision-making capabilities.",
    path: "/services/ai-integration",
    linkText: "Enterprise AI Integration Solutions"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Modern Softwares, responsive websites and web applications built with cutting-edge technologies.",
    path: "/services/web-development",
    linkText: "Custom Web Development Services"
  },
  {
    icon: Database,
    title: "Data Engineering Solutions",
    description: "Robust data pipelines and infrastructure to power your AI and analytics initiatives.",
    path: "/services/data-engineering",
    linkText: "Enterprise Data Engineering Solutions"
  },
  {
    icon: MessageCircle,
    title: "AI Agents & Chatbots Development",
    description: "Intelligent conversational agents to enhance customer service and automate support.",
    path: "/services/ai-agents",
    linkText: "AI-Powered Chatbot Solutions"
  },
  {
    icon: LineChart,
    title: "Data Analytics & Visualization",
    description: "Advanced analytics solutions for data-driven decision making .",
    path: "/services/analytics",
    linkText: "Business Analytics Solutions"
  },
  {
    icon: Search,
    title: "Digital Marketing Services",
    description: "Data-driven Digital Marketing & SEO strategies to improve visibility and drive organic traffic.",
    path: "/services/seo-services",
    linkText: "Enterprise Digital Marketing & SEO Services"
  }
 
];

interface ServicesProps {
  variant?: 'dark' | 'light';
}

export default function Services({ variant = 'dark' }: ServicesProps) {
  const isDark = variant === 'dark';

  return (
    <SectionContainer
      title="Our"
      highlightedText="Services"
      description="Comprehensive AI and software solutions to drive your business forward"
      variant={variant}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link key={index} to={service.path} aria-label={service.linkText}>
            <AnimatedSection
              className={`p-6 rounded-xl border transition-all group hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30'
                  : 'bg-white/50 border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 shadow-lg'
              }`}
            >
              <service.icon className="w-12 h-12 text-[#3DD2F0] mb-4 transition-transform group-hover:scale-110" />
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {service.description}
              </p>
            </AnimatedSection>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}