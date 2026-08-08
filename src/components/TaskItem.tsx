import Button from './Button'
import type { Task } from '../types'

type TaskItemProps = {
  task: Task
  onComplete: (id: number) => void
}

export default function TaskItem({ task, onComplete }: TaskItemProps) {
  const formatTime = (iso: string) => {
    try {
      return new Date(iso).toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    } catch {
      return iso
    }
  }

  return (
    <li className={`task-item${task.completed ? ' task-item--completed' : ''}`}>
      <div className="task-item__body">
        <span className="task-item__title">{task.title}</span>
        {task.description && (
          <p className="task-item__description">{task.description}</p>
        )}
        {task.time && (
          <span className="task-item__time">⏰ {formatTime(task.time)}</span>
        )}
      </div>

      {task.completed ? (
        <span className="task-item__done-badge">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#437a22" fillOpacity="0.15" />
            <path d="M4 7.5L6.5 10L11 5.5" stroke="#437a22" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Done
        </span>
      ) : (
        <Button variant="complete" onClick={() => onComplete(task.id)}>
          Mark done
        </Button>
      )}
    </li>
  )
}
