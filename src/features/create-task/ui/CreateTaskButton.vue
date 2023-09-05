<script lang="ts">
  import { defineComponent } from 'vue';
  import { GSymbol } from 'vue-material-symbols';

  export default defineComponent({
    name: 'CreateTaskButton',
    components: {
      GSymbol,
    },
  });
</script>

<template>
  <el-button
  type="primary">
    Create

    <template #icon>
      <el-icon size="18">
        <g-symbol
        :grade="200"
        icon="add"
        type="rounded"/>
      </el-icon>
    </template>
  </el-button>
</template>

<style lang="scss">

</style>