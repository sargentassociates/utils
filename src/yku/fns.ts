import { YKUProducts, YKUProductNames, YKUPrices, YKUPaymentInputFields, YKUReceipt, YKUDayReceipt } from "./types";
import { applyCouponCode, CouponWithTotal, getDatesBetweenTwoDates } from "../shared";
import { Dayjs } from "dayjs";

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

export const YKU_calculateSingleDayPrice = (products: YKUProducts, isWeekend: boolean, prices: YKUPrices) => {
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

export const YKU_calculateTotal = (products: YKUProducts, prices: YKUPrices, dates: [Dayjs, Dayjs], coupon: CouponWithTotal | null): YKUReceipt => {
	const days: YKUDayReceipt[] = [];
	// fr, sat, sun
	const weekendDates = [0,5,6];
	let discount = 0;

	if (dates?.length && dates[0] && dates[1]) {
		const allDates = getDatesBetweenTwoDates(dates);
		const mappedDates = allDates.map(date => {
			return {
				isWeekend: weekendDates.includes(date.weekday()),
				date: date.toISOString()
			}
		});
		mappedDates.forEach(item => {
			days.push({
				...item,
				products: YKU_calculateSingleDayPrice(products, item.isWeekend, prices),
			});
		})	
	}
	let total = days.map(item => {
		return item.products.reduce((prev, next) => {
			return prev + next.total;
		}, 0)
	}).reduce((prev, next) => prev + next, 0);

	const toReturn: YKUReceipt = {
		days,
		total: 0,
		originalTotal: 0,
		discount: 0,
		discountType: ''
	}
	if (coupon) {
		const result = applyCouponCode(coupon.type, total, coupon.value, coupon.code);

		if (typeof result !== 'string') {
			toReturn.total = result.total;
			toReturn.originalTotal = total;
			return toReturn;
		}
	} 

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
		originalTotal,
		discount,
		discountType: ''
	};
};