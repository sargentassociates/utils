import { YKUProducts, YKUProductNames, YKUPrices } from "./types";

export const YKU_initialProducts: YKUProducts = {
	kayakPackage: 0,
	paddleboardPackage: 0,
	kidsKayaks: 0,
	tenFootPaddleboards: 0,
	eightFootKayaks: 0,
	inflatablePaddleboards: 0,
	trailer: 0
};

export const YKU_getLegibleNames = (product: YKUProductNames) => {
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
		default:
			return 'Trailer'
	}
};

export const YKU_getPrices = (products: YKUProducts, isWeekend: boolean, prices: YKUPrices) => {
	let total = 0;
	for (const key in products) {
		const price = isWeekend
			? prices[key as YKUProductNames].weekend
			: prices[key as YKUProductNames].weekday;
		total += price * products[key];
	}

	return total;
};
