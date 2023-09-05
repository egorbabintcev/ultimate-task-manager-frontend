import { ref } from 'vue';

export const title = ref<string>('');
export function usePageTitle(value: string) {
  title.value = value;
}
