interface ServiceFeatureCardProps {
  title: string;
  features: string[];
}

export default function ServiceFeatureCard({ title, features }: ServiceFeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}