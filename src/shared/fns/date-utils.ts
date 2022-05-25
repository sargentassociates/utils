import { DateTime, Interval } from "luxon";

export const toShortDate = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
/* 
 * Returns all days between a given time period.
 */
export function* getDates(interval: Interval) {
	let cursor = interval.start.startOf('day');
	while(cursor <= interval.end) {
		yield cursor;
		cursor = cursor.plus({ days: 1 })
	}
}
/* 
 * Returns days in a given time period, in a readable format.
 */
export const getArrayOfDates = (dates: [string, string]) => {
    if (dates[0] && dates[1]) {
        const start = DateTime.fromISO(dates[0]);
        const end = DateTime.fromISO(dates[1]);
        const interval = Interval.fromDateTimes(start, end);
        return Array.from(getDates(interval))
    } else {
        return [];
    }
}