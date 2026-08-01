import type { Task } from '../types'
import TaskItem from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onComplete: (id: number) => void
}

export default function TaskList({ tasks, onComplete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add one above.</p>
  }

  return (
      <ul className="task-list">
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onComplete={onComplete} />
        ))}
      </ul>
  )
}