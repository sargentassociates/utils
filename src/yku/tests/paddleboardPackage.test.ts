import dayjs from "dayjs"
import { YKU_calculateTotal } from "../fns"
import { paddleboardPackage, prices } from "./utils"

describe('paddleboardPackage', () => {
    it('returns the correct price for 1 day (weekday)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-09'), dayjs('2022-05-09')], null)
        expect(result.total).toEqual(90);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 1 day (weekend)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-08'), dayjs('2022-05-08')], null)
        expect(result.total).toEqual(110);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 2 days (weekday)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-11'), dayjs('2022-05-12')], null)
        expect(result.total).toEqual(162);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (mixed)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-08'), dayjs('2022-05-09')], null)
        expect(result.total).toEqual(180);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (weekend)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-14'), dayjs('2022-05-15')], null)
        expect(result.total).toEqual(198);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 3 days (mixed)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-07'), dayjs('2022-05-09')], null)
        expect(result.total).toEqual(248);
        expect(result.discount).toEqual(.2);
    })
    it('returns the correct price for 4 days (weekday)', () => {
        const result = YKU_calculateTotal(paddleboardPackage, prices, [dayjs('2022-05-09'), dayjs('2022-05-12')], null)
        expect(result.total).toEqual(288);
        expect(result.discount).toEqual(.2);
    })
})