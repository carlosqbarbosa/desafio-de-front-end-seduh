'use client';

import { Box, Typography, Grid, Button } from '@mui/material';
import { Public as GlobeIcon } from '@mui/icons-material';
import { City } from '@/types/city';
import { CITIES } from '@/constants/cities';

interface CityListProps {
  onCitySelect: (city: City) => void;
}

export default function CityList({ onCitySelect }: CityListProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0F0F0F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            color: '#fff',
            fontSize: 64,
            fontWeight: 200,
            letterSpacing: '0.08em',
            mb: 1,
          }}
        >
          Weather
        </Typography>

        <Typography
          sx={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 18,
            fontWeight: 300,
            mb: 6,
          }}
        >
          Select a city
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <GlobeIcon sx={{ fontSize: 140, color: '#fff' }} />
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {CITIES.map((city) => (
            <Grid item xs={4} key={city.name} textAlign="center">
              <Button
                onClick={() => onCitySelect(city)}
                sx={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 300,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: 0.6,
                  },
                }}
              >
                {city.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
