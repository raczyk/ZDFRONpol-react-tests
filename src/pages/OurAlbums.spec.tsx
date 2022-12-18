import React from 'react'
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import OurAlbums from './OurAlbums'

test('album data has been fetched properly', async () => {
    render(<OurAlbums></OurAlbums>)

    const loader = screen.getByLabelText('loading...')
    expect(loader).toBeInTheDocument()
    // console.log(loader)
    await waitForElementToBeRemoved(loader)
    // await screen.findAllByTestId('album')
    expect(await screen.findByText(/the greatest hits/i)).toBeInTheDocument()
    expect(screen.getByText(/the greatest hits/i)).toBeInTheDocument()
})
