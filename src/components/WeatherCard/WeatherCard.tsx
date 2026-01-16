'use client';

import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Image from 'next/image';
import type { WeatherData } from '@/types';
import { colors } from '@/theme/colors';

interface WeatherCardProps {
  data: WeatherData;
  onBack: () => void;
}

const periodIconMap: Record<string, string> = {
  dawn: '/assets/BsCloudSun.png',
  morning: '/assets/BsSun.png',
  afternoon: '/assets/BsCloudSun.png',
  night: '/assets/BsMoon.png',
};

export default function WeatherCard({ data, onBack }: WeatherCardProps) {
  const { periods } = data;

  const isCold = data.temperature <= 0;

  const backgroundColor = isCold
    ? colors.coldGray
    : colors.hotBlue;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: backgroundColor,
        color: colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        px: 2,
        transition: 'background-color 0.4s ease',
      }}
    >

      <IconButton
        onClick={onBack}
        sx={{
          position: 'absolute',
          top: 24,
          left: 24,
          color: colors.white,
        }}
      >
        <ArrowBack />
      </IconButton>

      <Box
        sx={{
          textAlign: 'center',
          maxWidth: 420,
          width: '100%',
        }}
      >
        <Typography sx={{ fontSize: 36, fontWeight: 300 }}>
          {data.city}
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 300,
            opacity: 0.8,
            mt: 0.5,
          }}
        >
          {data.condition}
        </Typography>

        <Box sx={{ mt: 6 }}>
          <Typography
            sx={{
              fontSize: 120,
              fontWeight: 200,
              lineHeight: 1,
            }}
          >
            {Math.round(data.temperature)}
            <Typography
              component="span"
              sx={{
                fontSize: 28,
                fontWeight: 300,
                opacity: 0.8,
                ml: 1,
                verticalAlign: 'top',
              }}
            >
              °C
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ my: 6 }}>
          <Image
            src="/assets/BsSun.png"
            alt="weather"
            width={140}
            height={140}
            style={{
              filter: 'brightness(0) invert(1)',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 4,
          }}
        >
          {(Object.keys(periods) as Array<keyof typeof periods>).map(
            (key) => {
              const period = periods[key];

              return (
                <Box
                  key={key}
                  sx={{
                    textAlign: 'center',
                    minWidth: 64,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      opacity: 0.8,
                      mb: 1,
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>

                  <Image
                    src={periodIconMap[key]}
                    alt={key}
                    width={28}
                    height={28}
                    style={{
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.9,
                    }}
                  />

                  <Typography sx={{ fontSize: 14, mt: 1 }}>
                    {period.temp !== null
                      ? `${Math.round(period.temp)}°C`
                      : '--'}
                  </Typography>
                </Box>
              );
            }
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 6,
            opacity: 0.85,
          }}
        >
          {[
            { label: 'Wind speed', value: `${data.windSpeed} m/s` },
            { label: 'Humidity', value: `${data.humidity}%` },
            { label: 'Min', value: `${data.minTemp}°` },
            { label: 'Max', value: `${data.maxTemp}°` },
          ].map((item) => (
            <Box key={item.label}>
              <Typography sx={{ fontSize: 12 }}>
                {item.label}
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
