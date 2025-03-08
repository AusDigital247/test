{`import { LocalBusinessLocation } from '../../types/location';

export const canadianLocations: LocalBusinessLocation[] = [
  {
    city: "Toronto",
    province: "Ontario",
    latitude: "43.6532",
    longitude: "-79.3832"
  },
  {
    city: "Kitchener",
    province: "Ontario",
    latitude: "43.4516",
    longitude: "-80.4925"
  },
  {
    city: "London",
    province: "Ontario",
    latitude: "42.9849",
    longitude: "-81.2453"
  }
];

export function getLocationByCity(city: string): LocalBusinessLocation | undefined {
  return canadianLocations.find(
    location => location.city.toLowerCase() === city.toLowerCase()
  );
}

export function validateLocation(city: string): boolean {
  return canadianLocations.some(
    location => location.city.toLowerCase() === city.toLowerCase()
  );
}`}