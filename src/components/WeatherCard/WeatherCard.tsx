'use client';

import { WeatherData } from '@/types';

interface Props {
  data: WeatherData;
}

function getTempColor(temp: number | null) {
  if (temp === null) return '#CACACA';
  return temp < 18 ? '#CACACA' : '#2CAEFF';
}

export default function WeatherCard({ data }: Props) {
  if (!data) return null;

  const periods = [
    { label: 'Dawn', ...data.periods.dawn },
    { label: 'Morning', ...data.periods.morning },
    { label: 'Afternoon', ...data.periods.afternoon },
    { label: 'Night', ...data.periods.night },
  ];

  return (
    <div className="weather-card">
      <h2>
        {data.city}, {data.country}
      </h2>

      <div className="periods">
        {periods.map(period => (
          <div key={period.label} className="period">
            <span>{period.label}</span>

            {period.icon && (
              <img src={period.icon} alt={period.label} />
            )}

            <strong
              style={{ color: getTempColor(period.temp) }}
            >
              {period.temp !== null
                ? `${period.temp}°`
                : '--'}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
