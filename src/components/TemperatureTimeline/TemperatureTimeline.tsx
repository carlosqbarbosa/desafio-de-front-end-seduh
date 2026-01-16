import { ForecastDay } from '@/types/weather'
import { getPeriodTemp } from '@/utils/getPeriodTemp'

export default function TemperatureTimeline({ forecast }: { forecast: ForecastDay }) {
  return (
    <div>
      <p>Dawn: {getPeriodTemp(forecast.hour, 'dawn')}°C</p>
      <p>Morning: {getPeriodTemp(forecast.hour, 'morning')}°C</p>
      <p>Afternoon: {getPeriodTemp(forecast.hour, 'afternoon')}°C</p>
      <p>Night: {getPeriodTemp(forecast.hour, 'night')}°C</p>
    </div>
  )
}
