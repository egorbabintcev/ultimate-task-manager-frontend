import { TaskStatus } from '@/entities/task';

export default function getStatusName(status: TaskStatus) {
  const map: Record<TaskStatus, string> = {
    0: 'New',
    1: 'In Progress',
    2: 'Developed',
    3: 'Closed',
    4: 'Reopened',
  };

  return map[status];
}