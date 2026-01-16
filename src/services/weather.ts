import type { WeatherData, City } from '@/types';

interface WeatherApiResponse {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: Array<{
      hour: Array<{
        time: string;
        temp_c: number;
        condition: {
          icon: string;
        };
      }>;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
    }>;
  };
}

function getTempByHour(
  hours: WeatherApiResponse['forecast']['forecastday'][0]['hour'],
  targetHour: string
) {
  return hours.find(h => h.time.endsWith(`${targetHour}:00`));
}

export async function getWeatherByCity(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const url = `/api/weather?lat=${lat}&lon=${lon}`;

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Weather API error: ${res.status}`);
  }

  const data: WeatherApiResponse = await res.json();
  const hours = data.forecast.forecastday[0].hour;

  const dawn = getTempByHour(hours, '03');
  const morning = getTempByHour(hours, '09');
  const afternoon = getTempByHour(hours, '15');
  const night = getTempByHour(hours, '21');

  return {
    city: data.location.name,
    country: data.location.country,

    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    icon: `https:${data.current.condition.icon}`,

    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph,
    maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
    minTemp: data.forecast.forecastday[0].day.mintemp_c,

    periods: {
      dawn: {
        time: '03:00',
        temp: dawn?.temp_c ?? null,
        icon: dawn?.condition.icon
          ? `https:${dawn.condition.icon}`
          : null,
      },
      morning: {
        time: '09:00',
        temp: morning?.temp_c ?? null,
        icon: morning?.condition.icon
          ? `https:${morning.condition.icon}`
          : null,
      },
      afternoon: {
        time: '15:00',
        temp: afternoon?.temp_c ?? null,
        icon: afternoon?.condition.icon
          ? `https:${afternoon.condition.icon}`
          : null,
      },
      night: {
        time: '21:00',
        temp: night?.temp_c ?? null,
        icon: night?.condition.icon
          ? `https:${night.condition.icon}`
          : null,
      },
    },
  };
}

export const fetchWeatherData = async (
  city: City
): Promise<WeatherData> => {
  if (!city.lat || !city.lon) {
    throw new Error(`Invalid city data`);
  }

  return getWeatherByCity(city.lat, city.lon);
};
