'use client';

import { Cloud, CloudRain, CloudSnow, Sun, Moon } from '@mui/icons-material';

interface WeatherIconProps {
  condition: string;
  size?: number;
  color?: string;
}

export default function WeatherIcon({ 
  condition, 
  size = 80, 
  color = 'inherit' 
}: WeatherIconProps) {
  const iconProps = { sx: { fontSize: size, color } };

  switch (condition.toLowerCase()) {
    case 'snow':
      return <CloudSnow {...iconProps} />;
    case 'rain':
      return <CloudRain {...iconProps} />;
    case 'cloudy':
    case 'clouds':
      return <Cloud {...iconProps} />;
    case 'clear':
      return <Sun {...iconProps} />;
    case 'night':
      return <Moon {...iconProps} />;
    default:
      return <Sun {...iconProps} />;
  }
}