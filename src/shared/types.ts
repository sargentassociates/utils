export type YesNo = 'yes' | 'no';

export type CouponType = 'override' | 'percentOff' | 'dollarOff';

export interface Coupon {
	key: string;
	code: string;
	type: CouponType;
	value: number;
	startDate: string;
	endDate: string;
}

export interface FEUser {
	username: string;
	name: string;
	email: string;
	admin: boolean;
}
export interface User extends FEUser {
	pswHash: string;
  }
  
  export interface LoginRequest {
	username: string;
	password: string;
  }
