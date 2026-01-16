'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import WeatherCard from '@/components/WeatherCard/WeatherCard';
import { CITIES } from '@/constants/cities';
import { getWeatherByCity } from '@/app/api/weatherApi';
import type { WeatherData } from '@/types';
import { colors } from '@/theme/colors';

interface ErrorState {
  message: string;
  showRetry: boolean;
}

export default function CityPage() {
  const router = useRouter();
  const params = useParams();
  const cityName = params.name as string;

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);

  const loadWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      const normalizedName = cityName.replace(/-/g, ' ');
      
      const city = CITIES.find(
        (c) => c.name.toLowerCase() === normalizedName.toLowerCase()
      );

      if (!city) {
        setError({
          message: 'City not found',
          showRetry: false,
        });
        setTimeout(() => router.push('/'), 2000);
        return;
      }

      const data = await getWeatherByCity(city.lat, city.lon);

      setWeatherData(data);
    } catch (err) {
      console.error('Error loading weather:', err);
      setError({
        message: 'Failed to load weather data',
        showRetry: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
    
  }, [cityName]);

  const handleBack = () => {
    router.push('/');
  };

  const handleRetry = () => {
    loadWeather();
  };

  
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.black,
        }}
      >
        <CircularProgress sx={{ color: '#fff' }} size={60} />
      </Box>
    );
  }

  
  if (error) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.black,
          color: '#fff',
          padding: '32px',
          textAlign: 'center',
        }}
      >
        <ErrorOutline sx={{ fontSize: 80, marginBottom: 3, opacity: 0.7 }} />
        <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 300 }}>
          {error.message}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                borderColor: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Back to Home
          </Button>
          {error.showRetry && (
            <Button
              variant="contained"
              onClick={handleRetry}
              sx={{
                backgroundColor: colors.hotBlue,
                color: '#fff',
                '&:hover': {
                  backgroundColor: colors.hotBlue,
                  opacity: 0.9,
                },
              }}
            >
              Try Again
            </Button>
          )}
        </Box>
      </Box>
    );
  }

  
  if (!weatherData) {
    return null;
  }

 return <WeatherCard data={weatherData} onBack={handleBack} />;
}