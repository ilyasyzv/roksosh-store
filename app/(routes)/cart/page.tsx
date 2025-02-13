'use client';

import React from 'react';

import useCart from '@/hooks/use-cart';
import CartItem from './components/cart-item';
import Summary from './components/summary';
import { useTranslations } from 'next-intl';

const CartPage = () => {
	const t = useTranslations('Cart');
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<main className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold text-black'>{t('title')}</h1>
				<div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
					<div className='lg:col-span-7'>
						{cart.items.length === 0 && <p>{t('no_items')}</p>}

						<ul>
							{cart.items.map((item, index) => (
								<li key={item.id}>
									<CartItem data={item} count={item.count} appearDelay={index} />
								</li>
							))}
						</ul>
					</div>

					{cart.items.length !== 0 && <Summary />}
				</div>
			</div>
		</main>
	);
};

export default CartPage;
