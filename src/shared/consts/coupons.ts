import { Coupon, CouponState } from "../types";

export const emptyCouponValues: Coupon = {
	key: '',
	code: '',
	type: '',
	value: 0,
	dateRange: [],
};

export const noCouponFound: CouponState = { status: 'error', message: 'Coupon not found.', value: '' };

export const initialCouponState: CouponState = { status: '', message: '', value: '' }