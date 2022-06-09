import { YKUProductNames, YKUProducts, YKUReceipt } from "./types";

export const YKU_initialProducts: YKUProducts = {
	kayakPackage: 0,
	paddleboardPackage: 0,
	kidsKayaks: 0,
	tenFootPaddleboards: 0,
	eightFootKayaks: 0,
	inflatablePaddleboards: 0,
	trailer: 0
};

export const YKU_individualRates: YKUProductNames[] = [
	'eightFootKayaks',
	'kidsKayaks',
	'tenFootPaddleboards',
	'inflatablePaddleboards',
];
export const YKU_packageRates: YKUProductNames[] = ['kayakPackage', 'paddleboardPackage'];

export const YKU_initialReceipt: YKUReceipt = {
	days: [],
	total: 0,
	originalTotal: 0,
	discount: 0,
	discountType: ''
};