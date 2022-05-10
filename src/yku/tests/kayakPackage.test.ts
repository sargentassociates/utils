import { YKU_getDaysOfWeek } from "../utils"
import { kayakPackage, prices } from "./utils"

describe('kayakPackage', () => {
    it('returns the correct price for 1 day (weekday)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-09', '2022-05-09'])
        expect(result.total).toEqual(70);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 1 day (weekend)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-08', '2022-05-08'])
        expect(result.total).toEqual(90);
        expect(result.discount).toEqual(0);
    })
    it('returns the correct price for 2 days (weekday)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-11', '2022-05-12'])
        expect(result.total).toEqual(126);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (mixed)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-08', '2022-05-09'])
        expect(result.total).toEqual(144);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 2 days (weekend)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-14', '2022-05-15'])
        expect(result.total).toEqual(162);
        expect(result.discount).toEqual(.1);
    })
    it('returns the correct price for 3 days (mixed)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-07', '2022-05-09'])
        expect(result.total).toEqual(200);
        expect(result.discount).toEqual(.2);
    })
    it('returns the correct price for 4 days (weekday)', () => {
        const result = YKU_getDaysOfWeek(kayakPackage, prices, ['2022-05-09', '2022-05-12'])
        expect(result.total).toEqual(224);
        expect(result.discount).toEqual(.2);
    })
})