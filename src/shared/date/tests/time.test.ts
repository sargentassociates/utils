import { getElapsedDuration } from '../time';

describe('testing time functions', () => {
    it('correctly displays correct time stamp (0, 5000)', () => {
        const elapsedTime = getElapsedDuration(0, 5000);
        expect(elapsedTime).toBe(`Elapsed time: 0h:0m:5s`)
    })
    it('correctly displays correct time stamp (0, 2,600,000)', () => {
        const elapsedTime = getElapsedDuration(0, 2600000);
        expect(elapsedTime).toBe(`Elapsed time: 0h:43m:20s`)
    })
    it('correctly displays correct time stamp (0, 35,021,000)', () => {
        const elapsedTime = getElapsedDuration(0, 35021000);
        expect(elapsedTime).toBe(`Elapsed time: 9h:43m:41s`)
    })
})