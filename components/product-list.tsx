import React from 'react';

import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import { Product } from '@/types';
import { useTranslations } from 'next-intl';

const ProductList = ({ title, items }: { title: string; items: Product[] }) => {
	const t = useTranslations('ProductsList');

	return (
		<section className='space-y-4'>
			<h2 className='text-3xl font-bold mb-10'>{t('title')}</h2>
			{items.length === 0 ? (
				<NoResults />
			) : (
				<ul
					className='grid grid-cols-1 justify-items-center sm:grid-cols-2
						md:flex gap-4 sm:justify-items-start'
				>
					{items.map((item, index) => (
						<li
							key={item.id}
							className='max-w-xs basis-56 flex-shrink flex-grow'
						>
							<ProductCard data={item} appearDelay={index} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default ProductList;
