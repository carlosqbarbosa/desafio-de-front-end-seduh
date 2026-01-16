 'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';
import CityList from '@/components/CityList';
import type { City } from '@/types';
import { colors } from '@/theme/colors';

function LoadingFallback() {
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
      <CircularProgress sx={{ color: '#fff' }} />
    </Box>
  );
}

export default function HomePage() {
  const router = useRouter();

  const handleCitySelect = (city: City) => {
    const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/city/${citySlug}`);
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <CityList onCitySelect={handleCitySelect} />
    </Suspense>
  );
}