import { readonly, ref } from 'vue';

const isFiltersBlockCollapsedValue = ref<boolean>(true);
export const isFiltersBlockCollapsed = readonly(isFiltersBlockCollapsedValue);

export function toggleFiltersBlockCollapse(value?: boolean) {
  isFiltersBlockCollapsedValue.value = value ?? !isFiltersBlockCollapsedValue.value;
}