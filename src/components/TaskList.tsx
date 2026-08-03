import type { Task } from '../types'
import TaskItem from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onComplete: (id: number) => void
}

export default function TaskList({ tasks, onComplete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__icon">📋</div>
        <p>No tasks yet — add one above!</p>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={onComplete} />
      ))}
    </ul>
  )
}
