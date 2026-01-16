import { WeatherData } from '@/types'
import WeatherCard from '../WeatherCard/WeatherCard'
import TemperatureTimeline from '../TemperatureTimeline/TemperatureTimeline'

interface WeatherDetailsProps {
  weather: WeatherData
  onBack: () => void
}

export default function WeatherDetails({ weather, onBack }: WeatherDetailsProps) {
  return (
    <>
      <WeatherCard data={weather} onBack={onBack} />
      <TemperatureTimeline periods={weather.periods} />
    </>
  )
}
