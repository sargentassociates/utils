import dayjs, { Dayjs } from "dayjs";

export const toShortDate = (date: Dayjs) => {
    const isValid = date.get('month') && date.get('date') && date.get('year');
    return isValid ? `${date.get('month') + 1}/${date.get('month')}/${date.get('year')}` : '';
}
/* 
 * Returns all days between a given time period.
 */
export function getDatesBetweenTwoDates(dateRange: [string, string] | [Dayjs, Dayjs] | [] | null): Dayjs[] {
    if (dateRange && dateRange.length) {
        const dateArray = [];
        let currentDate = dayjs(dateRange[0]);
        const stopDate = dayjs(dateRange[1]);
        while (currentDate <= stopDate) {
            dateArray.push(currentDate);
            currentDate = dayjs(currentDate).add(1, 'day');
        }
        return dateArray;
    } else {
        return [];
    }
}

export const doesDateRangeContainDateRange = (firstDateRange: Dayjs[], secondDateRange: Dayjs[]) => {
    let couponOverlapsDates = false;
    firstDateRange.forEach(firstDate => {
        secondDateRange.forEach(secondDate => {
            if (firstDate.startOf('day').valueOf() - secondDate.startOf('day').valueOf() === 0) {
                couponOverlapsDates = true;
            }
        })
    })

    return couponOverlapsDates;
}

