<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { GSymbol } from 'vue-material-symbols';
  import { storeToRefs } from 'pinia';

  import { getPriorityName, TaskPriority, useTasksStore } from '@/entities/task';
  import { FieldLikeLabel } from '@/shared';

  type PriorityItem = {
    label: string
    value: TaskPriority
  }

  export default defineComponent({
    name: 'PriorityFilters',
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
      const tasksStore = useTasksStore();
      const tasksStoreRefs = storeToRefs(tasksStore);

      const priorities: PriorityItem[] = [
        {
          label: getPriorityName(TaskPriority.LOW),
          value: TaskPriority.LOW,
        },
        {
          label: getPriorityName(TaskPriority.NORMAL),
          value: TaskPriority.NORMAL,
        },
        {
          label: getPriorityName(TaskPriority.HIGH),
          value: TaskPriority.HIGH,
        },
      ];

      const selectedPriorities = computed({
        get(): TaskPriority {
          return tasksStoreRefs.params.value.priorities ?? [];
        },
        set(value: TaskPriority[]) {
          tasksStore.params.priorities = value;
        },
      });

      return {
        priorities,
        selectedPriorities,
      };
    },
  });
</script>

<template>
  <field-like-label
  :name="
    withLabel
      ? 'Priority'
      : null
  ">
    <el-select
    v-model="selectedPriorities"
    collapseTags
    collapseTagsTooltip
    multiple
    placeholder="Select">
      <el-option
      v-for="priority in priorities"
      :label="priority.label"
      :value="priority.value"
      :key="priority.value"/>

      <template #prefix>
        <el-icon size="16">
          <g-symbol
          icon="bolt"
          type="rounded"/>
        </el-icon>
      </template>
    </el-select>
  </field-like-label>
</template>

<style lang="scss">

</style>