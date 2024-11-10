"use client"

import React from 'react';

import { Billboard as BillboardType } from '@/types';
import useLocale from '@/hooks/use-locale';

const Billboard = ({ data }: { data: BillboardType }) => {
	const { getLocalizedValue } = useLocale();
	return (
		<article>
			<div
				style={{ backgroundImage: `url(${data.imageUrl})` }}
				className='rounded-xl overflow-hidden aspect-square sm:aspect-[5/2]
          lg:aspect-[10/3] 2xl:aspect-[12/3] bg-center bg-cover bg-no-repeat p-3'
			>
				<div className='w-full h-full grid place-items-center'>
					<h1
						className='font-bold text-3xl sm:text-4xl lg:text-5xl
              p-3 sm:p-4 lg:p-6 rounded-xl text-white text-shadow'
					>
						{getLocalizedValue(data, "label")}
					</h1>
				</div>
			</div>
		</article>
	);
};

export default Billboard;
