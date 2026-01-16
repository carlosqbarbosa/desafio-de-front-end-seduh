
import { NextResponse } from 'next/server';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request: Request) {
  console.log('WEATHER_API_KEY:', process.env.WEATHER_API_KEY);

  const { searchParams } = new URL(request.url);

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    );
  }

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=1&aqi=no&alerts=no`;

  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json(
      { error },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
