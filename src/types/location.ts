export interface LocalBusinessLocation {
  city: string;
  province: string;
  latitude?: string;
  longitude?: string;
}

export interface ServiceLocation {
  name: string;
  description: string;
  location: LocalBusinessLocation;
  image?: string;
}