import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ClickCounter from './ClickCounter'

test('click to the button and check is value has changed', () => {
    render(<ClickCounter></ClickCounter>)

    const btn = screen.getByText(/click me/i)

    expect(btn).toBeInTheDocument()

    userEvent.click(btn)

    expect(screen.getByText(/click me 1/i)).toBeInTheDocument()

    userEvent.dblClick(btn)

    expect(screen.getByText(/click me 3/i)).toBeInTheDocument()
})
