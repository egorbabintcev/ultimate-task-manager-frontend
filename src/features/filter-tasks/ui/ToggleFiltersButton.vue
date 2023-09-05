<script lang="ts">
  import { defineComponent } from 'vue';
  import { GSymbol } from 'vue-material-symbols';
  import { toggleFiltersBlockCollapse } from '@/features/filter-tasks/model';

  export default defineComponent({
    name: 'ToggleFiltersButton',
    components: {
      GSymbol,
    },
    setup() {
      return {
        toggleFiltersBlockCollapse,
      };
    },
  });
</script>

<template>
  <el-button
  @click="toggleFiltersBlockCollapse()">
    Filters

    <template #icon>
      <el-icon size="18">
        <g-symbol
        :grade="200"
        icon="filter_alt"
        type="rounded"/>
      </el-icon>
    </template>
  </el-button>
</template>

<style lang="scss">

</style>