import { WeatherPeriod } from '@/types';

export function getPeriodTemp(
  periods: Record<'dawn' | 'morning' | 'afternoon' | 'night', WeatherPeriod>,
  period: 'dawn' | 'morning' | 'afternoon' | 'night'
) {
  return periods[period].temp;
}
