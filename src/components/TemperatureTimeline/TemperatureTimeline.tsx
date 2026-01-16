import { WeatherData } from '@/types';
import { getPeriodTemp } from '@/utils/getPeriodTemp';

export default function TemperatureTimeline({
  periods,
}: {
  periods: WeatherData['periods'];
}) {
  return (
    <div>
      <p>Dawn: {getPeriodTemp(periods, 'dawn')}°C</p>
      <p>Morning: {getPeriodTemp(periods, 'morning')}°C</p>
      <p>Afternoon: {getPeriodTemp(periods, 'afternoon')}°C</p>
      <p>Night: {getPeriodTemp(periods, 'night')}°C</p>
    </div>
  );
}
