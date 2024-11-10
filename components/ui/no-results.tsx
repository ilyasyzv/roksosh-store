import { useTranslations } from 'next-intl';
import React from 'react';

const NoResults = () => {
	const t = useTranslations('Products');

	return (
		<div className='flex items-center justify-center w-full text-neutral-500'>
			{ t('no_results') }
		</div>
	);
};

export default NoResults;
