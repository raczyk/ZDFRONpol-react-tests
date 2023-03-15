import React from 'react'
import { render, screen } from '@testing-library/react'
import ToDo from './ToDo'
import userEvent from '@testing-library/user-event'

describe('todo list component', () => {
    it('todo list', async () => {
        render(<ToDo />)

        const input = screen.getByText(/name/i)
        const submitBtn = screen.getByRole('button', {
            name: /submit/i,
        })

        userEvent.type(input, 'ds1')
        userEvent.click(submitBtn)

        userEvent.type(input, 'ds2')
        userEvent.click(submitBtn)

        expect(screen.getByText(/ds1/i)).toBeInTheDocument()
        expect(screen.getByText(/ds2/i)).toBeInTheDocument()
    })
    it('todo list remove item', async () => {
        render(<ToDo />)

        const input = screen.getByText(/name/i)
        const submitBtn = screen.getByRole('button', {
            name: /submit/i,
        })

        userEvent.type(input, 'ds1')
        userEvent.click(submitBtn)

        expect(screen.getByText(/ds1/i)).toBeInTheDocument()

        const removeBtn = screen.getByRole('button', {
            name: /remove/i,
        })
        userEvent.click(removeBtn)
        expect(screen.queryByText(/ds1/i)).not.toBeInTheDocument()
    })
})
