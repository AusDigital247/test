import { Check } from 'lucide-react';

interface FeatureListProps {
  features: string[];
  variant?: 'dark' | 'light';
}

export default function FeatureList({ features, variant = 'dark' }: FeatureListProps) {
  const isDark = variant === 'dark';
  
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className={`w-5 h-5 mt-1 mr-2 ${
            isDark ? 'text-[#3DD2F0]' : 'text-[#3DD2F0]'
          }`} />
          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}