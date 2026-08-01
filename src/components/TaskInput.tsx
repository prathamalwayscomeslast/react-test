import { useState } from 'react'
import Button from './Button'

type TaskInputProps = {
  onAddTask: (title: string) => void
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    onAddTask(trimmed)
    setValue('')
  }

  return (
      <div className="task-input">
        <input
            aria-label="Task title"
            type="text"
            placeholder="Add a task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={handleSubmit}>Add Task</Button>
      </div>
  )
}