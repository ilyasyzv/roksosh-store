'use client';

import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import { useTranslations } from 'next-intl';

const Summary = () => {
	const t = useTranslations('Cart');
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);
	const searchParams = useSearchParams();

	// Calculate total price by taking item count into account
	const totalPrice = items.reduce((totalSum, item) => {
		return totalSum + Number(item.price) * item.count;
	}, 0);

	const onCheckOut = async () => {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
			{
				products: items.map((item) => ({
					id: item.id,
					count: item.count,
				})),
			},
		);
	
		window.location = response.data.url;
	};

	React.useEffect(() => {
		if (searchParams.get('success')) {
			toast.success(t("payment_ok"));
			removeAll(t);
		}

		if (searchParams.get('canceled')) {
			toast.error(t("payment_cancel"));
		}
	}, [searchParams, removeAll]);

	return (
		<section
			className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5
					lg:mt-0 lg:p-8'
		>
			<h2 className='text-lg font-medium text-gray-900'>{t('summary')}</h2>
			<div className='mt-6 space-y-4'>
				<div
					className='flex items-center justify-between border-t border-gray-200
					pt-4'
				>
					<div className='text-base font-medium text-gray-900'>{t('total')}</div>
					<Currency value={totalPrice} />
				</div>
			</div>
			<Button className='w-full mt-6' onClick={onCheckOut}>
				{t('checkout')}
			</Button>
		</section>
	);
};

export default Summary;
