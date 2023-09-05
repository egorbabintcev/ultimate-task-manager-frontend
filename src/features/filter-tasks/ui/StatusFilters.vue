<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { GSymbol } from 'vue-material-symbols';
  import { storeToRefs } from 'pinia';

  import { getStatusName, TaskStatus, useTasksStore } from '@/entities/task';
  import { FieldLikeLabel } from '@/shared';

  type StatusItem = {
    label: string
    value: TaskStatus
  }

  export default defineComponent({
    name: 'StatusFilters',
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

      const statuses: StatusItem[] = [
        {
          label: getStatusName(TaskStatus.NEW),
          value: TaskStatus.NEW,
        },
        {
          label: getStatusName(TaskStatus.IN_PROGRESS),
          value: TaskStatus.IN_PROGRESS,
        },
        {
          label: getStatusName(TaskStatus.DEVELOPED),
          value: TaskStatus.DEVELOPED,
        },
        {
          label: getStatusName(TaskStatus.REOPENED),
          value: TaskStatus.REOPENED,
        },
        {
          label: getStatusName(TaskStatus.CLOSED),
          value: TaskStatus.CLOSED,
        },
      ];

      const selectedStatuses = computed({
        get(): TaskStatus[] {
          return tasksStoreRefs.params.value.statuses ?? [];
        },
        set(value: TaskStatus[]) {
          tasksStore.params.statuses = value;
        },
      });

      return {
        statuses,
        selectedStatuses,
      };
    },
  });
</script>

<template>
  <field-like-label
  :name="
    withLabel
      ? 'Status'
      : null
  ">
    <el-select
    v-model="selectedStatuses"
    collapseTags
    collapseTagsTooltip
    multiple
    placeholder="Select">
      <el-option
      v-for="status in statuses"
      :label="status.label"
      :value="status.value"
      :key="status.value"/>

      <template #prefix>
        <el-icon size="16">
          <g-symbol
          icon="task_alt"
          type="rounded"/>
        </el-icon>
      </template>
    </el-select>
  </field-like-label>
</template>

<style lang="scss">

</style>