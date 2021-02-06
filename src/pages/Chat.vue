<template>
  <div v-if="isOpen">
    <section class="flex w-full">
      <div class="m-auto">
        <h1 class="text-center text-2xl">Real Time Chat</h1>
        <div class="border rounded-lg">
          <div class="h-64 p-2">
            <div
              v-for="chat in state.chats"
              :key="chat.message"
              :class="
                chat.userEmail === userEmail
                  ? 'text-right w-full'
                  : 'text-left w-full'
              "
            >
              {{ chat.message }}
            </div>
          </div>
          <div class="h-8 p-2">
            <input
              type="text"
              v-model="state.message"
              placeholder="Start typing..."
              class="border rounded shadow p-1"
              @keydown.enter="sendMessage"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { chatRefs } from "../helpers/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      // userId: null,
      // userEmail: null,
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser.id);
    const userEmail = computed(() => store.state.authUser.email);
    onMounted(async () => {
      chatRefs.on("child_added", (snapshot) => {
        // state.userId = firebase.auth().currentUser.uid;
        // state.userEmail = firebase.auth().currentUser.email;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    function sendMessage() {
      const newChat = chatRefs.push();

      newChat.set({
        userId: state.userId,
        userEmail: state.userEmail,
        message: state.message,
      });
      state.message = "";
    }
    return { state, sendMessage, userId, userEmail };
  },
};
</script>

<style>
</style>