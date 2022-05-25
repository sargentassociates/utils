export type CouponType = 'override' | 'percentOff' | 'dollarOff';

export interface Coupon {
	key: string;
	code: string;
	type: CouponType;
	value: number;
	startDate: string;
	endDate: string;
}

export interface CouponValue {
	code: string;
	dateRange: [string, string];
	type: string;
	value: string;
}