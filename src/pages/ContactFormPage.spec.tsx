import { render, screen, waitFor } from '@testing-library/react'
import ContactFormPage from './ContactFormPage'
import userEvent from '@testing-library/user-event'

test('is contact form working properly', async () => {
    window.alert = jest.fn()
    render(<ContactFormPage></ContactFormPage>)
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
