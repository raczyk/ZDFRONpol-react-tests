import { render, screen } from '@testing-library/react'
import ClickCounter from './ClickCounter'
import userEvent from '@testing-library/user-event'

test('is clickCounter change text after click', () => {
    render(<ClickCounter />)
    const btn = screen.getByText(/click me/i)
    expect(btn).toBeInTheDocument()

    userEvent.click(btn)
    expect(screen.getByText(/click me 1/i)).toBeInTheDocument()

    userEvent.dblClick(btn)

    expect(screen.getByText(/click me 3/i)).toBeInTheDocument()
})
