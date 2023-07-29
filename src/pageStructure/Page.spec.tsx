import { render, screen } from '@testing-library/react'
import Page from './Page'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const renderPage = () =>
    render(
        <BrowserRouter>
            <Page></Page>
        </BrowserRouter>,
    )

describe('Page is render properly', () => {
    it('change button name after click', () => {
        renderPage()
        const btn = screen.getByText(/click me/i)
        expect(btn).toBeInTheDocument()

        userEvent.click(btn)
        expect(screen.getByText(/click me 1/i)).toBeInTheDocument()

        userEvent.dblClick(btn)

        expect(screen.getByText(/click me 3/i)).toBeInTheDocument()
    })
    it('link to employee list', () => {
        renderPage()
        expect(screen.getByText(/employee list/i)).toBeInTheDocument()
        const employeeLink = screen.getByText(/employee list/i)
        userEvent.click(employeeLink)
        console.log(window.location.pathname)
        expect(window.location.pathname).toBe('/employees-list')
    })
})
