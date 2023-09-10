import { defineStore } from 'pinia';
import { ref } from 'vue';

const useTasksStore = defineStore('tasks', () => {
  const params = ref<Partial<{
    'labels': Array<number>,
    'statuses': unknown,
    'priorities': unknown,
    'assignee': number,
  }>>({});

  return {
    $reset() {
      params.value = {};
    },

    params,
  };
});

export default useTasksStore;