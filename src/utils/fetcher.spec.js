import { fetcher } from './fetcher'

beforeEach(() => {
    fetch.resetMocks()
})

test('converts correctly', async () => {
    fetch.mockResponseOnce(
        JSON.stringify({
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
        }),
    )

    const data = await fetcher()

    expect(data).toEqual(
        expect.objectContaining({
            name: 'Luke Skywalker',
        }),
    )
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(`https://swapi.dev/api/people/1`)
})
