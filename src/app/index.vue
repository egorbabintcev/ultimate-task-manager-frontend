<template>
  <div class="app">
    <div class="app-route">
      <pages-routing/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import PagesRouting from '@/pages';

  export default defineComponent({
    name: 'AppComponent',
    components: {
      PagesRouting,
    },
  });
</script>

<style lang="scss">
  @use '@/app';

  .app {
    display: flex;
    flex-flow: column nowrap;

    width: 100vw;
    min-width: 1024px;
    height: 100vh;
    overflow: hidden;

    position: fixed;
    top: 0;
    left: 0;
  }

  .app-route {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;

    overflow: hidden;
  }
</style>
