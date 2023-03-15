import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactFormPage from './ContactFormPage'

test('is contact form working properly', async () => {
    window.alert = jest.fn()
    render(<ContactFormPage></ContactFormPage>)

    const firstNameInput = screen.getByText(/first name/i)

    userEvent.type(firstNameInput, 'Jan')

    const surnameNameInput = screen.getByText(/surname/i)

    userEvent.type(surnameNameInput, 'Kowalski')

    const submitBtn = screen.getByRole('button', {
        name: /submit/i,
    })
    userEvent.click(submitBtn)

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledTimes(1)
    })
})
