export type Billboard = {
	id: string;
	label: string;
	labelRu: string;
	labelKg: string;
	imageUrl: string;
};

export type Category = {
	id: string;
	name: string;
	nameRu: string;
	nameKg: string;
	billboard: Billboard;
};

export type Product = {
	id: string;
	name: string;
	nameRu: string;
	nameKg: string;
	price: string;
	category: Category;
	color: Color;
	size: Size;
	images: Image[];
	description: string;
	descriptionRu: string;
	descriptionKg: string;
	isFeatured: boolean;
};

export type Image = {
	id: string;
	url: string;
};

export type Color = {
	id: string;
	name: string;
	nameRu: string;
	nameKg: string;
	value: string;
};

export type Size = {
	id: string;
	name: string;
	nameRu: string;
	nameKg: string;
	value: string;
};
