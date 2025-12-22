export type WeatherLocation = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  asl?: number;
  tz?: string;
};

export const WEATHER_LOCATIONS: WeatherLocation[] = [
  {
    id: 'madrid',
    name: 'Madrid, ES',
    lat: 40.4168,
    lon: -3.7038,
    asl: 667,
    tz: 'Europe/Madrid'
  },
  {
    id: 'berlin',
    name: 'Berlin, DE',
    lat: 52.52,
    lon: 13.405,
    asl: 34,
    tz: 'Europe/Berlin'
  }
];
