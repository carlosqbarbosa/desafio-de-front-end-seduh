import { ThemeType } from '@/types/weather';

export function getTheme(temp: number): ThemeType {
  if (temp <= 5) return 'cold';
  if (temp >= 25) return 'hot';
  return 'moderate';
}

export const themes = {
  cold: 'bg-[#CACACA]',
  hot: 'bg-[#2CAEFF]',
  moderate: 'bg-[#2CAEFF]',
  dark: 'bg-[#0F0F0F]'
};

export const cardThemes = {
  cold: 'bg-[#CACACA]',
  hot: 'bg-[#2CAEFF]',
  moderate: 'bg-[#2CAEFF]',
  dark: 'bg-[#0F0F0F]'
};

export const textThemes = {
  cold: 'text-gray-800',
  hot: 'text-white',
  moderate: 'text-white',
  dark: 'text-white'
};