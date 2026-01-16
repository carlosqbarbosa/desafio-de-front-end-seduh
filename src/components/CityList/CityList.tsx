'use client';

import { Box, Typography, Button } from '@mui/material';
import { Public as GlobeIcon } from '@mui/icons-material';
import { City } from '@/types';
import { CITIES } from '@/constants/cities';
import { colors } from '@/theme/colors';

interface CityListProps {
  onCitySelect: (city: City) => void;
}

export default function CityList({ onCitySelect }: CityListProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          maxWidth: 480,
        }}
      >
        <Typography
          sx={{
            color: colors.white,
            fontSize: { xs: 48, sm: 64 },
            fontWeight: 200,
            letterSpacing: '0.08em',
            mb: 1,
          }}
        >
          Weather
        </Typography>

        <Typography
          sx={{
            color: colors.textMuted,
            fontSize: 18,
            fontWeight: 300,
            mb: 6,
          }}
        >
          Select a city
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <GlobeIcon sx={{ fontSize: 140, color: colors.white }} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {CITIES.map((city) => (
            <Box
              key={city.name}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%' },
              }}
            >
              <Button
                fullWidth
                onClick={() => onCitySelect(city)}
                sx={{
                  color: colors.white,
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  py: 1.2,
                  textTransform: 'none',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderColor: colors.white,
                  },
                }}
              >
                {city.name}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}