import { Database, Cloud, Shield, Cog, Brain, BarChart } from 'lucide-react';

const azureServices = [
  {
    category: "Data Storage & Processing",
    services: [
      {
        icon: Database,
        name: "Azure Synapse Analytics",
        description: "Enterprise-scale analytics service that brings together data integration, warehousing, and big data analytics"
      },
      {
        icon: Cloud,
        name: "Azure Data Lake Storage",
        description: "Massively scalable and secure data lake solution for high-performance analytics workloads"
      }
    ]
  },
  {
    category: "Data Integration & Governance",
    services: [
      {
        icon: Shield,
        name: "Azure Purview",
        description: "Unified data governance solution that helps manage and govern on-premises, multi-cloud, and SaaS data"
      },
      {
        icon: Cog,
        name: "Azure Data Factory",
        description: "Fully managed, serverless data integration service for scalable data transformation and movement"
      }
    ]
  },
  {
    category: "Analytics & AI",
    services: [
      {
        icon: Brain,
        name: "Azure Databricks",
        description: "Unified analytics platform for large-scale data engineering and collaborative data science"
      },
      {
        icon: BarChart,
        name: "Power BI",
        description: "Business analytics service for interactive visualizations and business intelligence"
      }
    ]
  }
];

export default function AzureStack() {
  return (
    <div className="space-y-12">
      {azureServices.map((category, index) => (
        <div key={index} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {category.services.map((service, serviceIndex) => (
              <div 
                key={serviceIndex}
                className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all bg-[#0B0F17]/50"
              >
                <service.icon className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}