import type { Task } from '../types'
import Button from './Button'

type TaskItemProps = {
  task: Task
  onComplete: (id: number) => void
}

export default function TaskItem({ task, onComplete }: TaskItemProps) {
  return (
      <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        <div>
          <p className="task-title">{task.title}</p>
          <span className="task-status">
          {task.completed ? 'Completed' : 'Pending'}
        </span>
        </div>

        {!task.completed && (
            <Button onClick={() => onComplete}>Complete</Button>
        )}
      </li>
  )
}