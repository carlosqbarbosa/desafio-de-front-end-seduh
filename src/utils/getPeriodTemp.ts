import { ForecastHour } from '@/types/weather'

const PERIODS = {
  dawn: '03:00',
  morning: '09:00',
  afternoon: '15:00',
  night: '21:00',
}

export function getPeriodTemp(hours: ForecastHour[], period: keyof typeof PERIODS) {
  return hours.find(hour => hour.time.includes(PERIODS[period]))?.temp_c
}
