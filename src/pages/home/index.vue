<template>
  <div class="home">
    <HeaderWidget>
      <template #center>
        <div class="flex-row align-center flex-grow">
          <search-autocomplete-input/>
        </div>
      </template>
    </HeaderWidget>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { HeaderWidget } from '@/widgets/header';
  import { SearchAutocompleteInput } from '@/features/search-global';

  export default defineComponent({
    name: 'HomePage',
    components: {
      HeaderWidget,
      SearchAutocompleteInput,
    },
  });
</script>

<style lang="scss">
  .home {
    flex-grow: 1;
  }
</style>
