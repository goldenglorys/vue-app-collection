<template>
  <section class="w-full flex">
    <div class="m-auto">
      <div class="mt-10">
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Firstname</th>
              <th class="px-4 py-2 border">Lastname</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.lastt_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="px-3 py-2 border rounded mt-4"
            @click="prev"
            :disabled="state.users.page == 1"
            :class="state.users.page == 1 ? 'bg-gray-100' : 'hover:shadow'"
          >
            Prev
          </button>
          <button
            class="px-3 py-2 border rounded mt-4"
            @click="next"
            :disabled="state.users.page == state.users.total_pages"
            :class="
              state.users.page == state.users.total_pages
                ? 'bg-gray-100'
                : 'hover:shadow'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";

import axios from "axios";

export default {
  setup() {
    const state = reactive({
      users: [],
    });
    onMounted(async () => {
      const { data } = await axios.get(
        `${process.env.VUE_APP_CRUD_API_URL}users`
      );
      state.users = data;
    });

    async function next() {
      const { data } = await axios.get(
        `${process.env.VUE_APP_CRUD_API_URL}users?page=2`
      );
      state.users = data;
    }

    async function prev() {
      const { data } = await axios.get(
        `${process.env.VUE_APP_CRUD_API_URL}users?page=1`
      );
      state.users = data;
    }
    return { state, next, prev };
  },
};
</script>

<style>
</style>