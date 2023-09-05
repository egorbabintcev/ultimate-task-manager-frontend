import { defineStore } from 'pinia';
import { ref } from 'vue';

import { getLabels, Label } from '@/entities/label';

const useLabelsStore = defineStore('labels', () => {
  const labels = ref<Label[]>([]);

  async function fetchLabels() {
    labels.value = await getLabels();
  }

  return {
    $reset() {
      labels.value = [];
    },

    labels,

    fetchLabels,
  };
});

export default useLabelsStore;