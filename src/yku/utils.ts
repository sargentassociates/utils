import { YKUProducts, YKUProductNames, YKUPrices, YKUPaymentInputFields, YKUReceipt, YKUDayReceipt } from "./types";
import { Interval, DateTime } from 'luxon';

export const YKU_initialProducts: YKUProducts = {
	kayakPackage: 0,
	paddleboardPackage: 0,
	kidsKayaks: 0,
	tenFootPaddleboards: 0,
	eightFootKayaks: 0,
	inflatablePaddleboards: 0,
	trailer: 0
};

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
	
	let includedProducts: YKUProductNames[] = [];
	for (const key in products) {
		let total = 0;
		const amount = products[key];
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

function* getDates(interval: Interval) {
	let cursor = interval.start.startOf('day');
	while(cursor <= interval.end) {
		yield cursor;
		cursor = cursor.plus({ days: 1 })
	}
}

export const YKU_getDaysOfWeek = (products: YKUProducts, prices: YKUPrices, dates: [string, string]): YKUReceipt => {
	const days: YKUDayReceipt[] = [];
	// fr, sat, sun
	const weekendDates = [5,6,7];
	const start = DateTime.fromISO(dates[0]);
	const end = DateTime.fromISO(dates[1]);
	const interval = Interval.fromDateTimes(start, end);
	if (dates[0] && dates[1] && interval) {
		const dates = Array.from(getDates(interval));
		const mappedDates = dates.map(date => {
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
	const total = days.map(item => {
		return item.products.reduce((prev, next) => {
			return prev + next.total;
		}, 0)
	}).reduce((prev, next) => prev + next, 0);

	return {
		days,
		total
	};
};


