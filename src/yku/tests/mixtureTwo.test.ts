import { YKU_getPricesBasedOnDates } from "../fns"
import { mixtureTwo, prices } from "./utils"

// eightFootKayaks: 4 (48, 60)
// tenFootPaddleboards: 2 (30, 40)
// inflatablePaddleboards: 2 (40, 50)

describe('mixtureTwo', () => {
    it('returns the correct price for 1 day (weekday)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-09', '2022-05-09'])
        expect(result.total).toEqual(118);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 1 day (weekend)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-08', '2022-05-08'])
        expect(result.total).toEqual(150);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 2 days (weekday)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-11', '2022-05-12'])
        expect(result.total).toEqual(212.4);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (mixed)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-08', '2022-05-09'])
        expect(result.total).toEqual(241.2);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (weekend)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-14', '2022-05-15'])
        expect(result.total).toEqual(270);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 3 days (mixed)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-07', '2022-05-09'])
        expect(result.total).toEqual(334.4);
        expect(result.discount).toEqual(.2);
    })
    it('returns the correct price for 4 days (weekday)', () => {
        const result = YKU_getPricesBasedOnDates(mixtureTwo, prices, ['2022-05-09', '2022-05-12'])
        expect(result.total).toEqual(377.6);
        expect(result.discount).toEqual(.2);
    })
})