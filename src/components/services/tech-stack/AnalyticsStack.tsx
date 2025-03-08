import { BarChart, PieChart, LineChart, TrendingUp, Database, Brain } from 'lucide-react';

const analyticsTools = [
  {
    category: "Data Collection & Processing",
    tools: [
      {
        icon: Database,
        name: "Data Integration",
        description: "ETL pipelines and real-time data ingestion from multiple sources"
      },
      {
        icon: Brain,
        name: "ML Processing",
        description: "Advanced machine learning models for predictive analytics"
      }
    ]
  },
  {
    category: "Visualization & Reporting",
    tools: [
      {
        icon: BarChart,
        name: "Interactive Dashboards",
        description: "Real-time data visualization and custom reporting solutions"
      },
      {
        icon: LineChart,
        name: "Trend Analysis",
        description: "Advanced trend detection and forecasting capabilities"
      }
    ]
  },
  {
    category: "Advanced Analytics",
    tools: [
      {
        icon: PieChart,
        name: "Segmentation",
        description: "Customer segmentation and behavior analysis"
      },
      {
        icon: TrendingUp,
        name: "Predictive Models",
        description: "AI-powered predictive analytics and forecasting"
      }
    ]
  }
];

export default function AnalyticsStack() {
  return (
    <div className="space-y-12">
      {analyticsTools.map((category, index) => (
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