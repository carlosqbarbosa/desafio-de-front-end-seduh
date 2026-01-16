export function formatTemperature(temp: number): string {
  const rounded = Math.round(temp);
  return temp > 0 ? `${rounded}` : `−${Math.abs(rounded)}`;
}

export function formatTime(time: string): string {
  return time;
}

export function formatWindSpeed(speed: number): string {
  return `${speed.toFixed(1)} m/s`;
}