import { useTranslations } from 'next-intl';
import React from 'react';

const Footer = () => {
	const t = useTranslations('Footer');

	return (
		<footer className='bg-white border-t px-4 sm:px-6 lg:px-8'>
			<p className='text-center text-sm text-black py-10'>
				&copy; 2024 Roksosh, {t('title')}
			</p>
		</footer>
	);
};

export default Footer;
