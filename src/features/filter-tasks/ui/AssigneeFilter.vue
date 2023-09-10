<script lang='ts'>
  import { defineComponent, computed, onBeforeMount } from 'vue';
  import { storeToRefs } from 'pinia';
  import { GSymbol } from 'vue-material-symbols';

  import { useTasksStore } from '@/entities/task';
  import { useUsersStore, TUser } from '@/entities/user';
  import { FieldLikeLabel } from '@/shared';

  export default defineComponent({
    name: 'AssigneeFilter',
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
      const usersStore = useUsersStore();
      const tasksStore = useTasksStore();

      const { users } = storeToRefs(usersStore);
      const { params } = storeToRefs(tasksStore);

      const selectedUser = computed<TUser['id'] | undefined>({
        get() {
          return params.value.assignee;
        },
        set(value: TUser['id'] | string | undefined) {
          if (typeof value === 'string') {
            delete params.value.assignee;

            return;
          }

          tasksStore.params.assignee = value;
        },
      });

      function fetchUsers() {
        usersStore.fetchUsers();
      }

      function dropdownVisibilityChangeHandler(isVisible: boolean) {
        if (isVisible) {
          fetchUsers();
        }
      }

      onBeforeMount(() => {
        fetchUsers();
      });

      return {
        users,
        selectedUser,

        dropdownVisibilityChangeHandler,
      };
    },
  });
</script>

<template>
  <field-like-label
  :name="
    withLabel
      ? 'Assignee'
      : null
  ">
    <el-select
    v-model="selectedUser"
    clearable
    collapseTags
    collapseTagsTooltip
    placeholder="Select">
      <el-option
      v-for="priority in users"
      :label="priority.displayName"
      :value="priority.id"
      :key="priority.id"/>

      <template #prefix>
        <el-icon size="16">
          <g-symbol
          icon="assignment_ind"
          type="rounded"/>
        </el-icon>
      </template>
    </el-select>
  </field-like-label>
</template>

<style lang='scss'>
</style>