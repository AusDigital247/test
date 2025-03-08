interface ServiceMetricProps {
  icon: string;
  value: string;
  description: string;
}

export default function ServiceMetric({ icon, value, description }: ServiceMetricProps) {
  return (
    <li className="flex items-start">
      <span className="text-[#3DD2F0] font-bold mr-2">{icon}</span>
      <span>{value} {description}</span>
    </li>
  );
}