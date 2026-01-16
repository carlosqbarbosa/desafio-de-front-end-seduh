export interface WeatherCurrent {
  temperature: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  sunrise: string;
  sunset: string;
}

export interface ForecastItem {
  period: string;
  temp: number;
  icon: string;
}

export interface WeatherData {
  city: string;
  country: string;
  current: WeatherCurrent;
  forecast: ForecastItem[];
}

export type ThemeType = 'cold' | 'hot' | 'moderate' | 'dark';