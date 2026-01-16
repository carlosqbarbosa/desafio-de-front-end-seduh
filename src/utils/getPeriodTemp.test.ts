import { getPeriodTemp } from './getPeriodTemp'

describe('getPeriodTemp', () => {
  const periods = {
    dawn: { time: '03:00', temp: 6, icon: null },
    morning: { time: '09:00', temp: 11, icon: null },
    afternoon: { time: '15:00', temp: 12, icon: null },
    night: { time: '21:00', temp: 8, icon: null },
  }

  it('returns dawn temperature', () => {
    expect(getPeriodTemp(periods, 'dawn')).toBe(6)
  })

  it('returns morning temperature', () => {
    expect(getPeriodTemp(periods, 'morning')).toBe(11)
  })

  it('returns afternoon temperature', () => {
    expect(getPeriodTemp(periods, 'afternoon')).toBe(12)
  })

  it('returns night temperature', () => {
    expect(getPeriodTemp(periods, 'night')).toBe(8)
  })
})
