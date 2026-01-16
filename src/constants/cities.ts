export interface City {
  name: string;
  country: string;
  countryCode: string;
  lat: number;
  lon: number;
}

export const CITIES: City[] = [
  {
    name: 'Dallol',
    country: 'Ethiopia',
    countryCode: 'ET',
    lat: 14.2,
    lon: 40.3
  },
  {
    name: 'Fairbanks',
    country: 'United States',
    countryCode: 'US',
    lat: 64.84,
    lon: -147.72
  },
  {
    name: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    lat: 51.52,
    lon: -0.11
  },
  {
    name: 'Recife',
    country: 'Brazil',
    countryCode: 'BR',
    lat: -8.05,
    lon: -34.9
  },
  {
    name: 'Vancouver',
    country: 'Canada',
    countryCode: 'CA',
    lat: 49.25,
    lon: -123.13
  },
  {
    name: 'Yakutsk',
    country: 'Russia',
    countryCode: 'RU',
    lat: 62.03,
    lon: 129.73
  }
];