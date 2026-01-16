import { useState, useEffect } from 'react';
import { City, WeatherData } from '@/types';
import { getWeatherByCity } from '@/app/api/weatherApi';

export function useWeather(city: City | null) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!city) return;

    const loadWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const weatherData = await getWeatherByCity(
          city.lat,
          city.lon
        );

        setData(weatherData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [city]);

  return { data, loading, error };
}
