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

    min-height: 56px;
    width: 100%;
    padding: 0 8px;

    border-bottom: 1px solid rgba(0 0 0 / 0.08);
  }

  .header-section {
    display: flex;
    flex-flow: column nowrap;

    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 8px;
  }
</style>
