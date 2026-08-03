import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import type { Task } from './types'

const initialTasks: Task[] = [
  { id: 1, title: 'Write BugHunter demo issue', description: 'Reproduce the bug and write a clear reproduction case.', time: '', completed: false },
  { id: 2, title: 'Review generated PR', description: '', time: '', completed: true },
]

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleAddTask = (title: string, description: string, time: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      time,
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const handleCompleteTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    )
  }

  const completedCount = tasks.filter((t) => t.completed).length

  return (
    <main className="app-shell">
      <section className="card">
        <div className="header">
          <div>
            <h1>Task Board</h1>
            <p>Add tasks, set due times, and mark them done.</p>
          </div>
          <div className="summary">
            {completedCount} / {tasks.length} done
          </div>
        </div>

        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onComplete={handleCompleteTask} />
      </section>
    </main>
  )
}
