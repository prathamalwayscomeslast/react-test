import Button from './Button'
import type { Task } from '../types'

type TaskItemProps = {
  task: Task
  onComplete: (id: number) => void
}

export default function TaskItem({ task, onComplete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <div className="task-item__body">
        <span className="task-item__title">{task.title}</span>
        {task.description && (
          <p className="task-item__description">{task.description}</p>
        )}
        {task.time && (
          <span className="task-item__time">
            ⏰ {new Date(task.time).toLocaleString()}
          </span>
        )}
      </div>
      {!task.completed && (
        <Button onClick={() => onComplete(task.id)}>Complete</Button>
      )}
    </li>
  )
}
