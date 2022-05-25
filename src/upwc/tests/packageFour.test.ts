import { UPWC_getPrices } from "../fns"
import { packageFour, prices } from "./utils/consts"

describe('testing prices for upwc', () => {
    it('returns correct for 1 day and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-05-30', '2022-05-30']);

        expect(total).toBe(499);
    })
    it('returns correct for 2 days and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-06-01', '2022-06-02']);

        expect(total).toBe(898);
    })
    it('returns correct for 3 day and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-06-01', '2022-06-03']);

        expect(total).toBe(1297);
    })
    it('returns correct for 4 day and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-06-01', '2022-06-04']);

        expect(total).toBe(1500);
    })
    it('returns correct for 5 day and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-06-01', '2022-06-05']);

        expect(total).toBe(1850);
    })
    it('returns correct for 6 day and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-06-01', '2022-06-06']);

        expect(total).toBe(2050);
    })
    it('returns correct for 7 day and package 4', () => {
        const { total } = UPWC_getPrices(packageFour, prices, ['2022-06-01', '2022-06-07']);

        expect(total).toBe(2375);
    })
})