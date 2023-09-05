<script lang="ts">
  import { defineComponent } from 'vue';

  import { title } from '@/features/page-title/model';

  export default defineComponent({
    name: 'PageTitle',
    setup() {
      return {
        title,
      };
    },
  });
</script>

<template>
  <div class="page-title">
    <h3 class="page-title__text">
      {{ title }}
    </h3>
  </div>
</template>

<style lang="scss">
  .page-title {
    min-width: 0;
    overflow: hidden;
  }

  .page-title__text {
    font-size: 20px;
    font-weight: 500;
    text-overflow: ellipsis;
    color: rgba(0 0 0 / 0.87);

    overflow: hidden;
  }
</style>