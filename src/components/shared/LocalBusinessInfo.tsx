{`import { MapPin } from 'lucide-react';
import { LocalBusinessLocation } from '../../types/location';

interface LocalBusinessInfoProps {
  location: LocalBusinessLocation;
}

export default function LocalBusinessInfo({ location }: LocalBusinessInfoProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Location Information</h2>
      <div className="space-y-3">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-[#3DD2F0] mt-1 mr-2" />
          <div>
            <p className="font-medium">Service Area</p>
            <p className="text-gray-600">{location.city}, {location.province}</p>
          </div>
        </div>
      </div>
    </div>
  );
}`}