import { UPWC_getPrices } from "../fns"
import { packageOne, prices } from "./utils/consts"

describe('testing prices for upwc', () => {
    it('returns correct for 1 day and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-05-30', '2022-05-30']);

        expect(total).toBe(399);
    })
    it('returns correct for 2 days and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-06-01', '2022-06-02']);

        expect(total).toBe(798);
    })
    it('returns correct for 3 day and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-06-01', '2022-06-03']);

        expect(total).toBe(1197);
    })
    it('returns correct for 4 day and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-06-01', '2022-06-04']);

        expect(total).toBe(1400);
    })
    it('returns correct for 5 day and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-06-01', '2022-06-05']);

        expect(total).toBe(1750);
    })
    it('returns correct for 6 day and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-06-01', '2022-06-06']);

        expect(total).toBe(1950);
    })
    it('returns correct for 7 day and package 1', () => {
        const { total } = UPWC_getPrices(packageOne, prices, ['2022-06-01', '2022-06-07']);

        expect(total).toBe(2275);
    })
})