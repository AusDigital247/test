{`import { Link } from 'react-router-dom';
import { canadianLocations } from '../../utils/seo/locations';

interface LocalServiceLinksProps {
  service: string;
  className?: string;
}

export default function LocalServiceLinks({ service, className = '' }: LocalServiceLinksProps) {
  return (
    <div className={\`space-y-4 \${className}\`}>
      <h3 className="font-semibold text-gray-900">Local Services</h3>
      <div className="grid grid-cols-2 gap-2">
        {canadianLocations.map((location) => (
          <Link
            key={location.city}
            to={\`/services/\${service}/\${location.city.toLowerCase()}\`}
            className="text-[#3DD2F0] hover:underline"
          >
            {service} in {location.city}
          </Link>
        ))}
      </div>
    </div>
  );
}`}