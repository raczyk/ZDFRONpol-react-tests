import React from 'react'
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import EmployeesListPage from './EmployeesListPage'
import { BrowserRouter } from 'react-router-dom'

test('employee data has been fetch properly', async () => {
    render(
        <BrowserRouter>
            <EmployeesListPage />
        </BrowserRouter>,
    )
    const loader2 = screen.getByTestId('loader')
    const loader = screen.getByLabelText('loading...')
    expect(loader2).toBeInTheDocument()
    expect(loader).toBeInTheDocument()
    await waitForElementToBeRemoved(loader)
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
})
