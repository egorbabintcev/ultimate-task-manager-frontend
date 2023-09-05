<template>
  <div class="home">
    <HeaderWidget>
      <template #left>
        <div class="flex-row align-center justify-start flex-grow">
          <page-title/>
        </div>
      </template>

      <template #center>
        <div class="flex-row align-center flex-grow">
          <search-autocomplete-input/>
        </div>
      </template>

      <template #right>
        <div class="flex-row align-center justify-end flex-grow gap-12">
          <create-task-button/>

          <toggle-filters-button/>
        </div>
      </template>
    </HeaderWidget>

    <div class="home-content">
      <collapsable-filters-block>
        <div
        class="flex-row gap-12"
        style="max-width: 1024px">
          <status-filters withLabel/>

          <priority-filters withLabel/>

          <category-filters withLabel/>
        </div>
      </collapsable-filters-block>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { HeaderWidget } from '@/widgets/header';
  import { SearchAutocompleteInput } from '@/features/search-global';
  import { PageTitle, usePageTitle } from '@/features/page-title';
  import { CreateTaskButton } from '@/features/create-task';
  import { ToggleFiltersButton, CollapsableFiltersBlock, StatusFilters, PriorityFilters, CategoryFilters } from '@/features/filter-tasks';

  export default defineComponent({
    name: 'HomePage',
    components: {
      HeaderWidget,
      PageTitle,
      SearchAutocompleteInput,
      CreateTaskButton,
      ToggleFiltersButton,
      CollapsableFiltersBlock,
      StatusFilters,
      PriorityFilters,
      CategoryFilters,
    },
    setup() {
      usePageTitle('Tasks');
    },
  });
</script>

<style lang="scss">
  .home {
    flex-grow: 1;
  }

  .home-content {
    padding: 16px;
    overflow: hidden;
  }
</style>
