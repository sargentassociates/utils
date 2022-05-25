import { YKU_getPricesBasedOnDates } from "../fns"
import { mixtureOne, prices } from "./utils"

describe('mixtureOne', () => {
    it('returns the correct price for 1 day (weekday)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-09', '2022-05-09'])
        expect(result.total).toEqual(29);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 1 day (weekend)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-08', '2022-05-08'])
        expect(result.total).toEqual(35);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 2 days (weekday)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-11', '2022-05-12'])
        expect(result.total).toEqual(52.2);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (mixed)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-08', '2022-05-09'])
        expect(result.total).toEqual(57.6);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (weekend)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-14', '2022-05-15'])
        expect(result.total).toEqual(63);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 3 days (mixed)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-07', '2022-05-09'])
        expect(result.total).toEqual(79.2);
        expect(result.discount).toEqual(.2);
    })
    it('returns the correct price for 4 days (weekday)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureOne, prices, ['2022-05-09', '2022-05-12'])
        expect(result.total).toEqual(92.8);
        expect(result.discount).toEqual(.2);
    })
})