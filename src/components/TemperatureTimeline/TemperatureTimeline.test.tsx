import { render, screen } from '@testing-library/react'
import TemperatureTimeline from './TemperatureTimeline'
import { WeatherPeriod } from '@/types'

const periods: Record<string, WeatherPeriod> = {
  dawn: { time: '03:00', temp: 6, icon: null },
  morning: { time: '09:00', temp: 11, icon: null },
  afternoon: { time: '15:00', temp: 12, icon: null },
  night: { time: '21:00', temp: 8, icon: null },
}

describe('TemperatureTimeline', () => {
  it('renders all periods temperatures', () => {
    render(<TemperatureTimeline periods={periods as any} />)

    expect(screen.getByText(/Dawn/i)).toBeInTheDocument()
    expect(screen.getByText(/Morning/i)).toBeInTheDocument()
    expect(screen.getByText(/Afternoon/i)).toBeInTheDocument()
    expect(screen.getByText(/Night/i)).toBeInTheDocument()
  })
})
