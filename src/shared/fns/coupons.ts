import dayjs from '../dayjs';
import { CouponResponse, Coupon, CouponApplyResult, CouponType } from "../types";
import { doesDateRangeContainDateRange, getDatesBetweenTwoDates } from './date-utils';
import { getPercentOffValue } from './utils';

export const formatSingleCouponToDayJs = (item: CouponResponse): Coupon => ({ ...item, dateRange: item.dateRange && item.dateRange.length ? [dayjs(item.dateRange[0]), dayjs(item.dateRange[1])] : [] })

export const formatCouponArrayToDayJs = (data: CouponResponse[]): Coupon[] => data.map(formatSingleCouponToDayJs);

export const formatSingleCouponToString = (item: Coupon): CouponResponse => ({ ...item, dateRange: item.dateRange && item.dateRange.length ? [item.dateRange[0].format('MM/DD/YYYY'), item.dateRange[1].format('MM/DD/YYYY')] : [] })

export const formatCouponArrayToString = (data: Coupon[]): CouponResponse[] => data.map(formatSingleCouponToString);

export const applyCouponCode = (type: string, total: number, value: number, code: string): CouponApplyResult => {
		switch(type) {
			case 'percentOff': {
				return {
					total: getPercentOffValue(total, value),
					code,
                    value,
					type
				}
			}
			case 'dollarOff': {
				return {
					total: total - value,
					code,
                    value,
					type
				}
			}
			case 'override': {
				return {
					total: value,
					code,
                    value,
					type
				}
			}
		}
}

export const checkCouponCode = (total: number, coupon: Coupon, dates: string[] | null): CouponApplyResult => {
    const { type, dateRange, value, code } = coupon;
    const dayJsSelectedDates = dates.map(item => dayjs(item));
    const dayJsCouponDates = getDatesBetweenTwoDates(coupon.dateRange);
	const isValidDate = !dateRange || !dateRange?.length || doesDateRangeContainDateRange(dayJsCouponDates, dayJsSelectedDates);
	if (isValidDate) {
		return applyCouponCode(type, total, value, code);
	} else {
		return 'invalidDate';
	}
};