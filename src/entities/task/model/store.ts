import { defineStore } from 'pinia';
import { ref } from 'vue';

const useTasksStore = defineStore('tasks', () => {
  const params = ref<Partial<Record<'labels' | 'statuses' | 'priorities', unknown>>>({});

  return {
    $reset() {
      params.value = {};
    },

    params,
  };
});

export default useTasksStore;