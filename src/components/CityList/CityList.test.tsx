import { render, screen, fireEvent } from '@testing-library/react'
import CityList from './CityList'
import { CITIES } from '@/constants/cities'

describe('CityList', () => {
  it('renders all city names', () => {
    render(<CityList onCitySelect={jest.fn()} />)

    CITIES.forEach(city => {
      expect(screen.getByText(city.name)).toBeInTheDocument()
    })
  })

  it('calls onCitySelect when a city is clicked', () => {
    const onCitySelect = jest.fn()

    render(<CityList onCitySelect={onCitySelect} />)

    fireEvent.click(screen.getByText(CITIES[0].name))

    expect(onCitySelect).toHaveBeenCalledTimes(1)
    expect(onCitySelect).toHaveBeenCalledWith(CITIES[0])
  })
})
