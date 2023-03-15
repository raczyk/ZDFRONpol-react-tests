import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import EmployeesListPage from './EmployeesListPage'

test('eployee data has been fetch properly', async () => {
    render(
        <BrowserRouter>
            <EmployeesListPage></EmployeesListPage>,
        </BrowserRouter>,
    )
    expect(screen.getByText(/emloyee list/i)).toBeInTheDocument()
    const loader = screen.getByLabelText('loading...')
    expect(loader).toBeInTheDocument()
    await waitForElementToBeRemoved(loader)
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
})
