import { string } from './string'

test('is reverse function return proper value', () => {
    const { reverse } = string()

    expect(reverse('asd')).toBe('dsa')
})
