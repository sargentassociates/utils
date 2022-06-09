import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

export type CouponType = 'override' | 'percentOff' | 'dollarOff' | ''; 

export interface Coupon {
	key: string;
	code: string;
	type: CouponType;
	value: number;
	dateRange: [Dayjs, Dayjs] | [] | null;
}
// needed because the payload won't send back moments
export interface CouponResponse extends Omit<Coupon, 'dateRange'> {
	dateRange: [string, string] | [] | null;
}

export interface CouponCheckPayload {
	total: number;
	code: string;
	dateRange: string[];
}
// defines what a successful response looks like
export interface SimplifiedCoupon {
	total: number;
	value: number;
	type: CouponType;
	code: string;
}

export type CouponWithTotal = SimplifiedCoupon | null;

export type CouponApplyResult = 'invalidType' | 'invalidDate' | CouponWithTotal;

export interface CouponState {
	status: 'warning' | 'error' | '',
	message: string;
	value: string;
}