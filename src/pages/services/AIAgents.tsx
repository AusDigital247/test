import ServicePage from '../../components/shared/ServicePage';
import ServiceHero from '../../components/shared/ServiceHero';
import ServiceMetric from '../../components/services/ServiceMetric';
import ServiceFeatureCard from '../../components/services/ServiceFeatureCard';

export default function AIAgents() {
  const agentTypes = [
    {
      title: "Customer Service Agents",
      features: [
        "24/7 customer support",
        "Multi-language support",
        "Sentiment analysis",
        "Automated ticket routing"
      ]
    },
    {
      title: "Sales Assistants",
      features: [
        "Lead qualification",
        "Product recommendations",
        "Quote generation",
        "Meeting scheduling"
      ]
    },
    {
      title: "Internal Support Bots",
      features: [
        "IT helpdesk automation",
        "HR query handling",
        "Knowledge base access",
        "Process automation"
      ]
    }
  ];

  return (
    <>
      <ServiceHero
        title="AI Agents & Chatbots"
        description="Enhance customer experience and automate support with intelligent conversational AI"
        image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80"
      />
      <ServicePage
        title="AI Agents & Chatbots"
        description="Transform your customer service and support operations with intelligent AI-powered conversations"
      >
        <div className="text-gray-700">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Intelligent Conversational AI</h2>
            <p className="mb-6">
              Our AI agents and chatbots leverage advanced natural language processing and machine learning to deliver human-like interactions that enhance customer experience while reducing operational costs. These intelligent systems learn and improve over time, providing increasingly personalized and efficient service.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <img
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800"
                alt="AI Chatbot Interface"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Capabilities</h3>
                <ul className="space-y-3">
                  <ServiceMetric
                    icon="🤖"
                    value="Natural Language"
                    description="understanding with 95% accuracy"
                  />
                  <ServiceMetric
                    icon="⚡"
                    value="Instant"
                    description="response to customer queries"
                  />
                  <ServiceMetric
                    icon="🔄"
                    value="Continuous"
                    description="learning and improvement"
                  />
                  <ServiceMetric
                    icon="🌐"
                    value="Multi-channel"
                    description="support across platforms"
                  />
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Types of AI Agents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {agentTypes.map((type, index) => (
                <ServiceFeatureCard
                  key={index}
                  title={type.title}
                  features={type.features}
                />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Our AI agents come equipped with advanced features that enable seamless, intelligent interactions:
                </p>
                <ul className="space-y-4">
                  <ServiceMetric
                    icon="🎯"
                    value="Context-aware"
                    description="conversations with memory"
                  />
                  <ServiceMetric
                    icon="🔍"
                    value="Intent recognition"
                    description="for accurate response matching"
                  />
                  <ServiceMetric
                    icon="📊"
                    value="Analytics dashboard"
                    description="for performance monitoring"
                  />
                  <ServiceMetric
                    icon="🔒"
                    value="Enterprise security"
                    description="with data encryption"
                  />
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800"
                alt="AI Analytics Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
                alt="Customer Service Impact"
                className="rounded-lg shadow-lg"
              />
              <div>
                <p className="mb-4">Our AI agents have transformed customer service operations:</p>
                <ul className="space-y-4">
                  <ServiceMetric
                    icon="✓"
                    value="70%"
                    description="reduction in response time"
                  />
                  <ServiceMetric
                    icon="✓"
                    value="45%"
                    description="decrease in support costs"
                  />
                  <ServiceMetric
                    icon="✓"
                    value="24/7"
                    description="availability with zero downtime"
                  />
                  <ServiceMetric
                    icon="✓"
                    value="85%"
                    description="customer satisfaction rate"
                  />
                </ul>
              </div>
            </div>
          </section>
        </div>
      </ServicePage>
    </>
  );
}