import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import OrangeLink from './OrangeLink'

test('is orange link render properly and redirect to our-albums', () => {
    render(
        <BrowserRouter>
            <OrangeLink to="/our-albums"></OrangeLink>
        </BrowserRouter>,
    )

    const link = screen.getByLabelText('link')

    userEvent.click(link)
    console.log(window.location.pathname)

    expect(window.location.pathname).toBe('/our-albums')
})
