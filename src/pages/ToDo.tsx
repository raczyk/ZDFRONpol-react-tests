import { useState } from 'react'

const ToDo = () => {
    const [todoValue, setTodoValue] = useState('')
    const [todoList, setTodoList] = useState<{ value: string }[]>([])

    const handlInputChange = (event: any) => {
        setTodoValue(event.target.value)
    }

    const handleSubmit = () => {
        setTodoList(prevState => [...prevState, { value: todoValue }])
        setTodoValue('')
    }
    const handleRemove = (index: number) => {
        setTodoList(prevState => {
            return [...prevState.filter((_item, idx) => idx !== index)]
        })
        setTodoValue('')
    }

    return (
        <div>
            <label htmlFor="name">name</label>
            <input
                id="name"
                type="text"
                value={todoValue}
                onChange={handlInputChange}
            />
            <button onClick={handleSubmit}>submit</button>
            {todoList.map(
                (item, index) =>
                    item.value && (
                        <li key={item.value}>
                            {item.value}{' '}
                            <button onClick={() => handleRemove(index)}>
                                remove
                            </button>
                        </li>
                    ),
            )}
        </div>
    )
}
export default ToDo
