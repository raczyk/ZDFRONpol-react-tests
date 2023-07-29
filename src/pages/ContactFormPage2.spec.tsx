import { render, screen, waitFor } from '@testing-library/react'
import ContactFormPage2 from './ContactFormPage2'
import userEvent from '@testing-library/user-event'

describe('contact form behavior', () => {
    it('submit properly', async () => {
        window.alert = jest.fn()
        render(<ContactFormPage2 />)
        const firstNameInput = screen.getByText(/first name/i)
        userEvent.type(firstNameInput, 'Jan')
        const secondNameInput = screen.getByText(/surname/i)
        userEvent.type(secondNameInput, 'Kowalski')

        const submitBtn = screen.getByRole('button', {
            name: /submit/i,
        })
        userEvent.click(submitBtn)
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledTimes(1)
        })
    })
    it('rest properly', async () => {
        window.alert = jest.fn()
        render(<ContactFormPage2 />)
        const firstNameInput = screen.getByText(/first name/i)
        userEvent.type(firstNameInput, 'Jan')
        const secondNameInput = screen.getByText(/surname/i)
        userEvent.type(secondNameInput, 'Kowalski')

        const resetBtn = screen.getByRole('button', {
            name: /reset/i,
        })
        userEvent.click(resetBtn)
        const error = screen.getByText(/to few characters!/i)

        expect(error).toBeInTheDocument()
    })
})
