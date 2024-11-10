import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { toast } from 'react-hot-toast';

import { Product } from '@/types';
import { useTranslations } from 'next-intl';

type CartItem = Product & { count: number };

type CartStore = {
	items: CartItem[];
	addItem: (item: Product, t: Function) => void;
	removeItem: (id: string, t: Function) => void;
	removeAll: (t: Function) => void;
};

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data: Product, t: Function) => {
				const currentItems = get().items;
				const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

				if (existingItemIndex !== -1) {
					// Increase count if item exists
					const updatedItems = [...currentItems];
					updatedItems[existingItemIndex].count += 1;
					set({ items: updatedItems });
					toast.success(t("item_added"));
				} else {
					// Add new item with count 1
					set({ items: [...currentItems, { ...data, count: 1 }] });
					toast.success(t("item_added"));
				}
			},
			removeItem: (id: string, t: Function) => {
				const currentItems = get().items;
				const existingItemIndex = currentItems.findIndex((item) => item.id === id);

				if (existingItemIndex !== -1) {
					const updatedItems = [...currentItems];
					const item = updatedItems[existingItemIndex];

					if (item.count > 1) {
						// Decrease count if more than one
						item.count -= 1;
						set({ items: updatedItems });
						toast.success(t("item_removed"));
					} else {
						// Remove item entirely if count is 1
						set({ items: currentItems.filter((item) => item.id !== id) });
						toast.success(t("item_removed"));
					}
				}
			},
			removeAll: (t: Function) => {
				set({ items: [] });
				toast.success(t("all_items_removed"));
			},
		}),
		{ name: 'cart-store', storage: createJSONStorage(() => localStorage) },
	),
);

export default useCart;
