import { YKUProducts, YKUProductNames, YKUPrices, YKUPaymentInputFields, YKUReceipt, YKUDayReceipt } from "./types";
import { getArrayOfDates } from "../shared";

export const YKU_getLegibleNames = (product: YKUPaymentInputFields) => {
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
		case 'days':
			return "Number of Days";
		default:
			return 'Trailer'
	}
};

export const YKU_getPrices = (products: YKUProducts, isWeekend: boolean, prices: YKUPrices) => {
	const priceObject = [];
	
	for (const key in products) {
		let total = 0;
		let name = '';
		if (key) {
			name = key;
		}
		const price = isWeekend
			? prices[key as YKUProductNames].weekend
			: prices[key as YKUProductNames].weekday;
		total += price * products[key];
		if (total) {
			priceObject.push({
				total,
				name
			})
		}
	}

	return priceObject;
};

export const YKU_getPricesBasedOnDates = (products: YKUProducts, prices: YKUPrices, dates: [string, string]): YKUReceipt => {
	const days: YKUDayReceipt[] = [];
	// fr, sat, sun
	const weekendDates = [5,6,7];
	let discount = 0;

	if (dates[0] && dates[1]) {
		const readableDates = getArrayOfDates(dates);
		const mappedDates = readableDates.map(date => {
			return {
				isWeekend: weekendDates.includes(date.weekday),
				date: date.toISODate()
			}
		});
		mappedDates.forEach(item => {
			days.push({
				...item,
				products: YKU_getPrices(products, item.isWeekend, prices),
			});
		})	
	}
	let total = days.map(item => {
		return item.products.reduce((prev, next) => {
			return prev + next.total;
		}, 0)
	}).reduce((prev, next) => prev + next, 0);
	const originalTotal = total;
	if (days.length === 2) {
		total *= .9;
		discount = .1;
	} else if (days.length > 2) {
		total *= .8;
		discount = .2;
	}

	return {
		days,
		total: Number(total.toFixed(2)),
		discount,
		diff: originalTotal - total
	};
};


