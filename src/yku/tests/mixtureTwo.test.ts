import dayjs from "dayjs"
import { YKU_calculateTotal } from "../fns"
import { mixtureTwo, prices } from "./utils"

// eightFootKayaks: 4
// tenFootPaddleboards: 2
// inflatablePaddleboards: 2

describe('mixtureTwo', () => {
    it('returns the correct price for 1 day (weekday)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-09'), dayjs('2022-05-09')], null)
        expect(result.total).toEqual(170);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 1 day (weekend)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-08'), dayjs('2022-05-08')], null)
        expect(result.total).toEqual(210);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 2 days (weekday)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-11'), dayjs('2022-05-12')], null)
        expect(result.total).toEqual(306);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (mixed)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-08'), dayjs('2022-05-09')], null)
        expect(result.total).toEqual(342);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (weekend)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-14'), dayjs('2022-05-15')], null)
        expect(result.total).toEqual(378);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 3 days (mixed)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-07'), dayjs('2022-05-09')], null)
        expect(result.total).toEqual(472);
        expect(result.discount).toEqual(.2);
    })
    it('returns the correct price for 4 days (weekday)', () => {
        const result = YKU_calculateTotal(mixtureTwo, prices, [dayjs('2022-05-09'), dayjs('2022-05-12')], null)
        expect(result.total).toEqual(544);
        expect(result.discount).toEqual(.2);
    })
})