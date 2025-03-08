interface SEOMetricProps {
  metric: string;
  value: string;
  trend?: 'up' | 'down';
}

export default function SEOMetric({ metric, value, trend }: SEOMetricProps) {
  const trendColor = trend === 'up' ? 'text-emerald-500' : 'text-rose-500';
  const arrow = trend === 'up' ? '↑' : '↓';

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="text-gray-600 text-sm">{metric}</div>
      <div className="text-2xl font-bold text-gray-900">
        {value}
        {trend && <span className={`ml-1 text-lg ${trendColor}`}>{arrow}</span>}
      </div>
    </div>
  );
}