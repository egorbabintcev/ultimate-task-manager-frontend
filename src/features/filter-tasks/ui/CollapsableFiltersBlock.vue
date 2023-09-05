<script lang="ts">
  import { defineComponent } from 'vue';

  import { isFiltersBlockCollapsed } from '@/features/filter-tasks/model';

  export default defineComponent({
    name: 'CollapsableFiltersBlock',
    setup() {
      return {
        isFiltersBlockCollapsed,
      };
    },
  });
</script>

<template>
  <div
  v-if="!isFiltersBlockCollapsed"
  class="collapsable-filters-block">
    <slot/>
  </div>
</template>

<style lang="scss">
  .collapsable-filters-block {
    min-height: 240px;
    width: 100%;
    padding: 16px;

    background-color: rgba(0 0 0 / 0.04);
    border: 1px solid rgba(0 0 0 / 0.08);
    border-radius: 4px;
  }
</style>