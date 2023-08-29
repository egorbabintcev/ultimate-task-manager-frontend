<template>
  <div class="table">
    <div class="table-header"/>

    <div class="table-body"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'TableComponent',
    props: {
      columns: {
        type: Object as PropType<{ id: unknown, key: string }>,
      },
    },
  });
</script>

<style lang="scss">

</style>
