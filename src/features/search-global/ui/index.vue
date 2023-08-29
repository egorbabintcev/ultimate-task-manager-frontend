<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { GSymbol } from 'vue-material-symbols';

  export default defineComponent({
    name: 'SearchAutocompleteInput',
    components: {
      GSymbol,
    },
    setup() {
      const search = ref<string>('');

      return {
        search,
      };
    },
  });
</script>

<template>
  <el-input
  v-model="search"
  placeholder="Search">
    <template #prefix>
      <el-icon size="18">
        <g-symbol
        icon="search"
        type="rounded"/>
      </el-icon>
    </template>
  </el-input>
</template>

<style lang="scss">

</style>
