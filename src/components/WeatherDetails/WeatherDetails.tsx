import { WeatherResponse } from '@/types/weather'
import WeatherCard from '../WeatherCard/WeatherCard'
import TemperatureTimeline from '../TemperatureTimeline/TemperatureTimeline'

export default function WeatherDetails({ weather }: { weather: WeatherResponse }) {
  return (
    <>
      <WeatherCard weather={weather} />
      <TemperatureTimeline forecast={weather.forecast.forecastday[0]} />
    </>
  )
}
