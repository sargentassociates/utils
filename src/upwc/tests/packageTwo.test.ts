import dayjs from "dayjs"
import { UPWC_getPrices } from "../fns"
import { packageTwo, prices } from "./utils/consts"

describe('testing prices for upwc', () => {
    it('returns correct for 1 day and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-05-30'), dayjs('2022-05-30')]);

        expect(total).toBe(434);
    })
    it('returns correct for 2 days and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-06-01'), dayjs('2022-06-02')]);

        expect(total).toBe(833);
    })
    it('returns correct for 3 day and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-06-01'), dayjs('2022-06-03')]);

        expect(total).toBe(1232);
    })
    it('returns correct for 4 day and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-06-01'), dayjs('2022-06-04')]);

        expect(total).toBe(1435);
    })
    it('returns correct for 5 day and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-06-01'), dayjs('2022-06-05')]);

        expect(total).toBe(1785);
    })
    it('returns correct for 6 day and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-06-01'), dayjs('2022-06-06')]);

        expect(total).toBe(1985);
    })
    it('returns correct for 7 day and package 2', () => {
        const { total } = UPWC_getPrices(packageTwo, prices, [dayjs('2022-06-01'), dayjs('2022-06-07')]);

        expect(total).toBe(2310);
    })
})