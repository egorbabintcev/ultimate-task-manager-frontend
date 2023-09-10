import { defineStore } from 'pinia';
import { ref } from 'vue';

import { TUser, getUsers } from '@/entities/user';

const useUsersStore = defineStore('users', () => {
  const users = ref<Array<TUser>>([]);

  async function fetchUsers() {
    users.value = await getUsers();
  }

  return {
    $reset() {
      users.value = [];
    },

    users,

    fetchUsers,
  };
});

export default useUsersStore;