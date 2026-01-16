export interface City {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface WeatherPeriod {
  time: string;
  temp: number | null;
  icon: string | null;
}

export interface WeatherData {
  city: string;
  country: string;

  temperature: number;
  condition: string;
  icon: string;

  humidity: number;
  windSpeed: number;
  maxTemp: number;
  minTemp: number;

  periods: {
    dawn: WeatherPeriod;
    morning: WeatherPeriod;
    afternoon: WeatherPeriod;
    night: WeatherPeriod;
  };
}
