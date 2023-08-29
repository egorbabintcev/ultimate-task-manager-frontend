<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HeaderWidget',
  });
</script>

<template>
  <div class="header">
    <div class="header-section">
      <slot name="left"/>
    </div>

    <div class="header-section">
      <slot name="center"/>
    </div>

    <div class="header-section">
      <slot name="right"/>
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;

    width: 100%;
    height: 60px;
  }

  .header-section {
    display: flex;
    flex-flow: column nowrap;

    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
