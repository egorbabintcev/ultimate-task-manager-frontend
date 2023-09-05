<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'FieldLikeLabel',
    props: {
      name: {
        type: String as PropType<string | null>,
        default: null,
      },
    },
  });
</script>

<template>
  <div
  v-if="name"
  class="label">
    <p class="label__name">
      {{ name }}
    </p>

    <slot/>
  </div>

  <slot
  v-else/>
</template>

<style lang="scss">
  .label {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;

    width: 100%;
    overflow: hidden;
  }

  .label__name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0 0 0 / 0.54);
    line-height: 1.33;
  }
</style>