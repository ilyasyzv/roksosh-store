import React from "react";

import ProductList from "@/components/product-list";
import { getProducts } from "@/actions/get-products";
import Banner from "@/components/banner";
import Perks from "@/components/perks";

export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });

	return (
		<main>
			<Banner />
			<section className="py-8 px-4 sm:px-6 lg:px-8">
				<div className="container m-auto grid gap-y-10 pt-10">
					{/* <Billboard data={billboard} /> */}
					<ProductList title="" items={products} />
					<Perks />
				</div>
			</section>
		</main>
	);
};

export default HomePage;
