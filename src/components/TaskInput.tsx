import { useState } from 'react'
import Button from './Button'

type FormState = {
  title: string
  description: string
  time: string
}

type TaskInputProps = {
  onAddTask: (title: string, description: string, time: string) => void
}

const INITIAL_FORM: FormState = {
  title: '',
  description: '',
  time: '',
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedTitle = form.title.trim()
    if (!trimmedTitle) return
    onAddTask(trimmedTitle, form.description.trim(), form.time)
    setForm(INITIAL_FORM)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="task-form__field">
        <label htmlFor="task-title">Task Name</label>
        <input
          id="task-title"
          name="title"
          type="text"
          placeholder="e.g. Write unit tests"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-form__field">
        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          name="description"
          placeholder="Optional — add more context about this task"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="task-form__field">
        <label htmlFor="task-time">Due Time</label>
        <input
          id="task-time"
          name="time"
          type="datetime-local"
          value={form.time}
          onChange={handleChange}
        />
      </div>

      <Button onClick={() => {}}>Add Task</Button>
    </form>
  )
}
