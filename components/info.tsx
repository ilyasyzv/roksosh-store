'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';

import { Product } from '@/types';

import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import useLocale from '@/hooks/use-locale';
import { useTranslations } from 'next-intl';

const Info = ({ data }: { data: Product }) => {
	const t = useTranslations('Cart');
	const t2 = useTranslations('Products');
	const { getLocalizedValue } = useLocale();
	const cart = useCart();
	const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = () => {
		cart.addItem(data, t);
	};

	return (
		<article>
			<h1 className='text-3xl font-bold text-gray-900'>{getLocalizedValue(data, "name")}</h1>
			<div className='mt-3 flex items-end justify-between'>
				<p className='text-2xl text-gray-900'>
					<Currency value={data.price} />
				</p>
			</div>
			<hr className='my-4' />
			<div className='mb-4'>
				<div className='flex flex-col gap-y-3 mb-10'>
					<div className='flex items-center gap-x-4'>
						<h2 className='font-semibold text-black'>{t2('size')}</h2>
						<p>{getLocalizedValue(data.size, "name")}</p>
					</div>
					<div className='flex items-center gap-x-4'>
						<h2 className='font-semibold text-black'>{t2('color')}</h2>
						<div
							className='h-6 w-6 rounded-full border border-gray-600'
							style={{ backgroundColor: data.color.value }}
						/>
					</div>
				</div>
				<div className='text-xl'>
					{getLocalizedValue(data, "description").split('\n').map((paragraph: any, index: any) => (
						<React.Fragment key={index}>
							<p>{paragraph}</p>
							<br />
						</React.Fragment>
					))}
				</div>
			</div>
			<Button className='flex items-center gap-x-2' onClick={onAddToCart}>
				{t('add')}
				<ShoppingCart />
			</Button>
		</article>
	);
};

export default Info;
