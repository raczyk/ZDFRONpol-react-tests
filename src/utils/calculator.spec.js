import { calculator } from './calculator'

test('is sum function return proper value', () => {
    const { sum } = calculator()
    const resultSum = sum(5, 3)
    expect(resultSum).toBe(8)
})


// TODO Add tests for all calculator utils
