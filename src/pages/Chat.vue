<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            type="text"
            v-model="state.message"
            placeholder="Start typing..."
            class="border rounded shadow p-1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase from "../helpers/firebase";

export default {
  setup() {
    const state = reactive({
      chats: {},
      message: "",
    });
    onMounted(async () => {
      const database = firebase.database();
      console.log(database);
      const collection = database.ref("chats");
      const data = await collection.once("value");
      state.chats = data.val();
      collection.on("value", (snapshot) => {
        state.chats = snapshot.val();
      });
    });

    return { state };
  },
};
</script>

<style>
</style>