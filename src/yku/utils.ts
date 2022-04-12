import { Products, ProductNames, Prices } from "./types";

export const initialProducts: Products = {
	kayakPackage: 0,
	paddleboardPackage: 0,
	kidsKayaks: 0,
	tenFootPaddleboards: 0,
	eightFootKayaks: 0,
	inflatablePaddleboards: 0,
};

export const getLegibleNames = (product: ProductNames) => {
	switch (product) {
		case 'eightFootKayaks':
			return "8' Kayaks";
		case 'kayakPackage':
			return 'Kayak Package';
		case 'kidsKayaks':
			return 'Kids Kayaks';
		case 'paddleboardPackage':
			return 'Paddleboard Package';
		case 'inflatablePaddleboards':
			return 'Inflatable Paddleboards';
		case 'tenFootPaddleboards':
			return "10' Paddleboards";
	}
};

export const getPrices = (products: Products, isWeekend: boolean, prices: Prices) => {
	let total = 0;
	for (const key in products) {
		const price = isWeekend
			? prices[key as ProductNames].weekday
			: prices[key as ProductNames].weekend;
		total += price;
	}

	return total;
};
