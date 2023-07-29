import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import OurAlbums from './OurAlbums'

test('album data has been fetched properly', async () => {
    render(<OurAlbums></OurAlbums>)
    const loader = screen.getByTestId('loader')
    expect(loader).toBeInTheDocument()

    console.log(loader)
    await waitForElementToBeRemoved(loader)

    expect(screen.getByText(/nevermind/i)).toBeInTheDocument()
    expect(screen.getByText(/the greatest hits/i)).toBeInTheDocument()
    expect(await screen.findByText(/nevermind/i)).toBeInTheDocument()
})
