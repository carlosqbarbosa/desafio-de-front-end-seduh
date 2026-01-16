import { render, screen } from '@testing-library/react'
import WeatherCard from './WeatherCard'
import { WeatherData } from '@/types'

const mockWeather: WeatherData = {
  city: 'Madrid',
  country: 'ES',
  temperature: 13,
  condition: 'Clear',
  icon: '',
  humidity: 45,
  windSpeed: 2,
  maxTemp: 15,
  minTemp: 6,
  periods: {
    dawn: { time: '03:00', temp: 6, icon: null },
    morning: { time: '09:00', temp: 11, icon: null },
    afternoon: { time: '15:00', temp: 12, icon: null },
    night: { time: '21:00', temp: 8, icon: null },
  },
}

describe('WeatherCard', () => {
  it('renders city name and temperature', () => {
    render(<WeatherCard data={mockWeather} onBack={jest.fn()} />)

    expect(screen.getByText('Madrid')).toBeInTheDocument()
    expect(screen.getByText('13')).toBeInTheDocument()
    expect(screen.getByText('Clear')).toBeInTheDocument()
  })
})
