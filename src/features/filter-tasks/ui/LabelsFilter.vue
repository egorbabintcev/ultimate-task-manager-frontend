<script lang="ts">
  import { computed, defineComponent, onBeforeMount } from 'vue';
  import { GSymbol } from 'vue-material-symbols';
  import { storeToRefs } from 'pinia';

  import { Label, useLabelsStore } from '@/entities/label';
  import { useTasksStore } from '@/entities/task';
  import { FieldLikeLabel } from '@/shared';

  type LabelItem = {
    label: Label['display_name']
    value: Label['id']
  }

  export default defineComponent({
    name: 'LabelsFilter',
    props: {
      withLabel: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      GSymbol,
      FieldLikeLabel,
    },
    setup() {
      const labelsStore = useLabelsStore();
      const labelsStoreRefs = storeToRefs(labelsStore);
      const tasksStore = useTasksStore();
      const tasksStoreRefs = storeToRefs(tasksStore);

      const labels = computed<LabelItem[]>(() => {
        return labelsStoreRefs.labels.value.map((label) => ({
          label: label.display_name,
          value: label.id,
        }));
      });

      const selectedLabels = computed({
        get() {
          return tasksStoreRefs.params.value.labels ?? [];
        },
        set(value: Label['id']) {
          tasksStore.params.labels = value;
        },
      });

      function dropdownVisibilityChangeHandler(isVisible: boolean) {
        if (isVisible) {
          labelsStore.fetchLabels();
        }
      }

      onBeforeMount(() => {
        labelsStore.fetchLabels();
      });

      return {
        labels,
        selectedLabels,

        dropdownVisibilityChangeHandler,
      };
    },
  });
</script>

<template>
  <field-like-label
  :name="
    withLabel
      ? 'Label'
      : null
  ">
    <el-select
    v-model="selectedLabels"
    @visible-change="dropdownVisibilityChangeHandler"
    clearable
    collapseTags
    collapseTagsTooltip
    multiple
    placeholder="Select">
      <el-option
      v-for="label in labels"
      :label="label.label"
      :value="label.value"
      :key="label.value"/>

      <template #prefix>
        <el-icon size="16">
          <g-symbol
          icon="label"
          type="rounded"/>
        </el-icon>
      </template>
    </el-select>
  </field-like-label>
</template>

<style lang="scss">

</style>