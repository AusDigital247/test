import { Search, TrendingUp, Users, Clock } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average Traffic Growth",
    description: "Increase in organic traffic within 6 months"
  },
  {
    icon: Search,
    value: "Top 3",
    label: "Search Rankings",
    description: "Positions for target keywords"
  },
  {
    icon: Users,
    value: "45%",
    label: "Conversion Rate",
    description: "Improvement in conversion rates"
  },
  {
    icon: Clock,
    value: "60%",
    label: "Load Time",
    description: "Reduction in page load times"
  }
];

export default function SEOMetrics() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Performance Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#3DD2F0]/20"
            >
              <metric.icon className="w-8 h-8 text-[#3DD2F0] mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="font-medium text-[#3DD2F0] mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}