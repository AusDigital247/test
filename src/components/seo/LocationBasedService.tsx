import { useParams } from 'react-router-dom';
import { LocalBusinessLocation } from '../../types/location';
import ServiceLayout from '../shared/ServiceLayout';
import LocalSEO from './LocalSEO';
import { getLocationByCity } from '../../utils/seo/locations';
import NotFound from '../../pages/NotFound';

interface LocationBasedServiceProps {
  service: {
    name: string;
    description: string;
    image: string;
    content: React.ReactNode;
  };
}

export default function LocationBasedService({ service }: LocationBasedServiceProps) {
  const { location } = useParams();
  const locationData = location ? getLocationByCity(location) : undefined;

  if (!locationData) {
    return <NotFound />;
  }

  const title = `${service.name} in ${locationData.city}`;
  const description = `${service.description} Serving businesses in ${locationData.city}, ${locationData.province}.`;

  return (
    <>
      <LocalSEO
        location={locationData}
        service={service}
        pageTitle={title}
        pageDescription={description}
      />
      <ServiceLayout
        title={title}
        description={description}
        heroImage={service.image}
      >
        {service.content}
      </ServiceLayout>
    </>
  );
}