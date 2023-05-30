import { CouponType } from "../shared";

export type YKUProductNames =
	| 'kayakPackage'
	| 'paddleboardPackage'
	| 'kidsKayaks'
	| 'tenFootPaddleboards'
	| 'eightFootKayaks'
	| 'inflatablePaddleboards'

export interface YKUProducts {
	kayakPackage: number;
	paddleboardPackage: number;
	kidsKayaks: number;
	tenFootPaddleboards: number;
	eightFootKayaks: number;
	inflatablePaddleboards: number;
	[key: string]: number;
}
export interface YKUPriceTypes {
	weekday: number;
	weekend: number;
	max: number;
	[key: string]: number;
}
export interface YKUPrices {
	kayakPackage: YKUPriceTypes;
	paddleboardPackage: YKUPriceTypes;
	eightFootKayaks: YKUPriceTypes;
	kidsKayaks: YKUPriceTypes;
	tenFootPaddleboards: YKUPriceTypes;
	inflatablePaddleboards: YKUPriceTypes;
	processingFee: number;
	[key: string]: YKUPriceTypes | number;
}

export type YKUPaymentInputFields = YKUProductNames | 'days';

export interface YKUProduct {
	name: YKUProductNames;
	total: number;
}
export interface YKUDayReceipt {
	date: string;
	isWeekend: boolean;
	products: YKUProduct[];
}
export interface YKUReceipt {
	originalTotal: number;
	total: number;
	days: YKUDayReceipt[];
	discount: number;
	discountType: CouponType;
}
  