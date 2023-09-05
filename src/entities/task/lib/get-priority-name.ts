import { TaskPriority } from '@/entities/task';

export default function getPriorityName(status: TaskPriority) {
  const map: Record<TaskPriority, string> = {
    0: 'Low',
    1: 'Normal',
    2: 'High',
  };

  return map[status];
}