import { Helmet } from 'react-helmet-async';
import { Brain, Award, Users, Globe, ChevronRight, BarChart, Shield, Clock, Code, Database, Cpu } from 'lucide-react';
import GlassContainer from '../../components/shared/GlassContainer';
import GlossyCard from '../../components/shared/GlossyCard';

const stats = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '95%', label: 'Client Retention' },
  { value: '50+', label: 'AI Solutions Deployed' },
  { value: '24/7', label: 'Support Coverage' }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Pioneering AI-driven solutions that transform business operations'
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building lasting partnerships through reliability and transparency'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to deliver unique solutions'
  },
  {
    icon: BarChart,
    title: 'Excellence',
    description: 'Maintaining the highest standards in AI implementation'
  }
];

const expertise = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Custom AI implementations that transform operations',
    capabilities: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ]
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data infrastructure for analytics',
    capabilities: [
      'Data Pipeline Development',
      'ETL Processes',
      'Data Warehousing',
      'Real-time Analytics'
    ]
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Modern software solutions for growth',
    capabilities: [
      'Web Applications',
      'Mobile Solutions',
      'Cloud Architecture',
      'API Development'
    ]
  }
];

const industries = [
  {
    title: 'Healthcare',
    description: 'Improving patient care through AI-driven diagnostics and workflow optimization',
    achievements: ['45% reduction in diagnostic time', '99.9% accuracy in image analysis']
  },
  {
    title: 'Finance',
    description: 'Enhancing financial operations with intelligent automation and risk analysis',
    achievements: ['60% faster transaction processing', '$2M annual cost savings']
  },
  {
    title: 'Manufacturing',
    description: 'Optimizing production through predictive maintenance and quality control',
    achievements: ['35% reduction in downtime', '40% improvement in quality metrics']
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About AUS Digital | AI-Driven Unique Solutions</title>
        <meta 
          name="description" 
          content="Learn about AUS Digital's mission to transform businesses through innovative AI solutions. Discover our values, expertise, and commitment to excellence." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F17] to-[#1a1f2d]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
          bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Business Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]"> AI Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              At AUS Digital, we specialize in delivering AI-Driven Unique Solutions that help businesses achieve unprecedented growth and efficiency. Our team of experts combines cutting-edge AI technology with deep industry knowledge to create transformative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#0B0F17] to-[#0B0F17]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <GlassContainer key={index} variant="dark" className="p-6 text-center">
                <div className="text-3xl font-bold text-[#3DD2F0] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </GlassContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our approach to delivering exceptional results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlossyCard key={index} hover="both" className="p-8">
                <value.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </GlossyCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3DD2F0]/10 to-[#5D9EF0]/10 
                backdrop-blur-sm rounded-xl p-8 border border-[#3DD2F0]/20">
                <item.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <ChevronRight className="w-4 h-4 text-[#3DD2F0] mr-2" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering transformative solutions across diverse sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <GlossyCard key={index} className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center text-[#3DD2F0]">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </GlossyCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassContainer variant="dark" className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <button className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] text-[#0B0F17] px-8 py-4 rounded-lg
              hover:from-[#2CC1E0] hover:to-[#4C8DE0] transition-all font-semibold">
              Schedule a Consultation
            </button>
          </GlassContainer>
        </div>
      </section>
    </>
  );
}