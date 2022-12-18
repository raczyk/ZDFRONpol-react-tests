export async function fetcher(endpoint = 'people/1') {
    try {
        const response = await fetch(`https://swapi.dev/api/${endpoint}`)
        return await response.json()
    } catch (e) {
        return null
    }
}
