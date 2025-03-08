import { Search, BarChart, Globe, Zap, Shield, Code } from 'lucide-react';

const seoTools = [
  {
    category: "Technical SEO",
    tools: [
      {
        icon: Code,
        name: "Technical Analysis",
        description: "Advanced crawling and technical SEO audit tools"
      },
      {
        icon: Shield,
        name: "Core Web Vitals",
        description: "Performance monitoring and optimization tools"
      }
    ]
  },
  {
    category: "Content Optimization",
    tools: [
      {
        icon: Search,
        name: "Keyword Research",
        description: "AI-powered keyword research and content optimization"
      },
      {
        icon: Globe,
        name: "Content Analysis",
        description: "Content quality and relevance assessment tools"
      }
    ]
  },
  {
    category: "Performance Tracking",
    tools: [
      {
        icon: BarChart,
        name: "Analytics",
        description: "Comprehensive SEO performance tracking"
      },
      {
        icon: Zap,
        name: "Real-time Monitoring",
        description: "Instant ranking and traffic monitoring"
      }
    ]
  }
];

export default function SEOStack() {
  return (
    <div className="space-y-12">
      {seoTools.map((category, index) => (
        <div key={index} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {category.tools.map((tool, toolIndex) => (
              <div 
                key={toolIndex}
                className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all bg-[#0B0F17]/50"
              >
                <tool.icon className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{tool.name}</h4>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}