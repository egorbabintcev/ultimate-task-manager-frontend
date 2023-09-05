import { TaskCategory } from '@/entities/task';

export default function getCategoryName(category: TaskCategory) {
  const map: Record<TaskCategory, string> = {
    [TaskCategory.NONE]: 'No category',
    [TaskCategory.BACKEND]: 'Backend',
    [TaskCategory.FRONTEND]: 'Frontend',
  };

  return map[category];
}