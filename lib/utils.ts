import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const currencyFormatter = new Intl.NumberFormat('kg-KG', {
	style: 'currency',
	currency: 'KGS',
});

export function constructMetadata({
	title = 'Roksosh - the store for furniture',
	description = 'Your store for high-quality furniture.',
	image = '/thumbnail.png',
	icons = '/favicon.ico',
  }: {
	title?: string
	description?: string
	image?: string
	icons?: string
	noIndex?: boolean
  } = {}): Metadata {
	return {
	  title,
	  description,
	  icons,
	}
}