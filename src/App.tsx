import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import type { Task } from './types'

const initialTasks: Task[] = [
  { id: 1, title: 'Write BugHunter demo issue', completed: false },
  { id: 2, title: 'Review generated PR', completed: false },
]

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
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

  const completedCount = tasks.filter((task) => task.completed).length

  return (
      <main className="app-shell">
        <section className="card">
          <div className="header">
            <div>
              <h1>Mini Task Board</h1>
              <p>Track tasks and mark them as complete.</p>
            </div>
            <div className="summary">
              {completedCount} / {tasks.length} completed
            </div>
          </div>

          <TaskInput onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onComplete={handleCompleteTask} />
        </section>
      </main>
  )
}